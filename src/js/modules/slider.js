import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import noUiSlider from 'nouislider';

const beforeAfterSlider = document.querySelector('.slider-ba');
if (beforeAfterSlider) {
  let slider;
  slider = new Swiper(beforeAfterSlider, {
    modules: [Navigation, Pagination, Autoplay],

    wrapperClass: 'slider-ba-wrapper',
    slideClass: 'slider-ba-slide',
    slidesPerView: 'auto',
    spaceBetween: 0,
    speed: 800,
    allowTouchMove: false,
    centeredSlides: true,

    pagination: {
      el: '.pagination',
      clickable: true,
      dynamicBullets: true,
    },

    navigation: {
      prevEl: '.prev-slide',
      nextEl: '.next-slide',
    },
  });
}

const sliderSlides = document.querySelectorAll('.slider-ba-slide');
sliderSlides.forEach(s => {
  if (s) {
    const rangeSlider = s.querySelector('.range-slider');
    const after = s.querySelector('.after-part');
    const sliderBtn = s.querySelector('.range-slider-btn');
    noUiSlider.create(rangeSlider, {
      start: [50],
      connect: true,
      range: {
        min: 0,
        max: 100,
      },
    });

    rangeSlider.noUiSlider.on('update', values => {
      after.style.width = `${values[0]}%`;
      sliderBtn.style.left = `${values[0]}%`;
    });
  }
});
