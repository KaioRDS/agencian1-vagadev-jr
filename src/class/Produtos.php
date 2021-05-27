<?php

namespace AgenciaN1;
class Produtos{

    public function getProdutos(){
        $produtos = array(
            array(
                'name'=> 'outsiders',
                'imageName' => 'product-outriders@2x.png',
                'price'=> 200,
            ),
            array(
                'name'=> 'CYBERPUNK 2077',
                'imageName' => 'product-cyberpunk2077.png',
                'price'=> 250,
            ),
            array(
                'name'=> 'Donkey Kong Countru Tropical Freeze',
                'imageName' => 'product-donkey-kong-country-tropical-freeze.png',
                'price'=> 230,
            ),
        );
        return $produtos;
    }
}