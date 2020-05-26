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
  focusOnSelect: true,
  centerMode: true,
  centerPadding: '70px',
  prevArrow: '<i class="fa fa-angle-left"></i>',
  nextArrow: '<i class="fa fa-angle-right"></i>'
});
 new WOW().init();
//btn-menu

$('body').scrollspy({ target: '.navbar-nav' });
$(document).ready(function() {
  $('.toggle-search').click(function() {
    $('.search-form').toggleClass('active')
  })

  var lastId,
  topMenu = $("#topmenu"),
  topMenuHeight = topMenu.outerHeight(),
  // All list items
  menuItems = topMenu.find("a"),
  // Anchors corresponding to menu items
  scrollItems = menuItems.map(function(){
    var item = $($(this).attr("href"));
    if (item.length) { return item; }
  });

  // Bind click handler to menu items
  // so we can get a fancy scroll animation
  menuItems.click(function(e){
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 500);
    e.preventDefault();
  });

  // Bind to scroll
  $(window).scroll(function(){
     // Get container scroll position
     var fromTop = $(this).scrollTop()+topMenuHeight;

     // Get id of current scroll item
     var cur = scrollItems.map(function(){
       if ($(this).offset().top < fromTop)
         return this;
     });
     // Get the id of the current element
     cur = cur[cur.length-1];
     var id = cur && cur.length ? cur[0].id : "";

     if (lastId !== id) {
         lastId = id;
         // Set/remove active class
         menuItems
           .parent().removeClass("active")
           .end().filter("[href='#"+id+"']").parent().addClass("active");
     }
  });
})