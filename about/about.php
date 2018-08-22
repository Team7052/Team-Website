<!DOCTYPE HTML>
<html>
  <?php
    include("../templateFiles/header.html");
  ?>
  <script type="text/javascript" src="../scripts/main.js"></script>
  <script type="text/javascript" src="membersScript.js"></script>
  <script type="text/javascript">
    window.addEventListener('subnavLoaded', function() {
      startSession("About"); 
    });
  </script>
  <?php include("../templateFiles/start-template-page.php"); ?>

  <?php include("../templateFiles/end-template-page.php") ?>
</html>
