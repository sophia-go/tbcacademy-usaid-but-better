$(document).ready(function () {
  $(".inner-carousel").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    prevArrow: $(".slick-prev"),
    nextArrow: $(".slick-next")
  })
})
