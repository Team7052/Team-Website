<?php 
  /*if(session_id() == '' || !isset($_SESSION)) {
    // session isn't started
    session_name('navigationSession');
    session_start();
  }*/
?>

<body>
  <div class="page">
    <?php include("navbar.php"); ?>
    <div class="page-main-container">
      <!-- Create background blurred image -->
      <div class="page-background-image" id="outreach-background-image"></div>
      
      <!-- Content that is in the about page, when user first loads screen -->
      <!-- Next two are global elements since they are used on every page -->
      <div class="page-title-section">
        <div id="pageTitle" class="page-main-title"></div>
        <p id="pageSubtitle" class="page-main-subtitle"></p>
      </div>
      <!-- Renamed to sub-navbar since this will be a global element (used in every page) -->
      <div id="subnav" class="sub-navbar"></div>
    </div>
    <script type="text/javascript">
      // fill elements
      fillTemplateHTML();
      function fillTemplateHTML() {
        let currentSection = sessionStorage.currentSection;
        let currentSubsection = sessionStorage.currentSubsection;

        let pageTitle = document.getElementById("pageTitle");
        let pageSubtitle = document.getElementById("pageSubtitle");
        let subnav = document.getElementById("subnav");

        pageTitle.innerHTML = currentSection;
        pageSubtitle.innerHTML = currentSubsection.toLowerCase();
        
        getRequest("../jsonFiles/navbar.json", function(response) {
          let navbarSections = JSON.parse(response);
          let subsections = navbarSections[currentSection];
          var innerHTML = "";
          for (let section of subsections) {
            if (section == currentSubsection) {
              innerHTML += "<div class='sub-navbar-element sub-navbar-element-selected' onclick='switchSubSection(this, \"" + currentSection +  "\")'>" + section +"</div>";
            }
            else {
              innerHTML += "<div class='sub-navbar-element' onclick='switchSubSection(this,\"" + currentSection + "\")'>" + section +"</div>";
            }
          }
          subnav.innerHTML = innerHTML;
          subnav.dispatchEvent(subNavLoadedEvent);
        });
      }
    </script>
    <div class="page-subsection">
      <!-- Load correct subsection from current section and subsection -->
      <script>
        if (sessionStorage.currentSection != "Sponsors") {
          console.log("../" + sessionStorage.currentSection + "/" + sessionStorage.currentSubsection + ".html");
          getRequest("../" + sessionStorage.currentSection + "/" + sessionStorage.currentSubsection + ".html", function(response) {
            let page = document.body.querySelector(".page-subsection");
            console.log(page);
            page.innerHTML = response;
            addScriptsToPage(page, response);
          });
        }
      </script>
