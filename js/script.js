$(function () {
  "use strict";
  $(".navbar .nav-link").on("click", function () {
    $(".navbar-collapse").removeClass("show");
    $(".navbar-toggler").removeClass("change");
  });
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 72) {
      $(".navbar").addClass("scroll");
    } else {
      $(".navbar").removeClass("scroll");
    }
  });

  $(".navbar .nav-link").on("click", function (event) {
    var target = $(this.getAttribute("href"));
    if (target.length) {
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: target.offset().top - 49,
        },
        1000
      );
    }
  });
});
function toggleMenu(x) {
  x.classList.toggle("change");
  $(".navbar-collapse").toggleClass("show");
}

document.addEventListener("DOMContentLoaded", function () {
  const dynamicText = document.querySelector(".dynamic-txts");
  const textItems = document.querySelectorAll(".dynamic-txts li");
  let stepCount = 0;

  function resetPosition() {
    stepCount++;

    if (stepCount === 4) {
      stepCount = 0;
      dynamicText.style.animation = "none";
      dynamicText.style.top = "0px";
      textItems.forEach((item) => {
        item.style.animation = "none";
        void item.offsetWidth;
        item.style.animation = "slide 48s steps(6) infinite";
      });
      setTimeout(() => {
        dynamicText.style.animation = "slide 48s steps(6) infinite";
      }, 50);
    }
  }
  textItems.forEach((item) => {
    item.addEventListener("animationiteration", resetPosition);
  });
});
