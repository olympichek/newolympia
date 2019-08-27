<?php
namespace controllers\admin;
use Controller;

class RightBannersController extends Controller {

    public $model_page;
    public $model_left_menu;
    public $model_banners;
    public $model_page_edit;

    function __construct() {
        parent::__construct();
        $this->model_page = new \models\Page();
        $this->model_page_edit = new \models\admin\PageEdit();
        $this->model_left_menu = new \models\LeftMenu();
        $this->model_banners = new \models\Banners();
        $this->data["menu"] = $this->model_left_menu->load_menu();
        $this->data["banners"]["all"] = $this->model_banners->load_all_banners();
    }

    function index() {
        $this->data["pages"] = $this->model_page->load_pages_list();
        $this->view->generate("admin/right_banners/main", "admin_main", $this->data);
    }

    function edit() {
        $this->view->generate("admin/right_banners/main", "admin_page", $this->data);
    }
}

//function action_right_banners() {
//    if($this->page[0] == "main") {
//        $this->data["pages"] = $this->model_admin->get_pages_list();
//
//    }
//    else if($this->page[0] == "edit") {
//        if($this->page[1] == "all") {
//            $this->data["edit_banners_list"] = $this->data["banners"]["all"];
//            $this->data["edit_banners_page"] = "all";
//        }
//        else {
//            $this->data["banners"] = $this->model_main->get_banners_data($this->page[1]);
//            $this->data["edit_banners_list"] = $this->data["banners"]["page"];
//            $this->data["edit_banners_page"] = $this->model_main->get_data($this->page[1])["name_russian"];
//        }
//        $this->view->generate("admin/right_banners/edit_main_view", "page_template", $this->data);
//    }
//    else if($this->page[0] == "save") {
//        $this->model_admin->right_banners_save();
//    }
//    else if($this->page[0] == "add") {
//        $this->model_admin->right_banners_add();
//    }
//    else if($this->page[0] == "delete") {
//        $this->model_admin->right_banners_delete();
//    }
//    else if($this->page[0] == "ajax_images_reload") {
//        if($this->page[1] != "all") {
//            $this->data["banners"] = $this->model_main->get_banners_data($this->page[1]);
//        }
//        $this->view->generate("includes/right_menu", "none", $this->data);
//    }
//    else if($this->page[0] == "ajax_images_reload") {
//        $this->view->generate("admin/right_banners/edit_content_view", "none", $this->data);
//    }
//    else if($this->page[0] == "ajax_select_reload") {
//        if($this->page[1] == "all") {
//            $this->data["edit_banners_list"] = $this->data["banners"]["all"];
//        }
//        else {
//            $this->data["banners"] = $this->model_main->get_banners_data($this->page[1]);
//            $this->data["edit_banners_list"] = $this->data["banners"]["page"];
//        }
//        $this->view->generate("admin/right_banners/edit_select_view", "none", $this->data);
//    }
//    else {
//        Route::ErrorPage404();
//    }
//}