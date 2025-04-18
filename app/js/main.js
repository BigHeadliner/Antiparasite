$(function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (e) {
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
        alert(errorMessage);
        return;
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
    rows: 2,
    // centerMode: false,
    // variableWidth: false,
    responsive: [
      {
        breakpoint: 1340,
        settings: {
          infinite: true,
          variableWidth: false,
          slidesToShow: 4,
          slidesToScroll: 3,
          arrows: true,
          rows: 1,
        },
      },
      {
        breakpoint: 1235,
        settings: {
          infinite: true,
          variableWidth: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
          rows: 1,
        },
      },

      {
        breakpoint: 911,
        settings: {
          infinite: true,
          variableWidth: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          rows: 1,
        },
      },
    ],
  });

  var mixer = mixitup(".services__slider");
});
