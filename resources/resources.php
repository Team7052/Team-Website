<!DOCTYPE HTML>
<html>
  <?php
    $currentTitle = "Resources";
    $sectionSubsections = array("Blog", "For Rookies");
    if (!stringIsInArray($currentSubsection, $sectionSubsections)) {
      $currentSubsection = $sectionSubsections[0];
    }
    include("../templateFiles/header.php");
  ?>
  <?php include("../templateFiles/start-template-page.php"); ?>


  <?php include("../templateFiles/end-template-page.php") ?>

</html>
