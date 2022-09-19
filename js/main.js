$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 3,
    arrows: false,
    responsive: [
        {
          breakpoint: 315,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  });

  $('.second-slider').slick({
    slidesToShow: 2,
    arrows: false,
    responsive: [
        {
          breakpoint: 315,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  });
})

$('.open-popup').click(function() {
    $('.popup-bg').fadeIn(200);
    $('html').addClass('no-scroll');
});

$('.close-popup').click(function() {
    $('.popup-bg').fadeOut(200);
    $('html').removeClass('no-scroll');
});