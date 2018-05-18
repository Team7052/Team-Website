function parseJSON(file) {
    let xmlRequest = new XMLHttpRequest();
    xmlRequest.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let jsonString = this.responseText;
            return JSON.parse(jsonString);
        }
    }
    xmlRequest.open("GET", file);
    xmlRequest.send();
}