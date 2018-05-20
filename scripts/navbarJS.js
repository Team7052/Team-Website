
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