<?php
namespace middleware;
use core\Middleware;
use core\Route;
use models\Admin;
use services\Cookie;
use services\Redirect;

class AdminMiddleware extends Middleware {

    public function before($args = null) {
        $user_hash = Cookie::get("user_hash");
        $temp_hash = Cookie::get("temp_hash");

        $admin = Admin::get_by_user_hash($user_hash);
        if(!$user_hash || !$temp_hash || !$admin->check($temp_hash)) {
            Redirect::auth();
        }

        if(Route::method() == "POST") {
            if($args == null || !$admin->check($args["token"])) {
                Redirect::error_401();
            }
        }
    }

}