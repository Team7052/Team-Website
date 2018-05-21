<?php 
    $year = $_REQUEST['year'];
    $folderName = $_REQUEST['folderName'];

    $dir = "../public/images/gallery/year$year/$folderName";
    $files = scandir($dir);
    $fileNames = "";
    foreach ($files as $file) {
        $ext = strtolower(extensionOf($file));
        if ($ext == "png" || $ext == "jpg" || $ext == "jpeg") {
            if (beginsWith($file, "thumbnail-")) {
                $fileNames .= "$dir/$file\n";
            }
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

    function beginsWith($string, $substring) {
        $stringLen = strlen($string);
        $substringLen = strlen($substring);
        $isMatch = true;
        for ($i = 0; $i < $stringLen; $i++) {
            if ($i < $substringLen) {
                if ($substring[$i] != $string[$i]) {
                    $isMatch = false;
                }
            }
        }
        return $isMatch;
    }
?>
