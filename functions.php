<?php
  function stringIsInArray($string, $array) {
    foreach ($array as $current) {
      if (strcmp($string, $current) == 0) {
        return True;
      }
    }
    return false;
  }
?>
