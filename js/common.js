$(document).ready(function() {


    //slider
    $('.slider').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: false,
        smartSpeed: 1000,
        responsiveClass: true
    });

    //height service-top block====
    function item(){
        $('.services-top').each(function () {
            var ths = $(this),
                thsh = ths.find('.services-top-txt').outerHeight();
            ths.find('.services-top-img').css('min-height', thsh);
        });
    }item();

    //header menu active
    $('.navigation-item-meth').click(function() {
        if (!$(this).hasClass('active')) {
            $('.navigation-item-meth').removeClass('active');
            $(this).addClass('active');
        }
    });

    //burger animation
    $('.burger').click(function(){
        $('.burger__line').toggleClass('active-b');
        $('.menu').toggleClass('open');
        $('.wrapper').toggleClass('bg-active');

    });

    //service item
    if(document.documentElement.clientWidth > 1000) {
        $('.serviceL-item:not(:last-child)').mouseover(function () {
            $('.serviceL-item:last-child').hide();
        });

        $('.serviceL-item').mouseleave(function () {
            $('.serviceL-item:last-child').show();
        });

        $('.serviceR-item:not(:last-child)').mouseover(function () {
            $('.serviceR-item:last-child').hide();
        });

        $('.serviceR-item').mouseleave(function () {
            $('.serviceR-item:last-child').show();
        });
    }

    $('.News-tab li').click(function() {
        if (!$(this).hasClass('active')) {
            $('.News-tab li').removeClass('active');
            $(this).addClass('active');
        }
    });


    $('.pagination li').click(function() {
        if (!$(this).hasClass('active')) {
            $('.pagination li').removeClass('active');
            $(this).addClass('active');
        }
    });


    $('.sidebar-item').click(function() {
        if (!$(this).hasClass('active')) {
            $('.sidebar-item').removeClass('active');
            $(this).addClass('active');
        }
    });

    $('a#license').fancybox({});

    $('a#gallery').fancybox({
        'loop': true,
        'showNavArrows': true,
    });
});

