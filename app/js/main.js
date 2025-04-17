$(function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (e) {
      // Зупиняємо стандартну поведінку форми
      e.preventDefault();

      // Перевіряємо, чи всі поля заповнені
      const name = document.getElementById("name").value;
      const phone = document.getElementById("phone").value;
      const city = document.getElementById("city").value;

      // Місце для повідомлення про помилки
      let errorMessage = "";

      if (!name) {
        errorMessage += "Введіть ваше ім’я.\n";
      }
      if (!phone) {
        errorMessage += "Введіть номер телефону.\n";
      }
      if (!city) {
        errorMessage += "Введіть область або місто.\n";
      }
      if (errorMessage) {
        alert(errorMessage); // Або показуємо це як HTML, якщо хочеш гарніший вигляд
        return; // Зупиняємо подальшу обробку, щоб форма не відправилась
      }
    });

  // Slider

  $(".services__slider").slick({
    prevArrow:
      '<button type="button" class="slick-btn slick-prev"><img src="images/prev.svg" alt=""></button>',
    nextArrow:
      '<button type="button" class="slick-btn slick-next"><img src="images/next.svg" alt=""></button>',
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    rows: 2, // Встановлюємо кілька рядів
    // centerMode: false,
    // variableWidth: false,
    responsive: [
      {
        breakpoint: 1315,
        settings: {
          infinite: false,
          variableWidth: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
          rows: 0,
        },
      },
      {
        breakpoint: 1115,
        settings: {
          infinite: false,
          variableWidth: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          rows: 0,
        },
      },

      {
        breakpoint: 871,
        settings: {
          infinite: false,
          variableWidth: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          rows: 0,
        },
      },
    ],
  });

  $(".featured-inner__nav button").on("click", function () {
    var filter = $(this).data("filter");
    $(".featured-inner__items").slick("slickUnfilter");

    if (filter == "villa") {
      $(".featured-inner__items").slick(
        "slickFilter",
        ".featured-inner__villa"
      );
    } else if (filter == "apartment") {
      $(".featured-inner__items").slick(
        "slickFilter",
        ".featured-inner__apartment"
      );
    } else if (filter == "all") {
      $(".featured-inner__items").slick("slickUnfilter");
    }
  });

  $(".featured-inner__btn").on("click", function () {
    $(".featured-inner__btn").removeClass("featured-inner__btn--active");
    $(this).addClass("featured-inner__btn--active");
  });
});
