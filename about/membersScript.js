var aboutMembersSection = document.getElementById("about-members-section");
function loadMembers() {
    // fetch json
    let members = parseJSON("../about/jsonFiles/members.json", function(json) {
        console.log(json);
        for (var i = 0; i < json.members.length; i++) {
            let name = json.members[i].name;
            let role = json.members[i].role;
            let grade = json.members[i].grade;
            let email = json.members[i].email;
            let description = json.members[i].description;
            let src = "../public/images/memberImages/" + name + ".jpg";

            let request = new XMLHttpRequest();
            request.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    let innerHTML = aboutMembersSection.innerHTML;
                    aboutMembersSection.innerHTML = innerHTML + this.responseText;
                }
            }
            request.open("POST", "member-template.php", true);
            request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            request.send("name=" + name + "&role=" + role + "&grade=" + grade + "&email=" + email + "&description=" + description + "&imgSrc=" + src);
        }
    });
}