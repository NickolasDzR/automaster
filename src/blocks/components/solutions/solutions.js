import Swiper from '../../../../node_modules/swiper/swiper-bundle';

const solutionsContainer = document.querySelector('.solutions__container');

const solutionsSlider = new Swiper(solutionsContainer, {
    spaceBetween: 30,
    slidesPerView: 4,
    // slidesPerColumn: 4,
    slidesPerColumnFill: 'row',
    breakpoints: {
        992: {
            slidesPerView: 4,
            allowTouchMove: false,
        },
        768: {
            slidesPerView: 3,
        },
        576: {
            slidesPerView: 2,
        },
        320: {
            slidesPerView: 1,
            allowTouchMove: true,
        }
    }
})

// solutionsSlider.destroy();