<?php session_start(); ?>

<!DOCTYPE HTML>
<html>
  <?php
    include("../phpScripts/functions.php");
    $_SESSION['currentTitle'] = "Media";
    $_SESSION['sectionSubsections'] = array("Gallery", "Social");
    if (!stringIsInArray($_SESSION['currentSubsection'], $_SESSION['sectionSubsections'])) {
      $_SESSION['currentSubsection'] = $_SESSION['sectionSubsections'][0];
    }
    include("../templateFiles/header.php");
  ?>

  <script type="text/javascript" src="../scripts/main.js"></script>
  <script type="text/javascript" src="galleryJS.js"></script>
  <?php include("../templateFiles/start-template-page.php"); ?>


  <?php include("../templateFiles/end-template-page.php") ?>

</html>
