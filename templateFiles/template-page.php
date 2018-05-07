<div class="page">
  <div class="page-main-container">
    <!-- Create background blurred image -->
    <div class="page-background-image" id="outreach-background-image"></div>
    <div class="navbar">
      <img class="navbar-logo-image "src="<?php echo $_SERVER['DOCUMENT_ROOT']?>/public/images/logo.png">
      <div class="navbar-element"><a href="<?php echo $_SERVER['DOCUMENT_ROOT']?>/index.html">Home</a></div>
      <div class="navbar-element navbar-dropdown-section"><a href="<?php echo $_SERVER['DOCUMENT_ROOT']?>/about/theTeam.html">About</a></div>
      <div class="navbar-element navbar-dropdown-section"><a href="<?php echo $_SERVER['DOCUMENT_ROOT']?>/outreach/events.html">Outreach</a></div>
      <div class="navbar-element navbar-dropdown-section"><a href="<?php echo $_SERVER['DOCUMENT_ROOT']?>/media/gallery.html">Media</a></div>
      <div class="navbar-element navbar-dropdown-section"><a href="<?php echo $_SERVER['DOCUMENT_ROOT']?>/sponsors/all.html">Sponsors</a></div>
      <div class="navbar-element navbar-dropdown-section"><a href="<?php echo $_SERVER['DOCUMENT_ROOT']?>/resources/blog.html">Resources</a></div>
    </div>
    <!-- Content that is in the about page, when user first loads screen -->
    <!-- Next two are global elements since they are used on every page -->
    <div class="page-title-section">
      <div class="page-main-title"><?php echo $_GET['title']; ?></div>
      <p class="page-main-subtitle">gallery</p>
    </div>
    <!-- Renamed to sub-navbar since this will be a global element (used in every page) -->
    <div class="sub-navbar">
      <div class="sub-navbar-element sub-navbar-element-selected"><a href="gallery.html">Gallery</a></div>
      <div class="sub-navbar-element"><a href="news.html">News</a></div>
      <div class="sub-navbar-element"><a href="social.html">Social</a></div>
    </div>
  </div>
  <div class="page-subsection">

  </div>
