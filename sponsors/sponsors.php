<!DOCTYPE HTML>
<html>
  <?php
    $currentTitle = "Sponsors";
    $currentSubSection = "";
    $sectionSubsections = array("Platinum", "Gold", "Silver", "Bronze");
    if (!stringIsInArray($currentSubsection, $sectionSubsections)) {
      $currentSubsection = $sectionSubsections[0];
    }
    include("../templateFiles/header.php");
  ?>
  <?php include("../templateFiles/start-template-page.php"); ?>


  <?php include("../templateFiles/end-template-page.php") ?>
</html>
