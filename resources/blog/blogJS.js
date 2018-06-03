function BlogManager() {
    if (sessionStorage.currentBlogCategory) {
        this.setCategory(sessionStorage.currentBlogCategory);
    }
    else {
        this.setCategory("Home");
    }
}
BlogManager.prototype.setCategory = function(category) {
    let blogCategories = document.getElementsByClassName("blog-category-element");
    sessionStorage.currentBlogCategory = category;
    this.currentCategory = category;
    for (let element of blogCategories) {
        if (element.innerHTML == category) {
            element.className = "blog-category-element blog-category-element-current";
        }
        else {
            element.className = "blog-category-element";
        }
    }
}

function initBlog() {
    if (typeof(blogManager) == "undefined") {
        let blogManager = new BlogManager();
        parseBlogs(blogManager);
    }
    else parseBlogs(blogManager);
}

function parseBlogs(manager) {
    getRequest("blog/blogs.json", function(response) {
        let blogsJson = JSON.parse(response);
        var blogs = [];
        var categories = ["Home"];
        var series = [];
        
        for (let blog of blogsJson['blogs']) {
            if (!categories.includes(blog['category'])) categories.push(blog['category']);
            if (!series.includes(blog['series'])) series.push(blog['series']); 

            blogs.push(new Blog(blog));
        }

        var newBlogsStr = "";

        for (let cat of categories) {
            newBlogsStr += "<div class='blog-category-element'>" + cat + "</div>";
        }
        let categoriesDOM = document.getElementById('blog-categories-container');
        categoriesDOM.innerHTML = newBlogsStr;
        
        let blogCategoryElements = document.getElementsByClassName('blog-category-element');
        for (let element of blogCategoryElements) {
            // add click event to manage current blog
            element.addEventListener('click', function() {
                manager.setCategory(element.innerHTML);
            });
        }
        manager.setCategory(this.sessionStorage.currentBlogCategory);
    });
}

function Blog(jsonObj) {
    this.category = jsonObj['category'];
    this.series = jsonObj['series'];
    this.numberInSeries = jsonObj['numberInSeries'];
    this.markupPath = jsonObj['markupPath'];
}