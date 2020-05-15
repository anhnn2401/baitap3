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
