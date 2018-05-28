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
    $_SESSION[currentTitle] = "Resources";
    $_SESSION[sectionSubsections] = array("Blog");
    if (!stringIsInArray($_SESSION[currentSubsection], $_SESSION[sectionSubsections])) {
      $_SESSION[currentSubsection] = $_SESSION[sectionSubsections][0];
    }
    include("../templateFiles/header.php");
  ?>
  <?php include("../templateFiles/start-template-page.php"); ?>

  <?php include("../templateFiles/end-template-page.php") ?>

</html>
