<head>
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900" rel="stylesheet">
  <link href="../stylesheets/global/navbarStyle.css" rel="stylesheet" type="text/css">
  <link href="../stylesheets/global/footerStyle.css" rel="stylesheet" type="text/css">
  <link href="../stylesheets/global/globalStyle.css" rel="stylesheet" type="text/css">
  <link href="../stylesheets/global/subNavbarStyle.css" rel="stylesheet" type="text/css">
  <title>
    <?php 
      if(session_id() == '' || !isset($_SESSION)) {
        // session isn't started
        session_name('navigationSession');
        session_start();
      }
      echo $_SESSION['currentTitle']; 
    ?> | Team 7052
  </title>
  <script src="//cdnjs.cloudflare.com/ajax/libs/velocity/2.0.2/velocity.min.js"></script>
  <script type='text/javascript' src="../scripts/main.js"></script>
</head>