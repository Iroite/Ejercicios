let currentIndex = 0;
const slides = document.querySelectorAll('.slider__slide');
const totalSlides = slides.length;
const sliderContainer = document.querySelector('.slider__contenedor');
function mostrarSlide(index) {
 if (index < 0) {
 currentIndex = totalSlides - 1;
 } else if (index >= totalSlides) {
 currentIndex = 0;
 } else {
 currentIndex = index;
 }
 const translateValue = -currentIndex * 100 + '%';
 sliderContainer.style.transform = 'translateX(' + translateValue + ')';
}
function siguienteSlide() {
 mostrarSlide(currentIndex + 1);
}
function previaSlide() {
 mostrarSlide(currentIndex - 1); 
}
// Autoplay
setInterval(siguienteSlide, 5000);