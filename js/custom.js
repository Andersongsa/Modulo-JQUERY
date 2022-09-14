// instancia jquery e evita conflitos
// jQuery( function($){
    $(document).ready(function(){

        $('.owl-carousel').owlCarousel();
    
        let titulos = $('h4') // tag
       
        let itens = $('.featured-item') // class
        
        let destaques = $('#featured') // id
    
        console.log(titulos.first());
    
        // Configuração de produtos
    
        $('.featured-item a').addClass('btn btn-dark stretch-link');
    
        $('.featured-item:first h4').append('<span class="badge bg-secondary">Novo</span>')
        // $('.featured-item:first h4').start('<span class="badge bg-secondary">Novo</span>')
        // $('.featured-item:first h4').html('<span class="badge bg-secondary">Novo</span>')
        // $('.featured-item:first h4').addClass('active')
        // $('.featured-item:first h4').removeClass('active')
        // $('.featured-item:first h4').toggleClass('active')
        // $('.featured-item:first h4').hide()
        // $('.featured-item:first h4').show()
        // $('.featured-item:first h4').fadeIn(2000)
        // $('.featured-item:first h4').fadeOut()
        //  $('.featured-item:first h4').css('color', '#f00')
         
         $('.featured-item h4').dblclick( function(){
    
            $(this).css({
                'color': '#f00',
                'background': '#ff0',
                'font-weight': '100',
            });
    
         });
    
         /*
          * Manipulação de eventos
          */
         $('.featured-item a').on('blur', function(event){
    
            event.preventDefault();
    
            alert('Produto esgotado');
    
         })

         /*
         *Callback
         *entendendo acoes que começam ao termino de outra

         */
         $('.featured-item:nth(1)')
            .hide(2000, function(){
                // este é o callback
                alert( $(this).find('h4').text() + 'esgotado')
         })
         .show(2000, function(){
            console.log( $(this).find('h4').text() + 'em estoque')
         })
        
    
     /*
        * Animações
     */
    const duracao = 1000 // equivale a 1 segundo

     $('.featured-item:nth(0)')
         .hide(duracao)
         .show(duracao)
         .fadeOut(duracao)    
         .fadeIn(duracao)
         .toggle(duracao)
         .toggle(duracao)

      $('#form-submit').on('click', function(e){

         e.preventDefault()

         if($('#email').val() != ''){

            $('#email').animate({
               opacity: "toggle",
               top: "-50"
            }, duracao, function(){
               console.log($(this).val)
            })
         }
            

         

      });
    
    })

    /*
    *Incrementação da validação
    * Checa se o nome é valido
    * chega se o email é valido
    * checa se o cpf é valido com regex
    */

    function validate( elem ){

      if( elem.val() == '') {
         console.log('o campo de '+ elem.attr('name') + ' é obrigatório')

         elem.parent().find('.text-muted').show()

         elem.addClass('invalid')

         return false
      } else {
         elem.parent().find('.text-muted').hide()
         elem.removeClass('invalid')
      }
    }
    