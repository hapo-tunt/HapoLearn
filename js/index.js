$(function () {
  $("#togglerClick").click(function () {
    $("#togglerClose").toggle();
    $("#togglerOpen").toggle();
  });
});

$(function () {
  $("#closeMess").click(function () {
    $("#hideMess").hide();
  });
});

$(function () {
  $("#openMess").click(function () {
    $("#toggleChat").toggle();
  });
});

$(function () {
  $("#closeChat").click(function () {
    $("#toggleChat").hide();
  })
})

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
      breakpoint: 1040,
      settings: {
        slidesToShow: 1
      }
    },
  ]
});

tippy('#tooltip-fb', {
  content: "<a class='style-tooltip-footer' href=''>facebook.com/tuyen.dung.haposoft</a>",
  placement: "bottom",
  arrow: true,
  animation: 'fade',
  duration: [1000, 0],
  interactive: true,
  allowHTML: true,
});

tippy('#tooltip-email', {
  content: "<a class='style-tooltip-footer' href=''>info@haposoft.com</a>",
  placement: "bottom",
  arrow: true,
  animation: 'fade',
  duration: [1000, 0],
  interactive: true,
  allowHTML: true,
});

tippy('#tooltip-call', {
  content: "<span class='style-tooltip-footer'>+84-85-645-9898</span>",
  placement: "bottom",
  arrow: true,
  animation: 'fade',
  duration: [1000, 0],
  interactive: true,
  allowHTML: true,
});
