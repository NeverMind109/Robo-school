import Swiper, { Navigation, Scrollbar } from "swiper";
Swiper.use([Navigation, Scrollbar]);

const trainers = document.querySelector(".trainers__content");
const trainersSlider = new Swiper(trainers, {
  slidesPerView: "auto",
  spaceBetween: 20,
  scrollbar: {
    el: ".trainers__scroll",
    draggable: true,
  },
  navigation: {
    nextEl: ".trainers__slider-btn--next",
    prevEl: ".trainers__slider-btn--prev",
  },
  breakpoints: {
    // when window width is >= 576px
    576: {
      slidesPerView: "auto",
      spaceBetween: 40,
      scrollbar: {
        el: ".trainers__scroll",
        draggable: true,
      },
      navigation: {
        nextEl: ".trainers__slider-btn--next",
        prevEl: ".trainers__slider-btn--prev",
      },
    },
  },
});
