<?php
use core\Route;
Route::get("/", "PageController@index");
Route::get("/err/404", "PageController@error_404");
Route::get("/err/401", "PageController@error_401");
Route::get("/pages/{page_name}", "PageController@page");
Route::get("/admin/auth", "admin\AuthController@index");
Route::post("/admin/auth", "admin\AuthController@login");

Route::get("/test/vue", "PageController@vue_test");

Route::middleware("AdminMiddleware", [

    Route::get("/admin", "admin\MainController@index"),
    Route::get("/admin/files", "admin\MainController@files_upload"),

    Route::get("/admin/logout", "admin\AuthController@logout"),
    Route::get("/admin/change_password", "admin\AuthController@change_password_index"),
    Route::post("/admin/change_password", "admin\AuthController@change_password"),

    Route::get("/admin/page_admin/index", "admin\PageEditController@index"),
    Route::get("/admin/page_admin/edit/{page_name}", "admin\PageEditController@edit"),
    Route::post("/admin/page_admin/save", "admin\PageEditController@save"),
    Route::post("/admin/page_admin/create", "admin\PageEditController@create"),
    Route::post("/admin/page_admin/delete", "admin\PageEditController@delete"),
    Route::get("/admin/page_admin/pages_list/edit", "admin\PageEditController@pages_list_edit"),
    Route::get("/admin/page_admin/pages_list/delete", "admin\PageEditController@pages_list_delete"),
    Route::get("/admin/page_admin/create_error", "admin\PageEditController@create_error"),

    Route::get("/admin/left_menu/index", "admin\LeftMenuController@index"),
    Route::post("/admin/left_menu/main/save", "admin\LeftMenuController@save_main_item"),
    Route::post("/admin/left_menu/main/add", "admin\LeftMenuController@add_main_item"),
    Route::post("/admin/left_menu/main/delete", "admin\LeftMenuController@delete_main_item"),
    Route::post("/admin/left_menu/sub/save", "admin\LeftMenuController@save_sub_item"),
    Route::post("/admin/left_menu/sub/add", "admin\LeftMenuController@add_sub_item"),
    Route::post("/admin/left_menu/sub/delete", "admin\LeftMenuController@delete_sub_item"),
    Route::get("/admin/left_menu/ajax/menu", "admin\LeftMenuController@load_menu"),
    Route::get("/admin/left_menu/load/items", "admin\LeftMenuController@load_items"),
    Route::get("/admin/left_menu/load/pages", "admin\LeftMenuController@load_pages"),

    Route::get("/admin/right_banners/index", "admin\RightBannersController@index"),
    Route::get("/admin/right_banners/edit/{page_name}", "admin\RightBannersController@edit"),

]);