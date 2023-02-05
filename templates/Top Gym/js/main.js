/* =================================
------------------------------------
  TopGym | Fitness HTML Template
  Version: 1.0
 ------------------------------------
 ====================================*/

'use strict';

(function ($) {
    
    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(400).fadeOut("slow");
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    /*------------------
		Navigation
	--------------------*/
	$(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
		Search Bar Wrap
	--------------------*/
    $(".search-trigger").on('click', function() {
        $(".search-bar-wrap").addClass("active");
    });              


    $(".search-close").on('click', function() {
        $(".search-bar-wrap").removeClass("active");
    });


    /*------------------
        Hero Slider
    --------------------*/
    var hero_s = $(".slide-items");
    hero_s.owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 1,
        dots: true,
		mouseDrag: false,
        animateOut: 'fadeOut',
    	animateIn: 'fadeIn',
        navText: ['<i class="flaticon-left-arrow-1"></i>', '<i class="flaticon-right-arrow-1"></i>'],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        onInitialized: function() {
        	var a = this.items().length;
            $("#snh-1").html("<span>1</span><span>" + a + "</span>");
        }
    });

    /*------------------
        Magnific Popup
    --------------------*/
        $('.pop-up').magnificPopup({
            type: 'iframe'
        });

    /*------------------
        About Counter Up
    --------------------*/
    $('.counter').each(function () {
        $(this).prop('Counter',0).animate({
        Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
            $(this).text(Math.ceil(now));
            }
        });
    });

    /*------------------
        Elements Counter UP
    --------------------*/
    $('.m-counter').each(function () {
        $(this).prop('Counter',0).animate({
        Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
            $(this).text(Math.ceil(now));
            }
        });
    });

    /*------------------
        Barfiller
    --------------------*/
    $('#bar1').barfiller({
        barColor: '#233EDE',
        duration: 2000
    });
    $('#bar2').barfiller({
        barColor: '#233EDE',
        duration: 2000
    });
    $('#bar3').barfiller({
        barColor: '#233EDE',
        duration: 2000
    });

    /*------------------
        Accordin Active
    --------------------*/
    $('.collapse').on('shown.bs.collapse', function () {
        $(this).prev().addClass('active');
    });

    $('.collapse').on('hidden.bs.collapse', function () {
        $(this).prev().removeClass('active');
    });

    /*------------------
        Progress Loader
    --------------------*/
	$('.circle-progress').each(function() {
		var cpvalue = $(this).data("cpvalue");
		var cpcolor = $(this).data("cpcolor");
		var cpid 	= $(this).data("cpid");

		$(this).append('<div class="'+ cpid +'"></div><div class="progress-value"><span class="loader-percentage">'+ cpvalue +'%</span></div>');

		if (cpvalue < 100) {

			$('.' + cpid).circleProgress({
				value: '0.' + cpvalue,
				size: 174,
				thickness: 16,
				fill: cpcolor,
				emptyFill: "rgba(0, 0, 0, 0)"
			});
		} else {
			$('.' + cpid).circleProgress({
				value: 1,
				size: 174,
				thickness: 16,
				fill: cpcolor,
				emptyFill: "rgba(0, 0, 0, 0)"
			});
		}

	});


})(jQuery);