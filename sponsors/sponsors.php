<?php 
  if(session_id() == '' || !isset($_SESSION)) {
    // session isn't started
    session_name('navigationSession');
    session_start();
  }
?>

<!DOCTYPE HTML>
<html>
  <?php
    include("../phpScripts/functions.php");
    $_SESSION[currentTitle] = "Sponsors";
    $_SESSION[sectionSubsections] = array("Platinum", "Gold", "Silver", "Bronze");
    if (!stringIsInArray($_SESSION[currentSubsection], $_SESSION[sectionSubsections])) {
      $_SESSION[currentSubsection] = $_SESSION[sectionSubsections][0];
    }
    include("../templateFiles/header.php");
  ?>
  <link rel="stylesheet" type="text/css" href="../stylesheets/sponsors/sponsorsStyle.css">
  <?php include("../templateFiles/start-template-page.php"); ?>

    <div id="sponsors-container"></div>
    <script type="text/javascript" src="sponsorsJS.js"></script>
    <script type="text/javascript">
      loadSponsorsFromJSON();
    </script>


  <?php include("../templateFiles/end-template-page.php") ?>
  <script>
    window.onload = function() {
      let currentSubsection = "<?php echo $_SESSION[currentSubsection]?>"
      scrollToSponsorLevel(currentSubsection);
      for (let element of document.getElementsByClassName("sub-navbar-element")) {
        element.className = "sub-navbar-element";
      }
    }
  </script>
</html>
