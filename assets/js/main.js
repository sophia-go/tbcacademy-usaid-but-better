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

const carouselContainer = document.querySelector(".inner-carousel")
const navigationArrows = document.querySelectorAll(".carousel-arrow")
const carouselPanels = document.querySelectorAll(".carousel-item")

let currentPanelIndex = 0

navigationArrows.forEach((arrow, index) => {
  arrow.addEventListener("click", () => {
    if (index === 0) {
      currentPanelIndex =
        currentPanelIndex === 0
          ? carouselPanels.length - 1
          : currentPanelIndex - 1
    } else {
      currentPanelIndex =
        currentPanelIndex === carouselPanels.length - 1
          ? 0
          : currentPanelIndex + 1
    }
    updateCarousel(currentPanelIndex)
  })
})

function updateCarousel(index) {
  carouselPanels.forEach((panel) =>
    panel.classList.remove("carousel-item--active")
  )
  carouselPanels[index].classList.add("carousel-item--active")
  indicatorDots.forEach((dot) => dot.classList.remove("carousel-dot--active"))
  indicatorDots[index].classList.add("carousel-dot--active")
}

const indicatorDots = document.querySelectorAll(".carousel-dot")

indicatorDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    updateCarousel(index)
  })
})

setInterval(() => {
  currentPanelIndex = (currentPanelIndex + 1) % carouselPanels.length
  updateCarousel(currentPanelIndex)
}, 5000)
