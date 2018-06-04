var members;
var membersLength;
var numToLazyLoad = 4;
var prevWindowWidth = window.innerWidth;
if (window.innerWidth < 960) {
    numToLazyLoad = 2;
}


function loadMembers(jsonFileName, elementId) {
    // fetch json
    parseJSON(jsonFileName, function(json) {
        var aboutMembersSection = document.getElementById(elementId);
        members = json.members;
        membersLength = members.length;

        /* load first row */
        for (var i = 0; i < numToLazyLoad; i++) {
            if (i < membersLength) {
                loadMember(aboutMembersSection, members, i);
            }
        }

        window.addEventListener('scroll', function(event) {
            let pos = getPos(document.querySelector(".footer"));
            // lazy load when footer is about to be shown
            if (window.innerHeight + window.pageYOffset >= pos.y) {
                let currentlyLoaded = document.getElementsByClassName("member-container").length;
                if (currentlyLoaded < membersLength) {
                    let startPoint = currentlyLoaded;
                    let endPoint = numToLazyLoad + startPoint;
                    for (var i = startPoint; i < endPoint; i++) {
                        if (i < membersLength) {
                            loadMember(aboutMembersSection, members, i);
                        }
                    }
                }
            }
        });

        window.addEventListener('resize', function(event) {
            if (prevWindowWidth >= 960 && window.innerWidth < 960) {
                numToLazyLoad = 2;
            }
            else if (prevWindowWidth < 960 && window.innerWidth >= 960) {
                numToLazyLoad = 4;
                let currentlyLoaded = document.getElementsByClassName("member-container").length;
                if (currentlyLoaded % 4 != 0 && currentlyLoaded < membersLength) {
                    let missing = currentlyLoaded % 4;
                    let startPoint = currentlyLoaded;
                    let endPoint = startPoint + missing;
                    for (var i = startPoint; i < endPoint; i++) {
                        if (i < membersLength) {
                            loadMember(aboutMembersSection, members, i);
                        }
                    }
                    
                }
            }
            
            prevWindowWidth = window.innerWidth;
        });
    });
}


function loadMember(element, members, i) {
    let memberDOM = createMemberDOM(members[i]);
    element.appendChild(memberDOM);
}

function createMemberDOM(memberData) {
    let name = memberData.name;
    let role = memberData.role;
    let grade = memberData.grade;
    let email = memberData.email;
    let description = memberData.description;
    let src = "../public/images/memberImages/" + name + ".png";

    let memberContainer = document.createElement('div');
    let img = document.createElement('img');
    let nameContainer = document.createElement('div');
    let overlayView = document.createElement('div');
    let roleContainer = document.createElement('div');
    let gradeContainer = document.createElement('div');
    let emailContainer = document.createElement('div');
    let descriptionContainer = document.createElement('div');

    memberContainer.className = "member-container";
    img.className = "member-image";
    img.src = src;
    nameContainer.className = "member-name";
    overlayView.className = "member-overlay-view";
    roleContainer.className = "member-item member-role";
    gradeContainer.className = "member-item member-grade";
    emailContainer.className = "member-item member-email";
    descriptionContainer.className = "member-item member-description";

    nameContainer.innerHTML = name;
    roleContainer.innerHTML = role;
    gradeContainer.innerHTML = "Grade: " + grade;
    emailContainer.innerHTML = email;
    descriptionContainer.innerHTML = description;

    overlayView.appendChild(roleContainer);
    if (typeof(grade) != "undefined") overlayView.appendChild(gradeContainer);
    overlayView.appendChild(emailContainer);
    overlayView.appendChild(descriptionContainer);
    
    memberContainer.appendChild(img);
    memberContainer.appendChild(nameContainer);
    memberContainer.appendChild(overlayView);

    return memberContainer
}

