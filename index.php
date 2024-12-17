<?php
$file_path = 'index.html';

if (file_exists($file_path)) {
    $html_content = file_get_contents($file_path);
    echo $html_content;
} else {
    echo 'The specified HTML file does not exist.';
}
?>
