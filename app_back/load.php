<?php
use core\Route;

spl_autoload_register(function($className) {
    $root_url = $_SERVER["DOCUMENT_ROOT"] . "/app_back/";
    $className = str_replace("\\", "/", $className);

    $file_path =  $root_url . $className . ".php";
    if(file_exists($file_path)) {
        include_once $file_path;
    }
});
require_once $_SERVER['DOCUMENT_ROOT'] . "/app_back/core/Model.php";
require_once $_SERVER['DOCUMENT_ROOT'] . "/app_back/core/View.php";
require_once $_SERVER['DOCUMENT_ROOT'] . "/app_back/core/Controller.php";
require_once $_SERVER['DOCUMENT_ROOT'] . "/app_back/core/Middleware.php";
require_once $_SERVER['DOCUMENT_ROOT'] . "/app_back/core/Route.php";
require_once $_SERVER['DOCUMENT_ROOT'] . "/app_back/config/database.php";
require_once $_SERVER['DOCUMENT_ROOT'] . "/app_back/config/routes.php";
require_once $_SERVER['DOCUMENT_ROOT'] . "/app_back/config/twig.php";
require_once $_SERVER['DOCUMENT_ROOT'] . "/app_back/config/debug.php";
Route::start();