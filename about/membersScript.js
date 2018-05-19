function loadMembers(jsonFileName, elementId) {
    // fetch json
    let members = parseJSON(jsonFileName, function(json) {
        var aboutMembersSection = document.getElementById(elementId);
        var i = 0;
        sequentialMemberLoad(aboutMembersSection, json.members, i);
    });
}

function sequentialMemberLoad(element, array, i) {
    if (i < array.length) {
        let name = array[i].name;
        let role = array[i].role;
        let grade = array[i].grade;
        let email = array[i].email;
        let description = array[i].description;
        let src = "../public/images/memberImages/" + name + ".png";

        let request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let innerHTML = element.innerHTML;
                element.innerHTML = innerHTML + this.responseText;
                sequentialMemberLoad(element, array, i + 1);
            }
        }
        request.open("POST", "member-template.php", true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.send("name=" + name + "&role=" + role + "&grade=" + grade + "&email=" + email + "&description=" + description + "&imgSrc=" + src);
    }
}