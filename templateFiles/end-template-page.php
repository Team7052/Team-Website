<?php session_start(); ?>
</div>
</div>
</body>
<script type="text/javascript">
  function switchSubSection(element, currentSection) {
    // clear current
    let currentPageSubsection = document.getElementsByClassName('page-subsection')[0];

    var subNavItems = document.getElementsByClassName('sub-navbar-element');
    for (var i = 0; i < subNavItems.length; i++) {
      console.log(element.innerHTML);
      if (subNavItems[i].innerHTML == element.innerHTML)
        subNavItems[i].className = "sub-navbar-element sub-navbar-element-selected";
      else subNavItems[i].className = "sub-navbar-element";
    }
    // relabel page subtitle
    document.getElementsByClassName('page-main-subtitle')[0].innerHTML = element.innerHTML.toLowerCase();

    /* XML HTTP REQUEST*/
    let xmlRequest = new XMLHttpRequest();
    xmlRequest.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        currentPageSubsection.innerHTML = this.responseText;
        console.log(this.responseText);
      }
    }
    // set the currentSubsection
    xmlRequest.open("GET", "../" + currentSection + "/" + element.innerHTML + ".php");
    xmlRequest.send();

    let setSubsectionRequest = new XMLHttpRequest();
    setSubsectionRequest.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) { }
    }
    // set the currentSubsection
    setSubsectionRequest.open("GET", "../phpScripts/setCurrentSubsection.php?section=" + element.innerHTML);
    setSubsectionRequest.send();
  }
</script>
