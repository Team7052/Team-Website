var blogs = [];

function setInitialCategory() {
    if (sessionStorage.currentBlogCategory) {
        setCategory(sessionStorage.currentBlogCategory);
    }
    else {
        setCategory("Home");
    }
}
function setCategory(category) {
    let blogCategories = document.getElementsByClassName("blog-category-element");
    sessionStorage.currentBlogCategory = category;
    for (let element of blogCategories) {
        if (element.innerHTML == category) {
            element.className = "blog-category-element blog-category-element-current";
        }
        else {
            element.className = "blog-category-element";
        }
    }
}

function parseBlogs() {
    getRequest("../jsonFiles/blogs.json", function(response) {
        let blogsJson = JSON.parse(response);
        var categories = ["Home"];
        var series = [];
        blogs = [];
        
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
                setCategory(element.innerHTML);
            });
        }
        setCategory(this.sessionStorage.currentBlogCategory);
    });
}

function Blog(jsonObj) {
    this.category = jsonObj['category'];
    this.series = jsonObj['series'];
    this.numberInSeries = jsonObj['numberInSeries'];
    this.markupPath = jsonObj['markupPath'];
}