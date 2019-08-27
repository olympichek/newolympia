<?php
namespace models\LeftMenu;
use core\Model;
use services\DB;

class SubItem extends Model {

    private $id;
    private $page_id;
    private $order_id;
    private $parent_id;

    public function __construct($data) {
        $this->id = $data["id"];
        $this->page_id = $data["page_id"];
        $this->order_id = $data["order_id"];
        $this->parent_id = $data["parent_id"];
    }

    public static function get_by_id($id) {
        $sql = "SELECT * FROM menu_sub_items WHERE id = :id";
        $st = DB::prepare($sql);
        $st->bindParam(":id", $id);
        $st->execute();
        $sub_item = $st->fetch();
        return new SubItem($sub_item);
    }

    public function load() {
        $data["id"] = $this->id;
        $data["page_id"] = $this->page_id;
        $data["order_id"] = $this->order_id;
        $data["parent_id"] = $this->parent_id;
        return $data;
    }

    public function save($page_id) {
        $this->page_id = $page_id;
        $sql = "UPDATE menu_sub_items SET page_id = :page_id WHERE id = :id";
        $st = DB::prepare($sql);
        $st->bindParam(":id", $this->id);
        $st->bindParam(":page_id", $this->page_id);
        $st->execute();
    }

    public function delete() {
        $sql = "DELETE FROM menu_sub_items WHERE id = :id";
        $st = DB::prepare($sql);
        $st->bindParam(":id", $this->id);
        $st->execute();
    }

    public static function add($after_id, $parent_id) {
        $sql = "
        UPDATE menu_sub_items SET order_id = order_id + 1 
        WHERE (parent_id = :parent_id AND order_id > :after_id)
        ";
        $st = DB::prepare($sql);
        $st->bindParam(":after_id", $after_id);
        $st->bindParam(":parent_id", $parent_id);
        $st->execute();
        $order_id = $after_id + 1;
        $sql = "INSERT INTO menu_sub_items VALUES (null, 1, :parent_id, :order_id)";
        $st = DB::prepare($sql);
        $st->bindParam(":order_id", $order_id);
        $st->bindParam(":parent_id", $parent_id);
        $st->execute();
        $sql = "SELECT id FROM menu_sub_items WHERE order_id = :order_id AND parent_id = :parent_id";
        $st = DB::prepare($sql);
        $st->bindParam(":order_id", $order_id);
        $st->bindParam(":parent_id", $parent_id);
        $st->execute();
        $id = $st->fetchColumn();
        return SubItem::get_by_id($id);
    }


}
