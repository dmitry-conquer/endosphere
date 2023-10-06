import noUiSlider from "nouislider";

const slider = document.getElementById("slider");
const before = document.getElementById("before");
const after = document.getElementById("after");
const sliderBtn = document.getElementById("slider-btn");

if (slider) {
  noUiSlider.create(slider, {
    start: [50],
    connect: true,
    range: {
      min: 0,
      max: 100,
    },
  });

  slider.noUiSlider.on("update", function (values, handle) {
    // inputs[handle].value = Math.round(values[handle]); // Передаем значение ползунков в input
    console.log(values);
    console.log(handle);
    after.style.width = `${values[0]}%`;
    sliderBtn.style.left = `${values[0]}%`;
  });
}
