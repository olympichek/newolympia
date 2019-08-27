<?php
ini_set("display_errors", 1);
function debug($var) {
    echo "<pre>";
    var_dump($var);
    echo "</pre>";
    die();
}