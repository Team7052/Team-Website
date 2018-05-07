<script>
function switchTabs(element) {
  if (element.innerHTML.toLowerCase() == "about") {
    directTo(<?php echo $_SERVER['DOCUMENT_ROOT'] . '/about/theTeam.php'?>, 'About', 'The Team');
  }
}

function directTo(url, title, selectedSubNav) {
  var xmlhttp = new XMLHTTPRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.location.href = this.responseText;
    }
  }
  xmlhttp.open("POST", url);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlhttp.send("?title=" + title + "&subNav=" + selectedSubNav);
}
</script>
