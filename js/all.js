jQuery(document).ready(function($) {
	$('.dropdown').click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$('.dropdown').toggleClass('clickchange');
		$('.dropdown-open').toggleClass('open');
	});
	 var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay:{
    delay: 1500,
    },
    effect:"cube",
    speed:3000,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    
  })
});

//top至頂事件
$(document).ready(function(){
  $('.top a').click(function(event) {
   event.preventDefault();
   $('html,body').animate({
     scrollTop: 0
   }, 1000);
  });
 
 });