
const swiper = new Swiper('.mySwiper', {
    speed: 500,
    spaceBetween: 30,
    pagination: {
    el: '.swiper-pagination',
    clickable: true
    },
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
    }
   })