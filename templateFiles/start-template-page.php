<body>
  <div class="page">
    <div class="page-main-container">
      <!-- Create background blurred image -->
      <div class="page-background-image" id="outreach-background-image"></div>
      <div class="navbar">
        <img class="navbar-logo-image "src="../public/images/logo.png">
        <div class="navbar-element"><a href="../index.php">Home</a></div>
        <div class="navbar-element navbar-dropdown-section"><a href="../about/about.php">About</a></div>
        <div class="navbar-element navbar-dropdown-section"><a href="../outreach/outreach.php">Outreach</a></div>
        <div class="navbar-element navbar-dropdown-section"><a href="../media/media.php">Media</a></div>
        <div class="navbar-element navbar-dropdown-section"><a href="../sponsors/sponsors.php">Sponsors</a></div>
        <div class="navbar-element navbar-dropdown-section"><a href="../resources/resources.php">Resources</a></div>
      </div>
      <!-- Content that is in the about page, when user first loads screen -->
      <!-- Next two are global elements since they are used on every page -->
      <div class="page-title-section">
        <div class="page-main-title"><?php echo $currentTitle; ?></div>
        <p class="page-main-subtitle"><?php echo $currentSubSection; ?></p>
      </div>
      <!-- Renamed to sub-navbar since this will be a global element (used in every page) -->
      <div class="sub-navbar">
        <?php
          foreach($sectionSubsections as $subSection) {
            if (strcmp(strtolower($subSection), $currentSubSection) == 0) {
              echo "<div class='sub-navbar-element sub-navbar-element-selected' onclick='switchSubSection(this, $currentTitle)'>$subSection</div>";
            }
            else {
              echo "<div class='sub-navbar-element' onclick='switchSubSection(this, $currentTitle)'>$subSection</div>";
            }
          }
         ?>
      </div>
    </div>
    <div class="page-subsection">
      <!-- Load correct subsection from current section and subsection -->
      <?php
        include("../$currentTitle/$currentSubSection.php");
       ?>
