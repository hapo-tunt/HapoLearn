$(function () {
  $("#togglerClick").click(function () {
    $("#togglerClose").toggle();
    $("#togglerOpen").toggle();
  });
});

$('.slider-feedback').slick({
  infinite: true,
  autoplay: true,
  pauseOnDotsHover: true,
  cssEase: 'linear',
  slidesToShow: 2,
  slidesToScroll: 1,
  speed: 1000,
  autoplaySpeed: 3000,
  prevArrow: '<button class="slide-arrow prev-arrow"><i class="fas fa-angle-left"></i></button>',
  nextArrow: '<button class="slide-arrow next-arrow"><i class="fas fa-angle-right"></i></button>',
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1
      }
    },
  ]
});
  