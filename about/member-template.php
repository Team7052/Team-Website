<?php 
    $name = $_REQUEST['name'];
    $role = $_REQUEST['role'];
    $grade = $_REQUEST['grade'];
    $email = $_REQUEST['email'];
    $description = $_REQUEST['description'];
    $imgSrc = $_REQUEST['imgSrc'];
    if ($grade != "undefined") {
        echo "
        <div class='member-container'>
            <img class='member-image' src='$imgSrc'>
            <div class='member-name'>$name</div>
            <div class='member-overlay-view'>
                <div class='member-item member-role'>$role</div>
                <div class='member-item member-grade'>Grade $grade</div>
                <div class='member-item member-email'>$email</div>
                <div class='member-item member-description'> $description </div>
            </div>
        </div>
        ";
    }
    else {
        echo "
        <div class='member-container'>
            <img class='member-image' src='$imgSrc'>
            <div class='member-name'>$name</div>
            <div class='member-overlay-view'>
                <div class='member-item member-role'>$role</div>
                <div class='member-item member-email'>$email</div>
                <div class='member-item member-description'> $description </div>
            </div>
        </div>
        ";
    }
    
?>
