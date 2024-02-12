import { initSpoiler } from "./modules/spoilers.js";
import AOS from "aos";
import "./modules/range.js";
import "./modules/header.js";
import "./modules/scroll.js";
import "./modules/slider.js";
import "./modules/formValidate.js";
import "./modules/timer.js";
import { useDynamicAdapt } from "./modules/dynamicAdapt.js";
import fslightbox from "fslightbox";
function app() {
  useDynamicAdapt("max");
  initSpoiler();
  AOS.init({
    duration: 600,
    once: true,
  });
}
setTimeout(function () {
  document.getElementById("header-feedback-link").style.display = "block";
}, 10);

document.addEventListener("DOMContentLoaded", app);
