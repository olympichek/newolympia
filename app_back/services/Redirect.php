<?php
namespace services;

class Redirect {

    public static function error_404() {
        header("HTTP/1.1 404 Not Found");
        header("Status: 404 Not Found");
        header("Location: /err/404");
        die();
    }

    public static function error_401() {
        header("HTTP/1.1 401 Unauthorized");
        header("Status: 401 Unauthorized");
        header("Location: /err/401");
        die();
    }

    public static function auth() {
        header("Location: /admin/auth");
        die();
    }

    public static function admin() {
        header("Location: /admin");
        die();
    }

    public static function to_url($url) {
        $header_string = "Location: " . $url;
        header($header_string);
        die();
    }

}