<?php 
    $title = $_REQUEST['title'];
    $year = $_REQUEST['year'];
    $folderName = $_REQUEST['folderName'];

    echo "
        <div class='gallery-item'>
            <div class='gallery-image-crop'>
                <img class='gallery-item-image' src='../public/images/eventImages/year$year/$folderName/preview-image.png'>
            </div>
            <div class='gallery-item-title'>$title</div>
        </div>
    ";
?>