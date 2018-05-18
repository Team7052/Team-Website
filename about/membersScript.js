var aboutMembersSection = document.getElementById("about-members-section");
function loadMembers() {
    // fetch json
    let members = loadJSON("jsonFiles/members.json");
    //console.log(members);

    let name = "Kevin Bai";
    let role = "Team Director";
    let grade = 11;
    let email = "kevin.bai@tbcschools.ca"
    let description = "Blah blah bla has;d lkfj a;s lkdfj ;alskjd f;lasjd ;lasjd f;a lksdj f;la sdfkldf kls;j als;d a;slkdj fa;lsdj f;laskj dfl;a ksjdfk; jas;df jdfks";
    let src = "../public/images/memberImages/Kevin Bai.jpg";
    let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            aboutMembersSection.innerHTML = this.responseText;
        }
    }
    request.open("POST", "member-template.php", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send("name=" + name + "&role=" + role + "&grade=" + grade + "&email=" + email + "&description=" + description + "&imgSrc=" + src);
}