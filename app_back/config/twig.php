<?php
require_once $_SERVER["DOCUMENT_ROOT"] . "/app_back/vendor/autoload.php";

use Twig\Environment;
use Twig\Loader\FilesystemLoader;

$path = $_SERVER["DOCUMENT_ROOT"] . "/app_back/views";
$loader = new FilesystemLoader($path);
$twig = new Environment($loader, [
    "debug" => true,
    "auto_reload " => true
]);