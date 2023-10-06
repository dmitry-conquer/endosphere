const telField = document.getElementById("tel");
const nameField = document.getElementById("firstName");
const form = document.getElementById("form");
const nameError = document.getElementById("name-error");
const telError = document.getElementById("tel-error");

form.addEventListener("focusin", e => {
  if (e.target.closest("#tel") || e.target.closest("#firstName")) {
    nameError.classList.add("hidden");
    telError.classList.add("hidden");
  }
});

form.addEventListener("submit", e => {
  if (nameField.value === "") {
    nameError.classList.remove("hidden");
    nameError.classList.add("visible");
    e.preventDefault();
  }
  if (telField.value === "") {
    telError.classList.remove("hidden");
    telError.classList.add("visible");
    e.preventDefault();
  }
});
