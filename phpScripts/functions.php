<?php
  function stringIsInArray($string, $array) {
    $i = 0;
    foreach ($array as $current) {
      if (strcmp($string, $current) == 0) {
        return True;
      }
    }
    return False;
  }
?>
