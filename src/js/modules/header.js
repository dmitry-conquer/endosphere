const burgerButton = document.getElementById("burger-button");
const burgerInner = document.getElementById("burger-inner");
const burgerCross = document.getElementById("burger-cross");
const burgerMenu = document.getElementById("header-nav");
const headerLinks = burgerMenu.querySelectorAll("a");

if (burgerButton) {
  burgerButton.addEventListener("click", e => {
    burgerCross.classList.toggle("active-burger");
    burgerInner.classList.toggle("active-burger");
    burgerMenu.classList.toggle("active-menu");
  });
  burgerMenu.addEventListener("click", e => {
    if (e.target.closest("a")) {
      burgerCross.classList.remove("active-burger");
      burgerInner.classList.remove("active-burger");
      burgerMenu.classList.remove("active-menu");
    }
  });
}
