$(document).ready(function() {

    $('.slider').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: false,
        smartSpeed: 700,
        responsiveClass: true
    });

    //height ====
    function item(){
        $('.services-top').each(function () {
            var ths = $(this),
                thsh = ths.find('.services-top-txt').outerHeight();
            ths.find('.services-top-img').css('min-height', thsh);
        });
    }item();

    $('.navigation-item-meth').click(function() {
        if (!$(this).hasClass('active')) {
            $('.navigation-item-meth').removeClass('active');
            $(this).addClass('active');
        }
    });


    $('.burger').click(function(){
        $('.burger__line').toggleClass('active-b');
        $('.menu').toggleClass('open');
        $('.wrapper').toggleClass('bg-active');

    });
});

