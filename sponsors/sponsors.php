<!DOCTYPE HTML>
<html>
  <?php
    include("../templateFiles/header.html");
  ?>
  <link rel="stylesheet" type="text/css" href="../stylesheets/sponsors/sponsorsStyle.css">
  <?php include("../templateFiles/start-template-page.php"); ?>
    <div id="sponsors-container"></div>
    <script type="text/javascript" src="sponsorsJS.js"></script>
    <script type="text/javascript">
      startSession("Sponsors");
      loadSponsorsFromJSON();
    </script>


  <?php include("../templateFiles/end-template-page.php") ?>
  <script>
    window.onload = function() {
      let currentSubsection = sessionStorage.currentSubsection;
      scrollToSponsorLevel(currentSubsection);
      for (let element of document.getElementsByClassName("sub-navbar-element")) {
        element.className = "sub-navbar-element";
      }
    }
  </script>
</html>
