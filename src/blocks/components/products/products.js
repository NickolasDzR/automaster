import Swiper from '../../../../node_modules/swiper/swiper-bundle';

const productSlider = document.querySelector('.products__slider');

const productSwiper = new Swiper(productSlider, {
    slidesPerView: 3,
    slidesPerColumn: 4,
    slidesPerColumnFill: 'row',
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
            pagination: {
                el: '.products__pagination',
                clickable: true,
                bulletClass: 'products__pagination-bullet',
                bulletActiveClass: 'products__pagination-bullet_active',
              },
            allowTouchMove: true,
        }
    }
})