<?php
namespace services;

class Cookie {

    public static function get($name) {
        if(isset($_COOKIE[$name])) return $_COOKIE[$name];
        else return false;
    }

    public static function set($name, $value) {
        $time = time() + 3600 * 3;
        setcookie($name, $value, $time, "/");
    }

    public static function unset($name) {
        unset($_COOKIE[$name]);
        setcookie($name, null, -1, "/");
    }

}