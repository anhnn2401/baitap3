$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  arrows: true,
  focusOnSelect: true,
  adaptiveHeight: false,
  prevArrow: '<i class="fa fa-angle-left"></i>',
  nextArrow: '<i class="fa fa-angle-right"></i>'
});
$('.filter-container').filterizr();
$('.feedback-slide').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.feedback-nav'
});
$('.feedback-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  asNavFor: '.feedback-slide',
  arrows: true,
  centerMode: true,
  centerPadding: '70px',
  prevArrow: '<i class="fa fa-angle-left"></i>',
  nextArrow: '<i class="fa fa-angle-right"></i>'
});
 new WOW().init();
//btn-menu
$('.fa-search').on('click', function(){
  $('.form-control').toggleClass('open-search')
});
$('body').scrollspy({ target: '.navbar-nav' });
