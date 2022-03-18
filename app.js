skrollr.init();

const loader = document.querySelector(".loader");

setTimeout(() => {
  loader.classList.add("loader-finish");
}, 3000);

const images = [...document.querySelectorAll(".slider-img")];
const slider = document.querySelector(".slider");
let sliderWidth;
let imageWidth;
let current = 0;
let target = 0;
let ease = 0.05;

images.forEach((image, index) => [
  (image.style.backgroundImage = `url(./kawyeen/${index + 1}.jpeg)`),
]);
