$(".stil__slider").slick({
    arrows: false,
    slidesToShow: 3.63,
    Infinite: true,
    draggable: false,
    waitForAnimate: true,
    dots:false,
});
$(".stil__slider__prev").on("click", function (e) {
    e.preventDefault();
    $(".team__slider").slick("slickPrev");
  });

  $(".stil__slider__next").on("click", function (e) {
    e.preventDefault();
    $(".stil__slider").slick("slickNext");
  });
  