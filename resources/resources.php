<?php session_start(); ?>
<!DOCTYPE HTML>
<html>
  <?php
    include("../functions.php");
    $_SESSION['currentTitle'] = "Resources";
    $_SESSION['sectionSubsections'] = array("Blog", "For Rookies");
    if (!stringIsInArray($_SESSION['currentSubsection'], $_SESSION['sectionSubsections'])) {
      $_SESSION['currentSubsection'] = $_SESSION['sectionSubsections'][0];
    }
    include("../templateFiles/header.php");
  ?>
  <?php include("../templateFiles/start-template-page.php"); ?>

  <?php include("../templateFiles/end-template-page.php") ?>

</html>
