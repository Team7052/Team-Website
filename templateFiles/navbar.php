<div id="navbar">
  <img class="navbar-logo-image" src="../public/images/logo.png">
  <div class="navbar-element-no-dropdown">Home</div>
  <div class="navbar-element">
    <div class="dropdown-title">About</div>
    <ul class="navbar-dropdown-element-list">
     <li class="navbar-dropdown-element-list-item">The Team</li>
     <li class="navbar-dropdown-element-list-item">Members</li>
     <li class="navbar-dropdown-element-list-item">Mentors</li>
    </ul>
  </div>
  <div class="navbar-element">
    <div class="dropdown-title">Media</div>
    <ul class="navbar-dropdown-element-list">
     <li class="navbar-dropdown-element-list-item">Gallery</li>
     <li class="navbar-dropdown-element-list-item">Social</li>
    </ul>
  </div>
  <div class="navbar-element">
    <div class="dropdown-title">Sponsors</div>
    <ul class="navbar-dropdown-element-list">
     <li class="navbar-dropdown-element-list-item">Platinum</li>
     <li class="navbar-dropdown-element-list-item">Gold</li>
     <li class="navbar-dropdown-element-list-item">Silver</li>
     <li class="navbar-dropdown-element-list-item">Bronze</li>
    </ul>
  </div>
  <div class="navbar-element">
    <div class="dropdown-title">Resources</div>
    <ul class="navbar-dropdown-element-list">
      <li class="navbar-dropdown-element-list-item">Blog</li>
      <li class="navbar-dropdown-element-list-item">For Rookies</li>
    </ul>
  </div>
</div>

<script type="text/javascript" src="../scripts/navbarJS.js"></script>
<script type="text/javascript">
  colorNavBar("<?php echo $_SESSION['currentTitle']; ?>");
  addHoverToNavbarElements();
  addChangePageAbilityToNavbarElements();
  addAutoScroll("<?php echo $_SESSION['currentTitle']; ?>", "<?php echo $_SESSION['currentSubsection']; ?>");
  let homeNavElement = document.getElementsByClassName('navbar-element-no-dropdown')[0];
  homeNavElement.onclick = function() {
    let currentTitle = "<?php echo $_SESSION['currentTitle']; ?>";
    if (currentTitle == "Home") {
      window.scroll({
            top: 0, // 95 = navbar height
            left: 0,
            behavior: 'smooth'
        });
    }
    else {
      document.location.href = "../index.php";
    }
  }
</script>
