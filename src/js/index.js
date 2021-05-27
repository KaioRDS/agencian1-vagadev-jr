// Criando slide
$('.owl-carousel').ready(function () {
    let owl = $('.owl-carousel');
       owl.owlCarousel({
        item: 2,
        loop:true,
        margin:10,
        dots:false,
        responsive:{
            0:{
                items:1
            },
        }
    })

    //evento de voltar o slid
    $('#botao-prev').on('click', function () {
        owl.trigger('prev.owl.carousel')
        trocarNumeroPagina();
    });
    $('#botao-next').on('click', function () {
        owl.trigger('next.owl.carousel');
        trocarNumeroPagina()
    });

});

//função auxiliar para trocar o numero da paginação
function trocarNumeroPagina(){
    let numeroPag = $('#numeroPaginacao')
    if (numeroPag.html() == '1') {
        numeroPag.html('2');
    }else{
        numeroPag.html('1');
    }
}

//função para fazer os 'pingos' dos destaques

$('#pontos-destaques').ready(function () {
    let elemento = $('#pontos-destaques');
    let baseLeft = 0;
    let baseTop = 0;
    
    for (let index = 0; index < 9; index++) {
        
        $(elemento).append('<div id="pingo'+index+'"></div>');
        if (index > 0 && index <= 2) {
            baseLeft += 11.2;
            baseTop = 0;
        }if (index == 3) {
            baseLeft = 0;
            baseTop = 11.2;
        }if (index > 3 && index <= 6) {
            baseLeft += 11.2;
            baseTop = 11.2;
        }if (index == 6) {
            baseLeft = 0;
            baseTop = 22.4
        }if (index > 6) {
            baseLeft += 11.2;
            baseTop = 22.4;
        }
        
        $('#pingo'+index).css({
            "position":"absolute",
            "width":"5.6px",
            "height":"5.6px",
            "left" : baseLeft , 
            "top": baseTop,
            "background": "#3EC6E0",
            "border-radius": "0px 0px 0px 5px",
        });
        
    }
    
    
});

//Função para recuperar e colocar os produtos na tela
$('#produtos').ready(function () {

    $.ajax({
        type: "POST",
        url: "src/api/Produtos.php",
        data: {
            type : 'getProdutos',
        },
        dataType: "json",
        success: function (response) {
        
            let = elemento = $('#produtos');
            let baseLeft = 402;
            let baseTop = 1321;
            for (let index = 0; index < response.length; index++) {
                if (index  == 1 ) {
                    baseLeft = 785;
                }if (index == 2) {
                    baseLeft = 1168
                }
                $(elemento).append('<div id="produto'+index+'"></div>');

                $('#produto'+index).append('<div class="foto-produto"><img src="src/img/'+response[index].imageName+'"></img></div>');
                $('#produto'+index).append('<div class="retangulo-produto"></div>');
                $('#produto'+index).append('<div class="produto-nome">'+response[index].name+'</div>');
                $('#produto'+index).append('<div class="produto-preco">R$ '+response[index].price+',00</div>');
                $('#produto'+index).append('<div class="produto-comprar"><button>COMPRAR</button></div>');


                $('#produto'+index).css({
                    'position': 'absolute',
                    'width': '350px', 
                    'height': '602px',
                    'left': baseLeft+'px',
                    'top': baseTop+'px',
                });

                aplicarEventoBorda($('#produto'+index));
                tirarBordar($('#produto'+index));

                
            }
        }
    });
});

//função para colocar a bordar quando o mouse ficar em cima do produto

function aplicarEventoBorda(elemento){

    $(elemento).on('mouseenter', function () {
        elemento.css({
            "border": "5px solid #3EC6E0",
        })
    });
}
//função para tirar a bordar do produto

function tirarBordar(elemento) { 
   $(elemento).on('mouseleave', function () {
    elemento.css({
        "border": "none",
    })
   });
}

//função para mostrar o menu
$('#hamburguer-icon').on('mouseenter', function () {
    $('#nav-hover').show();
});
//função para fechar o menu
$('#nav-hover').on('mouseleave', function () {
    $(this).hide();
});


