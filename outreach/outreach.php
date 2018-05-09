<!DOCTYPE HTML>
<html>
  <?php
    $currentTitle = "Outreach";
    $_SESSION['sectionSubsections'] = array("Events", "Camps");

    if (!stringIsInArray($_SESSION['currentSubsection'], $_SESSION['sectionSubsections'])) {
      $_SESSION['currentSubsection'] = $_SESSION['sectionSubsections'][0];
    }

    include("../templateFiles/header.php");
  ?>
  <?php include("../templateFiles/start-template-page.php"); ?>

  <?php include("../templateFiles/end-template-page.php") ?>

</html>
