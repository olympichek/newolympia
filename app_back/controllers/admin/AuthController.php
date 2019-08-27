<?php

namespace controllers\admin;

use core\Controller;
use models\Admin;
use models\Banner;
use models\LeftMenu\Menu;
use services\Cookie;
use services\Redirect;

class AuthController extends Controller {

    function __construct() {
        parent::__construct();
        $this->data["menu"] = Menu::load();
        $this->data["banners"]["all"] = Banner::load_on_page("all");
    }

    function index() {
        $this->view->generate_page("admin/auth","main", $this->data);
    }

    function login($args) {
        $admin = Admin::get_by_login($args["login"]);
        if($admin->login($args["password"])) {
            $admin->new_temp_hash();
            $user_hash = $admin->get_hashes()["user_hash"];
            $temp_hash = $admin->get_hashes()["temp_hash"];
            Cookie::set("user_hash", $user_hash);
            Cookie::set("temp_hash", $temp_hash);
            Redirect::admin();
        }
        else {
            $this->data["error"] = 1;
            $this->view->generate_page("admin/auth","main", $this->data);
        }
    }

    function logout() {
        $user_hash = Cookie::get("user_hash");
        $admin = Admin::get_by_user_hash($user_hash);
        $admin->new_temp_hash();
        Cookie::unset("user_hash");
        Cookie::unset("temp_hash");
        Redirect::auth();
    }

    function change_password_index() {
        $this->data["token"] = Cookie::get("temp_hash");
        $this->view->generate_page("admin/password_change", "admin_page", $this->data);
    }

    function change_password($args) {
        $user_hash = Cookie::get("user_hash");
        $admin = Admin::get_by_user_hash($user_hash);
        if($admin->login($args["password_old"])) {
            if($admin->change_password($args["password_new"], $args["password_new_check"])) {
                Cookie::unset("user_hash");
                Cookie::unset("temp_hash");
                Redirect::auth();
            }
            else {
                $this->data["error"] = 2;
                $this->data["token"] = Cookie::get("temp_hash");
                $this->view->generate_page("admin/password_change", "admin_page", $this->data);
            }
        }
        else {
            $this->data["error"] = 1;
            $this->data["token"] = Cookie::get("temp_hash");
            $this->view->generate_page("admin/password_change", "admin_page", $this->data);
        }
    }

}