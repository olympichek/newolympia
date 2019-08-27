<?php
namespace core;
class Controller {

    public $model;
    public $view;
    public $data;

    function __construct() {
        $this->view = new View();
    }

    function index() {

    }
}