// instancia jquery e evita conflitos
//jQuery( function($){
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel();
      

    $('h4') //seletor tag
    $('.featured-item') // class
    $('#featured') // id



console.log($('h4').text());

// Configuração de produtos

$('.featured-item a').addClass('btn btn-dark stretch-link');

$('.featured-item:first h4').append('<span class="badge bg-secondary">Novo</span>')


});