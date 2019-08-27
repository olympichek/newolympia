<?php
namespace models\LeftMenu;
use core\Model;
use models\Page;
use services\DB;

class Menu extends Model {

    private static function load_main_items() {
        $sql = "SELECT * FROM menu_main_items ORDER BY order_id";
        $st = DB::prepare($sql);
        $st->execute();
        $result = $st->fetchAll();
        return $result;
    }

    private static function load_sub_items() {
        $sql = "SELECT * FROM menu_sub_items ORDER BY parent_id, order_id";
        $st = DB::prepare($sql);
        $st->execute();
        $result = $st->fetchAll();
        return $result;
    }

    private static function match_main_with_sub($main_items, $sub_items) {
        $data = [];
        for($i = 0; $i < count($main_items); $i++) {
            $data[$i][0] = $main_items[$i];
            $count = 1;
            for($j = 0; $j < count($sub_items); $j++) {
                if($sub_items[$j]["parent_id"] == $main_items[$i]["id"]) {
                    $data[$i][$count] = $sub_items[$j];
                    $count++;
                }
            }
        }
        return $data;
    }

    private static function match_items_with_pages($data) {
        $pages = Page::load_pages_list();
        for($i = 0; $i < count($data); $i++) {
            for($j = 0; $j < count($data[$i]); $j++) {
                for($k = 0; $k < count($pages); $k++) {
                    if($data[$i][$j]["page_id"] == $pages[$k]["id"]) {
                        $data[$i][$j]["name_russian"] = $pages[$k]["name_russian"];
                        $data[$i][$j]["href"] = $pages[$k]["href"];
                    }
                }
            }
        }
        return $data;
    }

    public static function load() {
        $main_items = Menu::load_main_items();
        $sub_items = Menu::load_sub_items();
        $data = Menu::match_main_with_sub($main_items, $sub_items);
        $res = Menu::match_items_with_pages($data);
        return $res;
    }

}
