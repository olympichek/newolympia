<?php
namespace controllers\admin;

use core\Controller;

class LeftMenuController extends Controller {

    public $model_page;
    public $model_left_menu;
    public $model_left_menu_edit;
    public $model_banners;

    function __construct() {
        parent::__construct();
        $this->model_page = new \models\Page();
        $this->model_left_menu = new \models\LeftMenu();
        $this->model_left_menu_edit = new \models\admin\LeftMenuEdit();
        $this->model_banners = new \models\Banners();
        $this->data["pages"] = $this->model_page->load_pages_list();
        $this->data["banners"]["all"] = $this->model_banners->load_all_banners();
    }

    function index() {
        $this->data["menu"] = $this->model_left_menu->load_menu();
        $this->view->generate("admin/left_menu/main", "admin_page", $this->data);
    }

    public function load_menu() {
        $this->data["menu"] = $this->model_left_menu->load_menu();
        $this->view->generate("includes/left_menu", "none", $this->data);
    }

    public function load_item($args) {
        $this->data["item"] = $this->model_left_menu->load_main_item($args["id"]);
        $this->view->generate("admin/left_menu/item", "none", $this->data);
    }

    public function load_content() {
        $this->data["menu"] = $this->model_left_menu->load_menu();
        $this->view->generate("admin/left_menu/main", "none", $this->data, "content");
    }

    public function save_main_item($args) {
        $this->model_left_menu_edit->save_main_item($args["id"], $args["page_id"]);
    }

    public function add_main_item($args) {
        $this->model_left_menu_edit->add_main_item($args["after_id"]);
    }

    public function delete_main_item($args) {
        $this->model_left_menu_edit->delete_main_item($args["id"]);
    }


    public function save_sub_item($args) {
        $this->model_left_menu_edit->save_sub_item($args["id"], $args["page_id"]);
    }

    public function add_sub_item($args) {
        $this->model_left_menu_edit->add_sub_item($args["after_id"], $args["parent_id"]);
    }

    public function delete_sub_item($args) {
        $this->model_left_menu_edit->delete_sub_item($args["id"]);
    }

}