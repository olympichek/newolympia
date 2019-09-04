<?php
namespace models\LeftMenu;
use core\Model;
use services\DB;
use models\Page;

class MainItem extends Model {

    private $id;
    private $page_id;
    private $order_id;
    private $sub_items;
    private $href;
    private $name_russian;

    public function __construct($data) {
        $this->id = $data["id"];
        $this->page_id = $data["page_id"];
        $this->order_id = $data["order_id"];
        $this->sub_items = $data["sub_items"];
        $this->href = $data["href"];
        $this->name_russian = $data["name_russian"];
    }

    private static function match_with_page($data) {
        $pages = Page::load_pages_list();
        for($i = 0; $i < count($pages); $i++) {
            if($data["page_id"] == $pages[$i]["id"]) {
                $data["name_russian"] = $pages[$i]["name_russian"];
                $data["href"] = $pages[$i]["href"];
            }
        }
        return $data;
    }

    public static function get_by_id($id) {
        $sql = "SELECT * FROM menu_main_items WHERE id = :id";
        $st = DB::prepare($sql);
        $st->bindParam(":id", $id);
        $st->execute();
        $main_item = MainItem::match_with_page($st->fetch());
        $sql = "SELECT * FROM menu_sub_items WHERE parent_id = :parent_id ORDER BY order_id";
        $st = DB::prepare($sql);
        $st->bindParam(":parent_id", $id);
        $st->execute();
        $sub_items = $st->fetchAll();
        for($i = 0; $i < count($sub_items); $i++) {
            $sub_items[$i] = MainItem::match_with_page($sub_items[$i]);
        }
        $main_item["sub_items"] = $sub_items;
        return new MainItem($main_item);
    }

    public function load() {
        $data[0]["id"] = $this->id;
        $data[0]["page_id"] = $this->page_id;
        $data[0]["order_id"] = $this->order_id;
        $data[0]["href"] = $this->href;
        $data[0]["name_russian"] = $this->name_russian;
        $count = 1;
        for($i = 0; $i < count($this->sub_items); $i++) {
            $data[$count] = $this->sub_items[$i];
            $count++;
        }
        return $data;
    }

    public function save($page_id) {
        $this->page_id = $page_id;
        $sql = "UPDATE menu_main_items SET page_id = :page_id WHERE id = :id";
        $st = DB::prepare($sql);
        $st->bindParam(":id", $this->id);
        $st->bindParam(":page_id", $this->page_id);
        $st->execute();
    }

    public function delete() {
        $sql = "DELETE FROM menu_main_items WHERE id = :id";
        $st = DB::prepare($sql);
        $st->bindParam(":id", $this->id);
        $st->execute();
        $sql = "DELETE FROM menu_sub_items WHERE parent_id = :parent_id";
        $st = DB::prepare($sql);
        $st->bindParam(":id", $this->id);
        $st->execute();
    }

    public static function add($after_id) {
        $sql = "
        UPDATE menu_main_items SET order_id = order_id + 1 
        WHERE order_id > :after_id ORDER BY order_id DESC 
        ";
        $st = DB::prepare($sql);
        $st->bindParam(":after_id", $after_id);
        $st->execute();
        $order_id = $after_id + 1;
        $sql = "INSERT INTO menu_main_items VALUES (null, 1, :order_id)";
        $st = DB::prepare($sql);
        $st->bindParam(":order_id", $order_id);
        $st->execute();
        $sql = "SELECT id FROM menu_main_items WHERE order_id = :order_id";
        $st = DB::prepare($sql);
        $st->bindParam(":order_id", $order_id);
        $st->execute();
        $id = $st->fetchColumn();
        return MainItem::get_by_id($id);
    }
}
