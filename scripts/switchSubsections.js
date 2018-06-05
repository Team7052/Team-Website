function switchSubSection(element, currentTitle) {
  if (currentTitle != "Sponsors") {
    highlightSubnavWithSelectedElement(element);
    // relabel page subtitle
    document.getElementsByClassName('page-main-subtitle')[0].innerHTML = element.innerHTML.toLowerCase();
    getRequest("../" + currentTitle  + "/" + element.innerHTML + ".html", function(response) {
      sessionStorage.setItem("currentSubsection", element.innerHTML);
      let currentPageSubsection = document.getElementsByClassName('page-subsection')[0];
      // animate a fade
      currentPageSubsection.style.opacity = 1.0;
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      if (window.innerWidth < 600) {
        // close nav
        toggleNavBar(null); // pass null so that this always hides navbar, never toggles it ons
      }
      Velocity(currentPageSubsection, {opacity: 0.0}, {duration: 500, complete: () => {
        currentPageSubsection.innerHTML = response;
        addScriptsToPage(document.body, response);
        window.dispatchEvent(subsectionSwitchLoaded);
        Velocity(currentPageSubsection, {opacity: 1.0}, 500);
      }});
    });
  }
}

function highlightSubnavWithSelectedElement(element) {
  var subNavItems = document.getElementsByClassName('sub-navbar-element');
  for (item of subNavItems) {
    if (item.innerHTML == element.innerHTML) item.className = "sub-navbar-element sub-navbar-element-selected";
    else item.className = "sub-navbar-element";
  }
}