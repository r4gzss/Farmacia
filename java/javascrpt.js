
const trackImage = document.querySelector('.carousel-track');
const slidesImage = Array.from(trackImage.children);
const nextButtonImage = document.querySelector('.next');
const prevButtonImage = document.querySelector('.prev');
const slideWidthImage = slidesImage[0].getBoundingClientRect().width;
let currentSlideIndexImage = 0;


const moveToSlideImage = (track, currentSlideIndex) => {
  track.style.transform = `translateX(-${slideWidthImage * currentSlideIndex}px)`;
};


nextButtonImage.addEventListener('click', () => {
  if (currentSlideIndexImage < slidesImage.length - 1) {
    currentSlideIndexImage++;
  } else {
    currentSlideIndexImage = 0;
  }
  moveToSlideImage(trackImage, currentSlideIndexImage);
});


prevButtonImage.addEventListener('click', () => {
  if (currentSlideIndexImage > 0) {
    currentSlideIndexImage--;
  } else {
    currentSlideIndexImage = slidesImage.length - 1;
  }
  moveToSlideImage(trackImage, currentSlideIndexImage);
});

const trackProduct = document.querySelector('.paginas3');
const slidesProduct = Array.from(trackProduct.children);    
const nextButtonProduct = document.querySelector('.proximo');
const prevButtonProduct = document.querySelector('.paginas');
const slideWidthProduct = slidesProduct[0].getBoundingClientRect().width;
let currentSlideIndexProduct = 0;


const moveToSlideProduct = (track, currentSlideIndex) => {
  track.style.transform = `translateX(-${slideWidthProduct * currentSlideIndex}px)`;
};


nextButtonProduct.addEventListener('click', () => {
  if (currentSlideIndexProduct < slidesProduct.length - 1) {
    currentSlideIndexProduct++;
  } else {
    currentSlideIndexProduct = 0;
  }
  moveToSlideProduct(trackProduct, currentSlideIndexProduct);
});


prevButtonProduct.addEventListener('click', () => {
  if (currentSlideIndexProduct > 0) {
    currentSlideIndexProduct--;
  } else {
    currentSlideIndexProduct = slidesProduct.length - 1;
  }
  moveToSlideProduct(trackProduct, currentSlideIndexProduct);
});