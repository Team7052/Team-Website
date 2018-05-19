function switchSubSection(element, currentSection) {
    // clear current
    let currentPageSubsection = document.getElementsByClassName('page-subsection')[0];

    var subNavItems = document.getElementsByClassName('sub-navbar-element');
    for (var i = 0; i < subNavItems.length; i++) {
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
        var doc = new DOMParser().parseFromString(this.responseText, "text/html");
        var scripts = doc.getElementsByTagName('script');
        var i = 0;
        for (var i = 0; i < scripts.length; i++) {
            var script = document.createElement("script");
            script.type = "text/javascript";
            if (scripts[i].src != "") {
                script.src = scripts[i].src;
            }
            script.innerHTML = scripts[i].innerHTML;
            document.body.appendChild(script);
        }
        currentPageSubsection.innerHTML = this.responseText;
        for (var i = 0; i < scripts.length; i++) {
          document.body.removeChild(document.body.lastChild);
        }
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