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

function trocarNumeroPagina(){
    let numeroPag = $('#numeroPaginacao')
    if (numeroPag.html() == '1') {
        numeroPag.html('2');
    }else{
        numeroPag.html('1');
    }
}


