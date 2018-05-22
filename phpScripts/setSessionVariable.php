<?php
  if(session_id() == '' || !isset($_SESSION)) {
    // session isn't started
    session_name('navigationSession');
    session_start();
  }
  $var = $_REQUEST['var'];
  $_SESSION[$var] = $_REQUEST['value'];
 ?>
