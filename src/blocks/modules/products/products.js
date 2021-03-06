import Swiper from 'swiper/swiper-bundle';

const mainProductSlider = document.querySelector('.main .products__slider');

const mainProductSwiper = new Swiper(mainProductSlider, {
    slidesPerView: 3,
    slidesPerColumn: 4,
    slidesPerColumnFill: 'row',
    pagination: {
        el: '.products__pagination',
        clickable: true,
        bulletClass: 'products__pagination-bullet',
        bulletActiveClass: 'products__pagination-bullet_active',
        hiddenClass: 'products__pagination-hidden',
    },
    breakpoints: {
        992: {
            slidesPerView: 4,
            slidesPerColumn: 3,
        },
        768: {
            slidesPerView: 3,
            slidesPerColumn: 4,
            allowTouchMove: false,
        },
        576: {
            slidesPerView: 2,
            slidesPerColumn: 3,
            slidesPerGroup: 6,
        },
        320: {
            slidesPerView: 1,
            slidesPerColumn: 3,
            slidesPerGroup: 1,
            allowTouchMove: true,
        }
    },
}); 
