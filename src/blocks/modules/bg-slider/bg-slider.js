import 'nodelist-foreach-polyfill';
import Swiper from 'swiper';

const backgroundImageExt = document.querySelectorAll('[data-background]');

const extensionAr = ['webp', 'jpg'];

if (Modernizr.webp) {
    backgroundImageExt.forEach(el => {
        el.style.backgroundImage = 'url(img/' + el.dataset.background + '.' + extensionAr[0] + ')';
        el.removeAttribute('data-background');
    });
} else {
    backgroundImageExt.forEach(el => {
        el.style.backgroundImage = 'url(img/' + el.dataset.background + '.' + extensionAr[1] + ')';
        el.removeAttribute('data-background');
    });
}

const bgSliderContainer = document.querySelector('.bg-slider__container');

const bg_slider = new Swiper(bgSliderContainer, {
    touchRation: 0,
    effect: 'fade',
    allowTouchMove: false,
});