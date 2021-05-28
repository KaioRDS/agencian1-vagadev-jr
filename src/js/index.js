//verificando o tamanho do disposotivo
$('.container').ready(function () {
    if (screen.width <= 375) {
        $('.banner-2').css({"display":'none'})
        $('.banner-1').css({"display":'none'})
        $('.banner-mobile-1').css({"display":'block'})
    }
});

// Criando slide
$('.banners').ready(function () {

    let foto = $('.banners');

    if (screen.width > 375) {
            //evento de voltar o slid
    $('#botao-prev').on('click', function () {
        if (foto.attr('data-foto') == '1') {
            $('#numeroPaginacao').html('2');
            foto.attr('data-foto','2')

            $('.banner-info').fadeOut();
            $('.banner-1').fadeOut();
            $('.banner-2').fadeIn();
            
        }else{
            $('#numeroPaginacao').html('1');
            foto.attr('data-foto','1');
            $('.banner-info').fadeIn();
            $('.banner-2').fadeOut();
            $('.banner-1').fadeIn()
        }
    });
        $('#botao-next').on('click', function () {
            if (foto.attr('data-foto') == '1') {
                $('#numeroPaginacao').html('2');
                foto.attr('data-foto','2')
                $('.banner-info').fadeOut();
                $('.banner-1').fadeOut();
                $('.banner-2').fadeIn();
                
            }else{
                $('#numeroPaginacao').html('1');
                foto.attr('data-foto','1');
                $('.banner-info').fadeIn();
                $('.banner-2').fadeOut();
                $('.banner-1').fadeIn()
            }
    });
    }
    else{
        $('#botao-prev').on('click', function () {
            if (foto.attr('data-foto') == '1') {
                $('#numeroPaginacao').html('2');
                foto.attr('data-foto','2')
                $('.banner-info').fadeOut();
                $('.banner-mobile-1').fadeOut();
                $('.banner-mobile-2').fadeIn();
                
            }else{
                $('#numeroPaginacao').html('1');
                foto.attr('data-foto','1');
                $('.banner-info').fadeIn();
                $('.banner-mobile-2').fadeOut();
                $('.banner-mobile-1').fadeIn()
            }
        });

        $('#botao-next').on('click', function () {
            if (foto.attr('data-foto') == '1') {
                $('#numeroPaginacao').html('2');
                foto.attr('data-foto','2')
                $('.banner-info').fadeOut();
                $('.banner-mobile-1').fadeOut();
                $('.banner-mobile-2').fadeIn();
                
            }else{
                $('#numeroPaginacao').html('1');
                foto.attr('data-foto','1');
                $('.banner-info').fadeIn();
                $('.banner-mobile-2').fadeOut();
                $('.banner-mobile-1').fadeIn()
            }
    });
            
    }


});


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
        
            if (screen.width > 375) {
                let = elemento = $('#produtos');
                let baseLeft = 402;
                let baseTop = 1321;
                for (let index = 0; index < response.length; index++) {
                    //verificando posição de cada produto
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
                    $('#produto'+index).append('<div id="produtoComprar'+index+'" class="produto-comprar"><button id="botaoComprarButton'+index+'">COMPRAR</button></div>');
                    $('#produtoComprar'+index).append('<div id="mario-button'+index+'"></div>');
    
                    //css do mario
                    $('#mario-button'+index).css({
                        "position":"absolute",
                        "display":"none",
                        "width": "68px",
                        "height":"79px",
                        "left": "150px",
                        "top": "-27px",
                        "background":"url('src/img/image_6-removebg-preview 1.png')"
                })
                    //css de cada produto
                    $('#produto'+index).css({
                        'position': 'absolute',
                        'width': '350px', 
                        'height': '602px',
                        'left': baseLeft+'px',
                        'top': baseTop+'px',
                    });
    
                    aplicarEventoBorda($('#produto'+index));
                    tirarBordar($('#produto'+index));
                    comprarProduto($('#produtoComprar'+index),$('#botaoComprarButton'+index) ,  $('#mario-button'+index))
                   
    
                    
                }
            }else{
               
                let = elemento = $('#produtos');
                let baseLeft = 69;
                for (let index = 0; index < 2; index++) {
                    //verificando posição de cada produto
                    
                    $(elemento).append('<div id="produto-conteudo'+index+'"></div>');
                    $('#produto-conteudo'+index).append('<div class="foto-produto"><img src="src/img/'+response[0].imageName+'"></img></div>');
                    $('#produto-conteudo'+index).append('<div class="retangulo-produto"></div>');
                    $('#produto-conteudo'+index).append('<div class="produto-nome">'+response[0].name+'</div>');
                    $('#produto-conteudo'+index).append('<div class="produto-preco">R$ '+response[0].price+',00</div>');
                    $('#produto-conteudo'+index).append('<div id="produtoComprar'+index+'" class="produto-comprar"><button data-produto="0" id="botaoComprarButton'+index+'">COMPRAR</button></div>');
                    $('#produto-conteudo'+index).append('<div class="barra-produto-direita'+index+'"><i class="fas fa-chevron-right"></i></div>');
                    $('#produto-conteudo'+index).append('<div class="barra-produto-esquerda'+index+'"><i class="fas fa-chevron-left"></i></div>');
                    

                    $('.barra-produto-direita'+index).css({
                        'position':'absolute',
                        'font-size':'20px',
                        'left':'250px',
                        'top':'170px'
                    })
                    $('.barra-produto-esquerda'+index).css({
                        'position':'absolute',
                        'font-size':'20px',
                        'left':'-10px',
                        'top':'170px'
                    })
                    //css de cada produto
                    $('#produto-conteudo'+index+'').css({
                        'position': 'absolute',
                         'width':   '236.5px',
                         'height': '423px',
                         'left': baseLeft+'px',
                         'top': '1055px',
                         'overflow':"hide"
 
                     });

                     comprarProduto($('#produtoComprar'+index),$('#botaoComprarButton'+index) ,  $('#mario-button'+index))
                  
                }  
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
    if (screen.width <= 375) {
        $('#nav-hover').show();
        $('#background-menu-mobile').show();
        $('#hamburguer-icon-font').attr('class','fas fa-times');
    }else{
        $('#nav-hover').show();
    }
});
//função para fechar o menu
$('#nav-hover').on('mouseleave', function () {
    if (screen.width <= 375) {
        $('#nav-hover').hide();
        $('#background-menu-mobile').hide();
        $('#hamburguer-icon-font').attr('class','fas fa-bars');
    }else{
        $('#nav-hover').hide();
    }
});

//função para mostrar o mario quando o produto for comprado
function comprarProduto(elemento,botao , mario){
    if (screen.width > 375) {
        $(elemento).on('click', function () {
            
            if (botao.attr('data-comprado') != 1) {
                $(elemento).css({
                    "background":"#084154",
                })
                  //colocando o mario na tela
                $(mario).show();
                $(botao).attr('data-comprado' , 1)
                $(botao).html('Comprado')
                $(botao).css({
                    'position': 'absolute',
                    'width': '113px',
                    'height': '21px',
                    'left': '15px',
                    'top': '15px',
                    "background":"#084154",
                    'font-family': 'Roboto',
                    'font-style': 'normal',
                    'font-weight': '900',
                    'font-size': '18px',
                    'line-height': '21px',
                    /* identical to box height */
    
                    'text-align': 'center',
    
                    'color': '#FFFFFF'
                })
                //mostrar o gif do load
            $('#modal-ajax-load').show();
            setTimeout(function(){
                $('#modal-ajax-load').hide();
            },2000)
    
            //esperando para mostrar o modal de finalizar compras
            setTimeout(function(){
                $('#modal-compra-finalizada').show();
            },2000)
    
            setTimeout(function(){
                $('#modal-compra-finalizada').hide();
            },7000)
    
        }else{
            Swal.fire({
                icon: 'error',
                text: 'Você já comprou esse produto',
            })
             }
        });
    }
    //PARTE MOBILE
    else{

        $(elemento).on('click', function () {
            if ($(botao).attr('data-produto') != '1') {
                $(botao).attr('data-comprado' , 1)
                $(botao).html('Comprado')
                $('#modal-ajax-load').show();
                setTimeout(function(){
                    $('#modal-ajax-load').hide();
                },2000)
        
                //esperando para mostrar o modal de finalizar compras
                setTimeout(function(){
                    $('#modal-compra-finalizada').show();
                },2000)
        
                setTimeout(function(){
                    $('#modal-compra-finalizada').hide();
                },7000)
            }else{
                Swal.fire({
                    icon: 'error',
                    text: 'Você já comprou esse produto',
                })
            }
        });
    }
}


//função para fehcar o modal de confirmação de compra

$('#close-modal-compra-finalizada').on('click', function () {
    $('#modal-compra-finalizada').hide()
});

