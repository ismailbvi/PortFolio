$(function () {
  "use strict";

  // MENU
  $(".navbar .nav-link").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  $(window).on("scroll", function () {
    /*----------------------------------------------------*/
    /*  Navigtion Menu Scroll
        /*----------------------------------------------------*/

    var b = $(window).scrollTop();

    if (b > 72) {
      $(".navbar").addClass("scroll");
    } else {
      $(".navbar").removeClass("scroll");
    }
  });

  // TESTIMONIALS CAROUSEL
  $("#testimonials-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      900: {
        items: 2,
      },
      1200: {
        items: 3,
        loop: false,
      },
    },
  });

  // SMOOTHSCROLL
  $(function () {
    $(".navbar .nav-link").on("click", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top - 49,
          },
          1000
        );
      event.preventDefault();
    });
  });
});
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
