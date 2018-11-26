<?php

  /*************************************************
    Arquivo para simular uma API Rest (webservice)
  *************************************************/

  // criando o array de dados
  $cardio_dia = array(
    array(
      "titulo" => "Batatas rústicas super saborosas",
      "categoria" => "Entrada",
      "imagem" => "https://pt.petitchef.com/imgupl/recipe/batatas-rusticas-super-saborosas--md-341832p554029.jpg",
      "descricao" => "Um rústico acompanhamento, aromático e saboroso para acompanhar carnes, sucesso garantido em sua refeição."
    ),
    array(
      "titulo" => "Caril de frango fácil",
      "categoria" => "Principal",
      "imagem" => "https://pt.petitchef.com/imgupl/recipe/caril-de-frango-facil--md-449716p695097.jpg",
      "descricao" => "Caril de Frango ou Frango de Caril, tradicional da culinária de Goa, Damão e Diu, antes pertencentes ao Estado Português da Índia, o Caril de Frango é mais conhecido como Frango de Caril em Portugal e Moçambique também. Veja a receita PetitChef desta especialidade Indo-Portuguesa."
    ),
    array(
      "titulo" => "Doce de chocolate",
      "categoria" => "Sobremesa",
      "imagem" => "https://pt.petitchef.com/imgupl/recipe/sobremesa-facil-de-chocolate--md-47331p58059.jpg",
      "descricao" => "Com uma aparência muito bonita e apetitosa! Servida com um sorvete de creme fica maravilhosa!"
    )
  );

  print_r($cardio_dia);
