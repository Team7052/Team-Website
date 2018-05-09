<!DOCTYPE HTML>
<html>
  <?php
    $currentTitle = "Outreach";
    $sectionSubsections = array("Events", "Camps");

    if (!stringIsInArray($currentSubsection, $sectionSubsections)) {
      $currentSubsection = $sectionSubsections[0];
    }

    include("../templateFiles/header.php");
  ?>
  <?php include("../templateFiles/start-template-page.php"); ?>


  <?php include("../templateFiles/end-template-page.php") ?>

</html>
