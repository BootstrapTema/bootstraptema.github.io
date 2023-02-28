/*--------------------------------------------------
Website by Websolute
--------------------------------------------------*/jQuery(document).ready(function ($) {
    function isotopeFilter() {
        $('.recent-works--items').isotope({
            itemSelector: '.recent-works--items__item',
            layoutMode: 'fitRows'
        });
        $('.recent-works--nav ul li').click(function () {
            $('.recent-works--nav ul li').removeClass('active');
            $(this).addClass('active');

            var selector = $(this).attr('data-filter');
            $('.recent-works--items').isotope({
                filter: selector
            });
            return false;
        });
    }

    function scrollDown() {
        $('.home-slider--anchor span').click(function () {
            var y = $(window).scrollTop();
            var x = $(window).height();
            $('html, body').animate({scrollTop: y + x})
        });
    }

    function sliders() {
        $('.home-slider--wrapper').slick({
            dots: false,
            infinite: true,
            speed: 500,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '.home-slider--nav .prev',
            nextArrow: '.home-slider--nav .next',
        });

        $('.single-portfolio--slider').slick({
            dots: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            appendDots: '.single-portfolio--slider__dots',
        });

        $('.our-services--slider').slick({
            arrows: false,
            dots: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            appendDots: '.our-services--dots',
        });

        $('.case-study--left__textslider').slick({
            arrows: false,
            dots: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            appendDots: '.case-study--left__dots',
            asNavFor: '.case-study--right__imageslider',
        });

        $('.case-study--right__imageslider').slick({
            arrows: false,
            dots: false,
            infinite: true,
            speed: 500,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.case-study--left__textslider',
        });
    }

    function stickyMenu() {
        var scroll = $(window).scrollTop();

        if (scroll >= 400) {
            $("header").addClass("sticky-header");
        } else {
            $("header").removeClass("sticky-header");
        }
    }

    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    function menuMobile() {
        $('.mobile-menu').click(function () {
           $('.menu').toggleClass('slide-menu');
           if($(this).find('i').hasClass('fa-bars')) {
               $(this).find('i').removeClass('fa-bars');
               $(this).find('i').addClass('fa-times');
           } else {
               $(this).find('i').addClass('fa-bars');
               $(this).find('i').removeClass('fa-times');
           }
        });
    }

    /*--------------------------------------------------
    DOC READY
    --------------------------------------------------*/
    $(function () {
        isotopeFilter();
        scrollDown();
        sliders();
        menuMobile();
    });


    /*--------------------------------------------------
    WIN LOAD
    --------------------------------------------------*/
    $(window).on('load', function () {

    });

    /*--------------------------------------------------
    WIN SCROLL
    --------------------------------------------------*/
    $(window).on('resize scroll', function() {
        stickyMenu();

        $('.odometer').each(function() {
            if ($(this).isInViewport()) {

                setTimeout(function(){
                    $('.odometer.first').html(5142);
                    $('.odometer.second').html(51);
                    $('.odometer.third').html(422);
                    $('.odometer.fourth').html(9870);
                    $('.odometer.fifth').html(658);
                }, 0);
            } else {
            }
        });
    });
});
