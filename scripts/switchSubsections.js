function switchSubSection(element, currentTitle) {
  if (currentTitle != "Sponsors") {
    highlightSubnavWithSelectedElement(element);
    // relabel page subtitle
    document.getElementsByClassName('page-main-subtitle')[0].innerHTML = element.innerHTML.toLowerCase()
  }
  
  getRequest("../" + currentTitle  + "/" + element.innerHTML + ".html", function(response) {
    getRequest("../phpScripts/setSessionVariable.php?var=currentSubsection&value=" + element.innerHTML, function() {
      let currentPageSubsection = document.getElementsByClassName('page-subsection')[0];
      // animate a fade
      currentPageSubsection.style.opacity = 1.0;
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      Velocity(currentPageSubsection, {opacity: 0.0}, {duration: 500, complete: () => {
        currentPageSubsection.innerHTML = response;
        addScriptsToDocFromResponse(response);
        Velocity(currentPageSubsection, {opacity: 1.0}, 500);
      }});
    });
  });
}

function highlightSubnavWithSelectedElement(element) {
  var subNavItems = document.getElementsByClassName('sub-navbar-element');
  for (item of subNavItems) {
    if (item.innerHTML == element.innerHTML) item.className = "sub-navbar-element sub-navbar-element-selected";
    else item.className = "sub-navbar-element";
  }
}

function addScriptsToDocFromResponse(response) {
  var doc = new DOMParser().parseFromString(response, "text/html");
    var scripts = doc.getElementsByTagName('script');
    for (var i = 0; i < scripts.length; i++) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        if (scripts[i].src != "") {
            script.src = scripts[i].src;
        }
        script.innerHTML = scripts[i].innerHTML;
        document.body.appendChild(script);
    }
    for (var i = 0; i < scripts.length; i++) {
      document.body.removeChild(document.body.lastChild);
    }
}