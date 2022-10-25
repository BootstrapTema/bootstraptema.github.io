/* ----------------------------------------------------------- */
/*  1. ScrollReveal
/* ----------------------------------------------------------- */

window.sr = ScrollReveal();
sr.reveal('.navbar', {
  duration: 2000,
  origin:'bottom'
});
sr.reveal('.showcase-left', {
  duration: 2000,
  origin:'top',
  distance:'300px'
});
sr.reveal('.showcase-right', {
  duration: 2000,
  origin:'right',
  distance:'300px'
});
sr.reveal('.features', {
  duration: 1000,
  delay: 1000,
  origin:'bottom'
});
sr.reveal('.showcase-caption', {
  duration: 2000,
  origin:'bottom'
});
sr.reveal('.portfolio', {
  duration: 2000,
  origin:'left',
  distance:'300px',
  viewFactor: 0.2
});
sr.reveal('.info-right', {
  duration: 2000,
  origin:'right',
  distance:'300px',
  viewFactor: 0.2
});

new grid3D( document.getElementById( 'portfolio' ) );

    $(function() {

      // Smooth Scrolling
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
          && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html, body').animate({
                scrollTop: target.offset().top
              }, 1000);
              return false;
            }
        }


      });

/* ----------------------------------------------------------- */
/*  PORTFOLIO GALLERY
/* ----------------------------------------------------------- */

		$('.filtr-container').filterizr();

    //Simple filter controls

      $('.mu-simplefilter li').click(function() {
        $('.mu-simplefilter li').removeClass('active');
          $(this).addClass('active');
      });


/* ----------------------------------------------------------- */
/*  7. PORTFOLIO POPUP VIEW ( IMAGE LIGHTBOX )
/* ----------------------------------------------------------- */

    $('.mu-imglink').magnificPopup({
      type: 'image',
      mainClass: 'mfp-fade',
      gallery:{
        enabled:true
      }
    });

    });


    jQuery(document).ready(function($){
	//create the slider
	$('.cd-testimonials-wrapper').flexslider({
		selector: ".cd-testimonials > li",
		animation: "slide",
		controlNav: false,
		slideshow: false,
		smoothHeight: true,
		start: function(){
			$('.cd-testimonials').children('li').css({
				'opacity': 1,
				'position': 'relative'
			});
		}
	});

	//open the testimonials modal page
	$('.cd-see-all').on('click', function(){
		$('.cd-testimonials-all').addClass('is-visible');
	});

	//close the testimonials modal page
	$('.cd-testimonials-all .close-btn').on('click', function(){
		$('.cd-testimonials-all').removeClass('is-visible');
	});
	$(document).keyup(function(event){
		//check if user has pressed 'Esc'
    	if(event.which=='27'){
    		$('.cd-testimonials-all').removeClass('is-visible');
	    }
    });

	//build the grid for the testimonials modal page
	$('.cd-testimonials-all-wrapper').children('ul').masonry({
  		itemSelector: '.cd-testimonials-item'
	});
});


$(function() {
  $(document).click(function (event) {
    $('.navbar-collapse').collapse('hide');
  });

  $('.navbar-nav li a').on('click', function(){
      $('.navbar-collapse').collapse('hide');
  });

});

/* ----------------------------------------------------------- */
/*   Contact form
/* ----------------------------------------------------------- */


(function ($) {
   'use strict';
   var form = $('.contact__form'),
       message = $('.contact__msg'),
       form_data;
   // Success function
   function done_func(response) {
       message.fadeIn().removeClass('alert-danger').addClass('alert-success');
       message.text(response);
       setTimeout(function () {
           message.fadeOut();
       }, 2000);
       form.find('input:not([type="submit"]), textarea').val('');
   }
   // fail function
   function fail_func(data) {
       message.fadeIn().removeClass('alert-success').addClass('alert-success');
       message.text(data.responseText);
       setTimeout(function () {
           message.fadeOut();
       }, 2000);
   }

   form.submit(function (e) {
       e.preventDefault();
       form_data = $(this).serialize();
       $.ajax({
           type: 'POST',
           url: form.attr('action'),
           data: form_data
       })
       .done(done_func)
       .fail(fail_func);
   });

 })(jQuery);
