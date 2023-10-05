const burgerButton = document.getElementById("burger-button");
const burgerInner = document.getElementById("burger-inner");
const burgerCross = document.getElementById("burger-cross");
const burgerMenu = document.getElementById("header-nav");

if (burgerButton) {
  burgerButton.addEventListener("click", e => {
    burgerCross.classList.toggle("active-burger");
    burgerInner.classList.toggle("active-burger");
    burgerMenu.classList.toggle("active-menu");
  });
}
