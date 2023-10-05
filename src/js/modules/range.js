const slider = document.getElementById("slider");
const before = document.getElementById("before");
const after = document.getElementById("after");
const sliderBtn = document.getElementById("slider-btn");

if (slider) {
  slider.addEventListener("input", e => {
    after.style.width = `${e.target.value}%`;
    sliderBtn.style.left = `${e.target.value}%`;
  });
}
