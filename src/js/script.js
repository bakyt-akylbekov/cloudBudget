$('#demoDefaultSelection').ddslick({
    onSelected: function(selectedData){

    }
});




$('#divNoImage').ddslick({

});



$(document).ready(function(){
    $(".carousel").owlCarousel({
        items: 1
    });
});

$('.mobile-btn').on('click',  function() {
    $('.mobile-btn').toggleClass('show-mobile-btn');
    $('.header__menu').toggleClass('show-menu');
    $('.header__link').toggleClass('show-header__link')
});

$('.header_menu nav a').on('click',  function() {
    $('.mobile-btn').removeClass('show-mobile-btn');
    $('.header__menu').removeClass('show-menu');
    $('.header__link').removeClass('show-header__link')
});



