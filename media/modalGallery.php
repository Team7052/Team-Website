<?php 
    $year = $_REQUEST['year'];
    $folderName = $_REQUEST['folderName'];

    $dir = "../public/images/gallery/year$year/$folderName";
    $files = scandir($dir);
    $fileNames = "";
    foreach ($files as $file) {
        $ext = strtolower(extensionOf($file));
        if ($ext == "png" || $ext == "jpg" || $ext == "jpeg") {
            $fileNames .= "$dir/$file\n";
        }
    }
    echo $fileNames;

    function extensionOf($string) {
        $extensions = explode(".", $string);
        if (count($extensions) > 0) {
            return $extensions[count($extensions) - 1];
        }
        return "";
    }
?>
