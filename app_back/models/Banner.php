<?php
namespace models;
use core\Model;
use services\DB;

class Banner extends Model {

    private $banner;

    public function __construct($data) {
        $this->banner = $data;
    }

    public static function load_on_page($name) {
        if($name == "all") {
            $page_id = 0;
        }
        else {
            $page = Page::get_by_name($name);
            $page_data = $page->load();
            $page_id = $page_data["id"];
        }
        $sql = "SELECT * FROM banners WHERE page_id = :page_id ORDER BY order_id";
        $st = DB::prepare($sql);
        $st->bindParam(":page_id", $page_id);
        $st->execute();
        $result = $st->fetchAll();
        return $result;
    }

    public static function get_by_id($id) {
        $sql = "SELECT * FROM banners WHERE id = :id";
        $st = DB::prepare($sql);
        $st->bindParam(":id", $id);
        $st->execute();
        $banner = $st->fetch();
        return new Banner($banner);
    }

    public function load() {
        return $this->banner;
    }

    public function save($item, $value) {
        $this->banner[$item] = $value;
        $sql = "UPDATE banners SET caption = :caption, link = :link, img = :img WHERE id = :id";
        $st = DB::prepare($sql);
        $st->bindParam(":caption", $this->banner["caption"]);
        $st->bindParam(":link", $this->banner["link"]);
        $st->bindParam(":img", $this->banner["img"]);
        $st->bindParam(":id", $this->banner["id"]);
        $st->execute();
    }

    public function delete() {
        $sql = "DELETE FROM banners WHERE id = :id";
        $st = DB::prepare($sql);
        $st->bindParam(":id", $this->banner["id"]);
        $st->execute();
    }

    public static function add($data) {
        $page_name = $data["page_name"];
        $after_id = $data["after_id"];
        $order_id = $after_id + 1;
        $image = $data["image"];
        $page = Page::get_by_name($page_name);
        $page_id = $page->load()["id"];
        $sql = "
        UPDATE banners SET order_id = order_id + 1 
        WHERE (page_id = :page_id AND order_id > :after_id)
        ";
        $st = DB::prepare($sql);
        $st->bindParam(":page_id", $page_id);
        $st->bindParam(":after_id", $after_id);
        $st->execute();
        $sql = "
        INSERT INTO banners (id, page_id, order_id, caption, link, img) 
        VALUES (NULL, :page_id, :order_id, 'Новый баннер', '/', :image)
        ";
        $st = DB::prepare($sql);
        $st->bindParam(":page_id", $page_id);
        $st->bindParam(":order_id", $order_id);
        $st->bindParam(":image", $image);
        $st->execute();
        $sql = "SELECT id FROM banners WHERE (page_id = :page_id AND order_id = :order_id)";
        $st = DB::prepare($sql);
        $st->bindParam(":page_id", $page_id);
        $st->bindParam(":order_id", $order_id);
        $st->execute();
        $id = $st->fetchColumn();
        return Banner::get_by_id($id);
    }

}
