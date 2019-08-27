<?php
namespace models;
use core\Model;
use services\DB;

class Admin extends Model {

    private $id;
    private $login;
    private $password_hash;
    private $user_hash;
    private $temp_hash;

    public function __construct($data) {
        $this->id = $data["id"];
        $this->login = $data["login"];
        $this->password_hash = $data["password_hash"];
        $this->user_hash = $data["user_hash"];
        $this->temp_hash = $data["temp_hash"];
    }

    public static function get_by_user_hash($user_hash) {
        $sql = "SELECT * FROM administrators WHERE user_hash = :user_hash";
        $st = DB::prepare($sql);
        $st->bindParam(":user_hash", $user_hash);
        $st->execute();
        $data = $st->fetch();
        return new Admin($data);
    }

    public static function get_by_login($login) {
        $sql = "SELECT * FROM administrators WHERE login = :login";
        $st = DB::prepare($sql);
        $st->bindParam(":login", $login);
        $st->execute();
        $data = $st->fetch();
        return new Admin($data);
    }

    public function check($temp_hash) {
        if($this->temp_hash == $temp_hash) return true;
        else return false;
    }

    public function get_hashes() {
        $data["user_hash"] = $this->user_hash;
        $data["temp_hash"] = $this->temp_hash;
        return $data;
    }

    public function new_temp_hash() {
        $this->temp_hash = md5(uniqid(rand(),1));
        $sql = "UPDATE administrators SET temp_hash = :temp_hash WHERE id = :id";
        $st = DB::prepare($sql);
        $st->bindParam(":temp_hash", $this->temp_hash);
        $st->bindParam(":id", $this->id);
        $st->execute();
    }

    public function new_user_hash() {
        $this->user_hash = md5($this->id . uniqid(rand(),1));
        $sql = "UPDATE administrators SET user_hash = :user_hash WHERE id = :id";
        $st = DB::prepare($sql);
        $st->bindParam(":user_hash", $this->user_hash);
        $st->bindParam(":id", $this->id);
        $st->execute();
    }

    public function login($password) {
        if(password_verify($password, $this->password_hash)) {
            return true;
        }
        else return false;
    }

    public function change_password($password_new, $password_new_check) {
        if($password_new == $password_new_check) {
            $this->new_user_hash();
            $this->password_hash = password_hash($password_new, PASSWORD_DEFAULT);
            $sql = "
            UPDATE administrators SET password_hash = :password_hash, 
            user_hash = :user_hash WHERE id = :id
            ";
            $st = DB::prepare($sql);
            $st->bindParam(":password_hash", $this->password_hash);
            $st->bindParam(":user_hash", $this->user_hash);
            $st->bindParam(":id", $this->id);
            $st->execute();
            return true;
        }
        else {
            return false;
        }
    }

}