
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

        for (element of this.document.getElementsByClassName('navbar-element')) {
            element.className = 'navbar-element';
        }
        for (element of this.document.getElementsByClassName('navbar-dropdown-element-list-item')) {
            element.className = 'navbar-dropdown-element-list-item';
        }
    }
}

let navMenu = document.getElementById('navbar-menu-icon');
navMenu.addEventListener('click', showNavbarMenu);
function showNavbarMenu() {
    let nav = document.getElementById('navbar');
    let overlay = document.getElementsByClassName('navbar-overlay')[0];
    overlay.className = "navbar-overlay navbar-overlay-shown";
    document.body.className = "no-scroll";
    let navElements = document.getElementsByClassName('navbar-element');
    for (let element of navElements) {
        element.style.display = "block";
    }
    let homeElement = document.getElementsByClassName('navbar-element-no-dropdown')[0];
    homeElement.style.display = "block";
}

let navElements = document.getElementsByClassName('navbar-element');
for (let element of navElements) {
    element.addEventListener('mouseover', mobileNavbarRepositionHover);
}
function mobileNavbarRepositionHover(event) {
    
}

function addHoverToNavbarElements() {
    let dropdownTitles = document.getElementsByClassName('dropdown-title');
    for (var i = 0; i < dropdownTitles.length; i++) {
        dropdownTitles[i].onmouseover = function(event) {
            let xmlhttp = new XMLHttpRequest();
            xmlhttp.open("GET", "../phpScripts/setSessionVariable.php?var=hoverTitle&value=" + event.target.innerHTML, true);
            xmlhttp.send();
        }
    }
}

function addChangePageAbilityToNavbarElements() {
    let dropdownItems = document.getElementsByClassName('navbar-dropdown-element-list-item');
    for (let item of dropdownItems) {
        item.onclick = function(event) {
            // get current title
            getRequest("../phpScripts/getSessionVariable.php?var=currentTitle", function(currentTitle) {
                console.log(currentTitle);
                getRequest("../phpScripts/getSessionVariable.php?var=hoverTitle", function (hoverTitle) {
                    hoverTitle = hoverTitle.replace("\"", "");
                    console.log(hoverTitle + " = " + currentTitle);
                    if (hoverTitle != currentTitle) {
                        getRequest( "../phpScripts/switchPage.php?section=" + hoverTitle + "&subSection=" + event.target.innerHTML, function(response) {
                            document.location.href = response;
                        });
                    }
                    else {
                        switchSubSection(event.target, hoverTitle);
                    }
                });
                
            });
            
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


function autoScrollNavTitleDecider(element, currentTitle, currentSubsection) {
    if (document.body.classList.length == 0) {
        if (currentTitle == "Home") {
            let targetElement = document.getElementById("home-" + element.innerHTML.toLowerCase() + "-section");
            let nav = document.getElementById('navbar');
            let pos = getPos(targetElement);
            window.scroll({
                top: pos.y - nav.offsetHeight, // 95 = navbar height
                left: 0,
                behavior: 'smooth'
            });
        }
        else if (element.innerHTML == currentTitle) {
            // scroll to the top
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
        }
    }
}