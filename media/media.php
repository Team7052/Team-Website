<!DOCTYPE HTML>
<html>
  <?php
    $currentTitle = "Media";
    $sectionSubsections = array("Gallery", "News", "Social");
    if (!stringIsInArray($currentSubsection, $sectionSubsections)) {
      $currentSubsection = $sectionSubsections[0];
    }
    include("../templateFiles/header.php");
  ?>
  <?php include("../templateFiles/start-template-page.php"); ?>


  <?php include("../templateFiles/end-template-page.php") ?>

</html>
