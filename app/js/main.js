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
});
