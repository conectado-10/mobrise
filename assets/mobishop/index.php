<?php
$filename = "./install.lock";
if (file_exists($filename)){
    header('Location: ../../mobishop/index.php');
	exit;
}else{
$directory = "../../mobishop/";
if (!is_dir($directory)) {
    mkdir($directory, 0777, true);
}
$zip = new ZipArchive;
$res = $zip->open('dashboard.zip');
if ($res === TRUE) {
  $zip->extractTo($directory);
  $zip->close();
  //Remove Mobishop Dashboard Server script from external download
  @unlink('dashboard.zip');
  file_put_contents("./install.lock", "locked");
  header('Location: ../../mobishop/index.php');
exit;
} else {
  echo "ERROR: Unable To Install Mobishop";
  exit();
}		
}
?>