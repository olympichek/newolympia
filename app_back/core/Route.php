<?php
namespace core;
use services\Redirect;
class Route {

    static $routes_list = [];

    static function register($uri, $controller_action, $middleware = null, $method = "ANY") {
        $routes_list_length = count(self::$routes_list);
        self::$routes_list[$routes_list_length]["uri"] = $uri;
        $controller_parts = explode("@", $controller_action);
        $controller = $controller_parts[0];
        $action = $controller_parts[1];
        self::$routes_list[$routes_list_length]["controller"] = $controller;
        self::$routes_list[$routes_list_length]["action"] = $action;
        self::$routes_list[$routes_list_length]["middleware"] = [];
        if($middleware != null) {
            if(is_array($middleware)) {
                self::$routes_list[$routes_list_length]["middleware"] = $middleware;
            }
            else {
                $count = count(self::$routes_list[$routes_list_length]["middleware"]);
                self::$routes_list[$routes_list_length]["middleware"][$count] = $middleware;
            }
        }
        else {
            self::$routes_list[$routes_list_length]["middleware"] = null;
        }
        self::$routes_list[$routes_list_length]["method"] = $method;
        return $routes_list_length;
    }

    static function get($uri, $controller_action, $middleware = null) {
        return Route::register($uri, $controller_action, $middleware, "GET");
    }

    static function post($uri, $controller_action, $middleware = null) {
        return Route::register($uri, $controller_action, $middleware, "POST");
    }

    static function middleware($middleware, $routes) {
        for($i = 0; $i < count($routes); $i++) {
            $route_index = $routes[$i];
            if(self::$routes_list[$route_index]["middleware"] == null) {
                self::$routes_list[$route_index]["middleware"] = [];
            }
            $count = count(self::$routes_list[$route_index]["middleware"]);
            if(is_array($middleware)) {
                for($j = 0; $j < count($middleware); $j++) {
                    self::$routes_list[$route_index]["middleware"][$count + $j] = $middleware[$j];
                }
            }
            else {
                self::$routes_list[$route_index]["middleware"][$count] = $middleware;
            }
        }
    }

    static function validate($uri, $route) {
        $check = 1;
        $routes_array =  explode("/", trim($uri, "/"));
        $routes_check_array = explode("/", trim($route, "/"));
        if(count($routes_array) != count($routes_check_array)) {
            $check = 0;
        }
        else {
            for($i = 0; $i < count($routes_array); $i++) {
                $var_regexp = "/^[{][a-zA-Z0-9_]+[}]\z/";
                $route_regexp = "/^[a-zA-Z0-9_]+\z/";
                if(preg_match($var_regexp, $routes_check_array[$i])) {
                    if(!preg_match($route_regexp, $routes_array[$i])) {
                        $check = 0;
                    }
                }
                else {
                    if(!preg_match($route_regexp, $routes_array[$i])) {
                        $check = 0;
                    }
                    else if(!preg_match($route_regexp, $routes_check_array[$i])) {
                        $check = 0;
                    }
                    else if($routes_array[$i] != $routes_check_array[$i]) {
                        $check = 0;
                    }
                }
            }
        }
        if($uri == "/" && $route == "/") {
            $check = 1;
        }
        return $check;
    }

    static function start() {
        $request = $_SERVER["REQUEST_URI"];
        $route_index = -1;
        for($i = 0; $i < count(self::$routes_list); $i++) {
            if(Route::validate($request, self::$routes_list[$i]["uri"])) {
                if(self::$routes_list[$i]["method"] == "ANY") {
                    $route_index = $i;
                    break;
                }
                else {
                    if($_SERVER["REQUEST_METHOD"] == self::$routes_list[$i]["method"]) {
                        $route_index = $i;
                        break;
                    }
                }
            }
        }
        if($route_index != -1) {
            $route = self::$routes_list[$route_index]["uri"];
            $route_parts = explode("/", trim($route, "/"));
            $request_parts = explode("/", trim($request, "/"));
            $request_args = [];
            for($i = 0; $i < count($route_parts); $i++) {
                $var_regexp = "/^[{][a-zA-Z0-9_]+[}]\z/";
                if(preg_match($var_regexp, $route_parts[$i])) {
                    $arg_name = trim($route_parts[$i], "{}");
                    $request_args[$arg_name] = $request_parts[$i];
                }
            }
            if(self::$routes_list[$route_index]["method"] == "POST") {
                foreach($_POST as $key => $value) {
                    $request_args[$key] = $value;
                }
                if($_SERVER["CONTENT_TYPE"] ==  "application/json") {
                    $postData = file_get_contents("php://input");
                    $json_obj = json_decode($postData, true);
                    foreach($json_obj as $json_key => $json_value) {
                        $request_args[$json_key] = $json_value;
                    }
                }
            }
            else if(self::$routes_list[$route_index]["method"] == "GET") {
                foreach($_GET as $key => $value) {
                    $request_args[$key] = $value;
                }
            }
            $controller_name = "\controllers\\" . self::$routes_list[$route_index]["controller"];
            $action = self::$routes_list[$route_index]["action"];
            if(self::$routes_list[$route_index]["middleware"] != null) {
                for($i = 0; $i < count(self::$routes_list[$route_index]["middleware"]); $i++) {
                    $middleware_name = "\middleware\\" . self::$routes_list[$route_index]["middleware"][$i];
                    if($middleware_name != null) {
                        $middleware = new $middleware_name();
                        if(method_exists($middleware, "before")) {
                            $middleware->before($request_args);
                        }
                    }
                }
            }
            $controller = new $controller_name();
            if(method_exists($controller, $action)) {
                $controller->$action($request_args);
            }
            else {
                Redirect::error_404();
            }
            if(self::$routes_list[$route_index]["middleware"] != null) {
                for($i = 0; $i < count(self::$routes_list[$route_index]["middleware"]); $i++) {
                    $middleware_name = "\middleware\\" . self::$routes_list[$route_index]["middleware"][$i];
                    if($middleware_name != null) {
                        $middleware = new $middleware_name();
                        if(method_exists($middleware, "after")) {
                            $middleware->after($request_args);
                        }
                    }
                }
            }
        }
        else {
            Redirect::error_404();
        }

    }
    

    static function url() {
        $route = $_SERVER["REQUEST_URI"];
        $routes = explode("/", $route);
        return $routes;
    }

    static function method() {
        return $_SERVER["REQUEST_METHOD"];
    }

}