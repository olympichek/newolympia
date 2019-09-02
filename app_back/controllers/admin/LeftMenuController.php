<?php
namespace controllers\admin;

use core\Controller;
use models\Banner;
use models\LeftMenu\Menu;
use models\LeftMenu\MainItem;
use models\LeftMenu\SubItem;
use models\Page;

class LeftMenuController extends Controller {

    function index() {
        $this->data["pages"] = Page::load_pages_list();
        $this->data["menu"] = Menu::load();
        $this->data["banners"]["all"] = Banner::load_on_page("all");
        $this->view->generate_page("admin/left_menu/main", "admin_page", $this->data);
    }

    public function load_items() {
        $this->data["menu"] = Menu::load();
        $this->view->generate_json($this->data["menu"]);
    }

    public function load_pages() {
        $data = [];
        $pages = Page::load_pages_list();
        for($i = 0; $i < count($pages); $i++) {
            $data[$i]["id"] = $pages[$i]["id"];
            $data[$i]["name_russian"] = $pages[$i]["name_russian"];
        }
        $this->view->generate_json($data);
    }

    public function load_menu() {
        $this->data["menu"] = Menu::load();
        sleep(2);
        $this->view->generate_page("includes/left_menu", "none", $this->data);
    }
//
//    public function load_item($args) {
//        $this->data["item"] = $this->model_left_menu->load_main_item($args["id"]);
//        $this->view->generate("admin/left_menu/item", "none", $this->data);
//    }
//
//    public function load_content() {
//        $this->data["menu"] = $this->model_left_menu->load_menu();
//        $this->view->generate("admin/left_menu/main", "none", $this->data, "content");
//    }
//
    public function save_main_item($args) {
        MainItem::get_by_id($args["id"])->save($args["page_id"]);
    }

    public function save_sub_item($args) {
        SubItem::get_by_id($args["id"])->save($args["page_id"]);
    }
//
//    public function add_main_item($args) {
//        $this->model_left_menu_edit->add_main_item($args["after_id"]);
//    }
//
//    public function delete_main_item($args) {
//        $this->model_left_menu_edit->delete_main_item($args["id"]);
//    }
//
//

//
//    public function add_sub_item($args) {
//        $this->model_left_menu_edit->add_sub_item($args["after_id"], $args["parent_id"]);
//    }
//
//    public function delete_sub_item($args) {
//        $this->model_left_menu_edit->delete_sub_item($args["id"]);
//    }

}