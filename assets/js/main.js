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

var acc = document.getElementsByClassName("accordion")
var i

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active")

    var panel = this.nextElementSibling
    if (panel.style.display === "block") {
      panel.style.display = "none"
    } else {
      panel.style.display = "block"
    }
  })
}
