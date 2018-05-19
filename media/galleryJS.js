function loadGallery() {
    // read json file
    let galleryElement = document.getElementById('media-gallery-section');
    let jsonRequest = new XMLHttpRequest();
    jsonRequest.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let galleryObj = JSON.parse(this.responseText);
            loadSequentialGalleryYears(galleryElement, galleryObj.gallery, 0);
        }
    }
    jsonRequest.open("GET", "jsonFiles/galleryFolders.json");
    jsonRequest.send();
}
/* By year, then by date */
/* Start year is 2018: when i=1, year = 2019 and when i = 2, year = 2020 */
function loadSequentialGalleryYears(element, array, i) {
    let year = array.length - (i + 1) + 2018;
    if (i < array.length) {
        let yearTitleElement = document.createElement('div');
        yearTitleElement.className = 'gallery-year-title';
        yearTitleElement.innerHTML = year;
        element.appendChild(yearTitleElement);

        let newYearSection = document.createElement('div');
        newYearSection.className = 'gallery-year-section';
        newYearSection.id = 'gallery-year-' + year;
        element.appendChild(newYearSection);
        
        //load sequential for this year
        loadYearlySequentialGalleryEvents(newYearSection, array[i]['year' + year], 0, year, function() {
            loadSequentialGalleryYears(element, array, i+1);
        });
    }
}
function loadYearlySequentialGalleryEvents(element, array, i, year, callback) {
    let length = array.length;
    if (i < length) {
        let title = array[i].title;
        let folderName = array[i].folderName;
        let eventRequest = new XMLHttpRequest();
        eventRequest.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let inner = element.innerHTML;
                element.innerHTML = inner + this.responseText;
                loadYearlySequentialGalleryEvents(element, array, i + 1, year, callback);
            }
        }
        eventRequest.open("GET", "galleryTemplate.php?title=" + title + "&year=" + year + "&folderName=" + folderName);
        eventRequest.send();
    }
    else {
        callback();
    }
}

