document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registerForm");
  const pass = document.getElementById("password");
  const terms = document.getElementById("terms");

  form.addEventListener("submit", function (e) {
    let errors = [];

    // Password check (less than 6)
    if (pass.value.trim().length < 6) {
      errors.push("Password must be at least 6 characters long.");
    }

    // Terms check
    if (!terms.checked) {
      errors.push("Please agree to the terms and conditions.");
    }

    // Agar koi error hai to submit na hone do
    if (errors.length > 0) {
      e.preventDefault();
      alert(errors.join("\n"));
    }
  });
});
