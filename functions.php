<?php
  function stringIsInArray($string, $array) {
    for ($array as $current) {
      if (strcmp($string, $current) == 0) {
        return True;
      }
    }
    return False;
  }
?>
