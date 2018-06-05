// events
let navEvent = new Event('navbarLoad');
let subNavLoadedEvent = new Event('subnavLoaded');
let subsectionSwitchLoaded = new Event('subsectionSwitchLoaded');


function parseJSON(file, callback) {
    let xmlRequest = new XMLHttpRequest();
    xmlRequest.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let jsonString = this.responseText;
            callback(JSON.parse(jsonString));
        }
    }
    xmlRequest.open("GET", file);
    xmlRequest.send();
}
function getRequest(query, callback = function() {}) {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            callback(this.responseText);
        }
    }
    xmlhttp.open("GET", query, true);
    xmlhttp.send();
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

function startSession(section) {
    sessionStorage.setItem("currentSection", section);
    getRequest("../jsonFiles/navbar.json", function(response) {
        let navItems = JSON.parse(response);
        let subSections = navItems[section];
        var foundMatch = false;
        if (sessionStorage.currentSubsection) {
            for (let section of subSections) {
                if (section == sessionStorage.currentSubsection) {
                foundMatch = true;
                }
            }
            if (!foundMatch) sessionStorage.currentSubsection = subSections[0];
        }
        else {
            sessionStorage.currentSubsection = subSections[0];
        }
    });
}

function addScriptsToPage(element, response) {
    let scripts = element.querySelectorAll("script");
    for (var i = 0; i < scripts.length; i++) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        if (scripts[i].src != "") {
            script.src = scripts[i].src;
        }
        script.innerHTML = scripts[i].innerHTML;
        element.appendChild(script);
    }
    for (var i = 0; i < scripts.length; i++) {
        element.removeChild(element.lastChild);
    }
}