
function colorNavBar(currentTitle) {
    // set current nav section color (but skip for now until full dropdown menu is created)
    // get current subsection
    if (currentTitle == "Home") {
        let homeElement = document.getElementsByClassName('navbar-element-no-dropdown')[0];
        homeElement.className = "navbar-element-no-dropdown navbar-element-current";
    }
    else {
        let navBarElements = document.getElementsByClassName('navbar-element');
        for (i = 0; i < navBarElements.length; i++) {
            let title = document.getElementsByClassName('dropdown-title')[i];
            if (title.innerHTML == currentTitle) {
                title.className = "dropdown-title dropdown-title-current";
            }
            else {
                title.className = "dropdown-title";
            }
        }
    }
}

// auto navbar 
window.onscroll = function() {
    let nav = document.getElementById('navbar');
    console.log(window.pageYOffset);
    if (window.pageYOffset >= window.innerHeight * 3 / 4) {
        nav.style.position = 'fixed';
        nav.style.backgroundColor = 'rgba(100,100,100,1)';
        nav.style.opacity = 1;

        for (element of this.document.getElementsByClassName('navbar-element')) {
            element.className = 'navbar-element navbar-element-dark';
        }
        for (element of this.document.getElementsByClassName('navbar-dropdown-element-list-item')) {
            element.className = 'navbar-dropdown-element-list-item navbar-dropdown-element-list-item-dark';
        }
    }
    else {
        if (window.pageYOffset > nav.offsetHeight) {
            nav.style.opacity = 0;
        }
        else {
            nav.style.position = 'absolute';
            nav.style.opacity = 1;
        }
        nav.style.backgroundColor = 'rgba(200,200,200,0.5)';

        console.log(nav.style.backgroundColor);

        for (element of this.document.getElementsByClassName('navbar-element')) {
            element.className = 'navbar-element';
        }
        for (element of this.document.getElementsByClassName('navbar-dropdown-element-list-item')) {
            element.className = 'navbar-dropdown-element-list-item';
        }

    }
}
function addHoverToNavbarElements() {
    let dropdownTitles = document.getElementsByClassName('dropdown-title');
    for (var i = 0; i < dropdownTitles.length; i++) {
        dropdownTitles[i].onmouseover = function(event) {
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", "../phpScripts/setHoverTitle.php?title=" + event.target.innerHTML, true);
        xmlhttp.send();
        }
    }
}

function addChangePageAbilityToNavbarElements() {
    let dropdownItems = document.getElementsByClassName('navbar-dropdown-element-list-item');
    for (var i = 0; i < dropdownItems.length; i++) {
        dropdownItems[i].onclick = function(event) {
            let xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                document.location.href = this.responseText;
                }
            }
            xmlhttp.open("GET", "../phpScripts/switchPage.php?subSection=" + event.target.innerHTML, true);
            xmlhttp.send();
        }
    }
}

function addAutoScroll(currentTitle, currentSubsection) {
    // get current title subsection
    let navbarTitleElements = document.getElementsByClassName('dropdown-title');
    for (let element of navbarTitleElements) {
        element.addEventListener('click', function() {
            autoScrollNavTitleDecider(element, currentTitle, currentSubsection);
        });
    }
            
}

function getSubsection(callback) {
    let subsectionRequest = new XMLHttpRequest();
    subsectionRequest.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            callback(this.responseText);
        }
    }
    subsectionRequest.open("GET", "../phpScripts/getCurrentSubsection.php");
    subsectionRequest.send();
}

function autoScrollNavTitleDecider(element, currentTitle, currentSubsection) {
    if (currentTitle == "Home") {
        let targetElement = document.getElementById("home-" + element.innerHTML.toLowerCase() + "-section");
        let nav = document.getElementById('navbar');
        let pos = getPos(targetElement);
        console.log(pos);
        window.scroll({
            top: pos.y - nav.offsetHeight, // 95 = navbar height
            left: 0,
            behavior: 'smooth'
        });
    }
    else if (element.innerHTML == currentTitle) {
        
    }
}

function getPos(element, left = 0, top = 0) {
    // yay readability
    let newLeft = left + element.offsetLeft;
    let newTop = top + element.offsetTop;
    if (element.offsetParent != null) {
        return getPos(element.offsetParent, newLeft, newTop);
    }
    return {x: newLeft, y: newTop};
}