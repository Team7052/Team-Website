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
    include("../templateFiles/header.html");
  ?>

  <script type="text/javascript" src="../scripts/main.js"></script>
  <script type="text/javascript" src="galleryJS.js"></script>
  <script type="text/javascript">startSession("Media");</script>
  <?php include("../templateFiles/start-template-page.php"); ?>

  <?php include("../templateFiles/end-template-page.php") ?>

</html>
