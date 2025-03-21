document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const submitButton = form.querySelector("button");

  submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    const namaField = document.getElementById("nama-lengkap");
    const emailField = document.getElementById("email");
    const telponField = document.getElementById("telpon");
    const komentarField = document.getElementById("komentar");

    const nama = namaField.value.trim();
    const email = emailField.value.trim();
    const telpon = telponField.value.trim();
    const komentar = komentarField.value.trim();

    clearErrors();

    let isValid = true;

    if (!nama) {
      showError(namaField, "Nama wajib diisi.");
      isValid = false;
    }

    if (!email) {
      showError(emailField, "Email wajib diisi.");
      isValid = false;
    } else if (!validateEmail(email)) {
      showError(emailField, "Harap masukkan email yang valid.");
      isValid = false;
    }

    if (!telpon) {
      showError(telponField, "Nomor telepon wajib diisi.");
      isValid = false;
    } else if (!validateTelpon(telpon)) {
      showError(telponField, "Nomor telepon harus terdiri dari 12 hingga 13 digit angka.");
      isValid = false;
    }

    if (!komentar) {
      showError(komentarField, "Komentar wajib diisi.");
      isValid = false;
    }

    if (!isValid) return;

    const formAction = form.getAttribute("action");
    const url = `${formAction}?nama-lengkap=${encodeURIComponent(nama)}&email=${encodeURIComponent(email)}&telpon=${encodeURIComponent(telpon)}&komentar=${encodeURIComponent(komentar)}`;
window.location.href = url;
  });

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validateTelpon(telpon) {
    return /^\d{12,13}$/.test(telpon);
  }

  function showError(field, message) {
    let error = document.createElement("span");
    error.className = "error-message";
    error.style.color = "red";
    error.textContent = message;
    field.parentNode.appendChild(error);
  }


    function clearErrors() {
    document.querySelectorAll(".error-message").forEach((error) => error.remove());
  }
});
