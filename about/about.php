<!DOCTYPE HTML>
<html>
  <?php
    $currentTitle = "About";
    $sectionSubsections = array("The Team", "Members", "Mentors");
    if (!stringIsInArray($currentSubsection, $sectionSubsections)) {
      $currentSubsection = $sectionSubsections[0];
    }
    include("../templateFiles/header.php");
  ?>
  <?php include("../templateFiles/start-template-page.php"); ?>


  <?php include("../templateFiles/end-template-page.php") ?>
</html>
