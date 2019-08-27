<?php
namespace controllers\admin;
use core\Controller;
use models\Banner;
use models\LeftMenu\Menu;
use services\Cookie;

class MainController extends Controller {

    function __construct() {
        parent::__construct();
        $this->data["menu"] = Menu::load();
        $this->data["banners"]["all"] = Banner::load_on_page("all");
        $this->data["token"] = Cookie::get("temp_hash");
    }

    function index() {
        $this->view->generate_page("admin/admin_main", "main", $this->data);
    }

    function files_upload() {
        $this->view->generate_page("admin/files", "admin_page", $this->data);
    }

}