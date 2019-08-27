<?php
namespace models;
use core\Model;
use services\DB;

class Page extends Model {

    private $page;

    public function __construct($data) {
        $this->page = $data;
    }

    public function load() {
        return $this->page;
    }

    public function save($name_russian, $text) {
        $this->page["name_russian"] = $name_russian;
        $this->page["text"] = $text;
        $this->page["date"] = time();
        $sql = "UPDATE pages SET name_russian = :name_russian, text = :text, date = :date WHERE id = :id";
        $st = DB::prepare($sql);
        $st->bindParam(":id", $this->page["id"]);
        $st->bindParam(":name_russian", $this->page["name_russian"]);
        $st->bindParam(":text", $this->page["text"]);
        $st->bindParam(":date", $this->page["date"]);
        $st->execute();
    }

    public function delete() {
        $sql = "DELETE FROM `pages` WHERE id = :id";
        $st = DB::prepare($sql);
        $st->bindParam(":id", $this->page["id"]);
        $st->execute();
    }

    public static function get_by_id($id) {
        $st = DB::prepare("SELECT * FROM pages WHERE (id = :id)");
        $st->bindParam(":id", $id);
        $st->execute();
        $data = $st->fetch();
        return new Page($data);
    }

    public static function get_by_name($name) {
        $st = DB::prepare("SELECT * FROM pages WHERE (name = :name)");
        $st->bindParam(":name", $name);
        $st->execute();
        $data = $st->fetch();
        return new Page($data);
    }

    public static function create($name) {
        $page_name_regexp = "/^[a-zA-Z0-9_]+\z/";
        if (preg_match($page_name_regexp, $name)) {
            $name_russian = "Новая страница (" . $name . ")";
            $href = "/page/" . $name;
            $text = "Текст новой страницы (" . $name . ")";
            $date = time();
            $sql = "
                INSERT INTO pages (id, name, name_russian, href, important, text, date) 
                VALUES (NULL, :name, :name_russian, :href, 0, :text, :date)
            ";
            $st = DB::prepare($sql);
            $st->bindParam(":name", $name);
            $st->bindParam(":name_russian", $name_russian);
            $st->bindParam(":href", $href);
            $st->bindParam(":text", $text);
            $st->bindParam(":date", $date);
            $st->execute();
            return Page::get_by_name($name);
        }
        else {
            return null;
        }
    }

    public static function load_pages_list($with_important = true) {
        if($with_important) $sql = "SELECT * FROM pages";
        else $sql = "SELECT * FROM pages WHERE important = 0";
        $st = DB::prepare($sql);
        $st->execute();
        $data = $st->fetchAll();
        return $data;
    }

}