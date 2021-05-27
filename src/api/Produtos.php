<?php
require_once dirname(dirname(__DIR__)) . '/vendor/autoload.php';
use AgenciaN1\Produtos;
switch ($_POST['type']) {
    case 'getProdutos':
        $return = array();
        $produto = new Produtos();
        echo json_encode($produto->getProdutos());
        break;
}