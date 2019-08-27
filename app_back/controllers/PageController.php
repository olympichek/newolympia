<?php
namespace controllers;
use core\Controller;
use models\Page;
use models\LeftMenu\Menu;
use models\Banner;

class PageController extends Controller {

    public $model_page;

    function __construct() {
        parent::__construct();
        $this->data["menu"] = Menu::load();
        $this->data["banners"]["all"] = Banner::load_on_page("all");
    }

    function index() {
        $this->model_page = Page::get_by_name("main");
        $this->data["page"] = $this->model_page->load();
        $this->data["banners"]["page"] = Banner::load_on_page("main");
        $this->view->generate_page("main_view", "main", $this->data);
    }

    function page($args) {
        $this->model_page = Page::get_by_name($args["page_name"]);
        $this->data["page"] = $this->model_page->load();
        $this->data["banners"]["page"] = Banner::load_on_page($args["page_name"]);
        $this->view->generate_page("page_view", "page", $this->data);
    }

    function contacts() {
        $this->model_page = Page::get_by_name("contacts");
        $this->view->generate_page("contacts", "page", $this->data);
    }

    function error_404() {
        $this->view->generate_page("404", "main", $this->data);
    }

    function error_401() {
        $this->view->generate_page("401", "main", $this->data);
    }

}