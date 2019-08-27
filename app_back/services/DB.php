<?php
namespace services;
use PDO;
use PDOException;

class DB {

    public static function prepare($sql) {
        $st = null;
        try {
            $db = new PDO(DB_DSN, DB_USERNAME, DB_PASSWORD);
            $db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
            $st = $db->prepare($sql);
            $db = null;
        }
        catch (PDOException $e) {
            echo "Ошибка при подключении к БД: " . $e->getMessage();
        }
        return $st;
    }

    public static function query($sql) {
        $result = [];
        try {
            $db = new PDO(DB_DSN, DB_USERNAME, DB_PASSWORD);
            $db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
            $st = $db->query($sql);
            $result = $st->fetchAll();
        }
        catch (PDOException $e) {
            echo "Ошибка при подключении к БД: " . $e->getMessage();
        }
        return $result;
    }

}