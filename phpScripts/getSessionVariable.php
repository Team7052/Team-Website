<?php
    if(session_id() == '' || !isset($_SESSION)) {
        // session isn't started
        session_name('navigationSession');
        session_start();
      }
    $var = $_REQUEST['var'];
    echo $_SESSION[$var];
?>