<?php
namespace controllers\admin;
use core\Controller;
use models\Banner;
use models\LeftMenu\Menu;
use models\Page;

class PageEditController extends Controller {

    public $model_page;

    function __construct() {
        parent::__construct();
        $this->data["menu"] = Menu::load();
        $this->data["banners"]["all"] = Banner::load_on_page("all");
    }

    function index() {
        $this->data["pages"] = Page::load_pages_list();
        $this->data["pages_not_important"] = Page::load_pages_list(false);
        $this->view->generate_page("admin/page_admin/admin", "admin_main", $this->data);
    }

    function edit($args) {
        $this->model_page = Page::get_by_name($args["page_name"]);
        $this->data["banners"]["page"] = Banner::load_on_page($args["page_name"]);
        $this->data["page"] = $this->model_page->load();
        if($this->data["page"]["name"] == "main") {
            $this->view->generate_page("admin/page_admin/edit", "admin_main", $this->data);
        }
        else {
            $this->view->generate_page("admin/page_admin/edit", "admin_page", $this->data);
        }
    }

    function save($args) {
        $this->model_page = Page::get_by_name($args["page_name"]);
        $this->model_page->save($args["page_name_rus"], $args["page_text"]);
    }

    function create($args) {
        Page::create($args["name"]);
    }

    function delete($args) {
        $this->model_page = Page::get_by_name($args["name"]);
        $this->model_page->delete();
    }

    function pages_list_edit() {
        $data = [];
        $pages = Page::load_pages_list();
        for($i = 0; $i < count($pages); $i++) {
            $data[$i][0] = $pages[$i]["name"];
            $data[$i][1] = $pages[$i]["name_russian"];
        }
        $this->view->generate_json($data);
    }

    function pages_list_delete() {
        $data = [];
        $pages = Page::load_pages_list(false);
        for($i = 0; $i < count($pages); $i++) {
            $data[$i][0] = $pages[$i]["name"];
            $data[$i][1] = $pages[$i]["name_russian"];
        }
        $this->view->generate_json($data);
    }

    function create_error() {
        $this->view->generate_page("admin/page_admin/create_error", "admin_main", $this->data);
    }
}
