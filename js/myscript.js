/*global $,window ,document*/

/* Jquery */

/*========================
        preloader
=========================*/
$(window).on('load', function(){
    $('#preloader_status').fadeOut();
    $('#preloader').delay(350).fadeOut();
});

/*========================
        owl carousel js
=========================*/

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      items:2,
      autoplay:true,
      smartSpeed: 750,
      loop:true,
      autoplayHoverPause:true,
      dots:false,
      nav:true,
      navText: ['<span><i class="fa-solid fa-angle-left"></i></span>' , '<span><i class="fa-solid fa-angle-right"></i></span>']
  });
});
/*========================
        progress bars
=========================*/
$(function(){
    $(".progress-bar").each(function(){
        $(this).animate({
        width:$(this).attr("aria-valuenow")+"%"
    }, 1000)
    });
});