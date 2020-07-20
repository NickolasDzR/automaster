import Swiper from '../../../../node_modules/swiper/swiper-bundle';

const productSlider = document.querySelector('.products__slider');

const productSwiper = new Swiper(productSlider, {
    slidesPerView: 4,
    slidesPerColumn: 4,
    slidesPerColumnFill: 'row',
    allowTouchMove: false,
})