<?php
  session_start();
  $sectionTitle = $_SESSION['hoverTitle'];
  $subSection = $_REQUEST["subSection"];

  $_SESSION['currentTitle'] = $sectionTitle;
  $_SESSION['currentSubsection'] = $subSection;

  echo "../" . $_SESSION['currentTitle'] . "/" . $_SESSION['currentTitle'] . ".php";
?>
