<?php 
    $title = $_REQUEST['title'];
    $date = $_REQUEST['date'];
    $year = $_REQUEST['year'];
    $folderName = $_REQUEST['folderName'];

    echo "
        <div class='gallery-item'>
            <div class='gallery-image-crop' onclick='showGalleryPage(\"$title\", \"$date\", \"$year\", \"$folderName\")'>
                <img class='gallery-item-image' src='../public/images/gallery/year$year/$folderName/thumbnail-0preview-image.png'>
            </div>
            <div class='gallery-item-title' onclick='showGalleryPage(\"$title\", \"$date\", \"$year\", \"$folderName\")'>$title</div>
        </div>
    ";
?>