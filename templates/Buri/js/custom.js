(function ($) {
  "use strict";

  $('#datepicker').datepicker();

  $('.popup-youtube, .popup-vimeo').magnificPopup({
    // disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  if (document.getElementById('default-select')) {
    $('select').niceSelect();
  }

  var review = $('.client_review_part');
  if (review.length) {
    review.owlCarousel({
      items: 3,
      loop: true,
      dots: true,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 5000,
      nav: false,
      margin: 20,
      center: true,
      responsive:{
        0:{
            items:1,
            dots: false
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
    });
  }
  // menu fixed js code
  $(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;
    if (window_top > 50) {
      $('.main_menu').addClass('menu_fixed animated fadeInDown');
    } else {
      $('.main_menu').removeClass('menu_fixed animated fadeInDown');
    }
  });

 $('.gallery_img').magnificPopup({
  type: 'image',
  gallery:{
    enabled:true
  }
});

}(jQuery));