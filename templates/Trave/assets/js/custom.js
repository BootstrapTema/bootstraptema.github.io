$(document).ready(function(){
	"use strict";
    
        /*==================================
* Author        : "ThemeSine"
* Template Name : TravelBlog HTML Template
* Version       : 1.0
==================================== */

/*=========== TABLE OF CONTENTS ===========
1. Scroll To Top
2. Smooth scrolling part start
3. welcome animation support
======================================*/

    // 1. Scroll To Top 
		$(window).on('scroll',function () {
			if ($(this).scrollTop() > 300) {
				$('.return-to-top').fadeIn();
			} else {
				$('.return-to-top').fadeOut();
			}
		});
		$('.return-to-top').on('click',function(){
				$('html, body').animate({
				scrollTop: 0
			}, 1500);
			return false;
		});

	// 2. Smooth scrolling part start
	
	!function (o) {
		"use strict";

		o('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
			if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
				var a = o(this.hash);
				if ((a = a.length ? a : o("[name=" + this.hash.slice(1) + "]")).length)
					return o("html, body").animate({ scrollTop: a.offset().top - 54 }, 1e3, "easeInOutExpo"), !1
			}
		}),


			o(".js-scroll-trigger").click(function () {
				o(".navbar-collapse").collapse("hide")
			}),


			o("body").scrollspy({ target: "#mainNav", offset: 56 });

		var a = function () { 100 < o("#mainNav").offset().top ? o("#mainNav").addClass("navbar-shrink") : o("#mainNav").removeClass("navbar-shrink") };

		a(),

			o(window).scroll(a)

	}(jQuery);
	



	// 3. welcome animation support

        $(window).load(function(){
        	$(".welcome-txt h2,.welcome-txt p").removeClass("animated fadeInUp").css({'opacity':'0'});
            $(".welcome-txt button").removeClass("animated fadeInDown").css({'opacity':'0'});
        });

        $(window).load(function(){
        	$(".welcome-txt h2,.welcome-txt p").addClass("animated fadeInUp").css({'opacity':'0'});
            $(".welcome-txt button").addClass("animated fadeInDown").css({'opacity':'0'});
        });

});



