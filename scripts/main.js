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