<?php
  if(session_id() == '' || !isset($_SESSION)) {
    // session isn't started
    session_name('navigationSession');
    session_start();
  }

  $_SESSION[currentTitle] = $_REQUEST['section'];
  $_SESSION[currentSubsection] = $_REQUEST['subSection'];
  echo "../" . $_SESSION[currentTitle] . "/" . $_SESSION[currentTitle] . ".php";
?>
