import IMask from "imask";
const telField = document.getElementById("tel");
const nameField = document.getElementById("firstName");
const form = document.getElementById("form");
const nameError = document.getElementById("name-error");
const telError = document.getElementById("tel-error");

form.addEventListener("focusin", e => {
  if (e.target.closest("#tel")) {
    const maskOptions = {
      mask: "+{38}(000)000-00-00",
      lazy: false,
    };
    IMask(telField, maskOptions);
  }
  if (e.target.closest("#tel") || e.target.closest("#firstName")) {
    nameError.classList.add("hidden");
    telError.classList.add("hidden");
  }
});

form.addEventListener("submit", e => {
  if (!telTest(telField.value)) {
     telError.classList.remove("hidden");
    telError.classList.add("visible");
    e.preventDefault();
    console.log("error!");
  }
  if (nameField.value === "") {
     nameError.classList.remove("hidden");
    nameError.classList.add("visible");
    e.preventDefault();
    console.log("error!");
  }
});

function telTest(tel) {
  return /^[\+]?3?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/.test(tel);
}
