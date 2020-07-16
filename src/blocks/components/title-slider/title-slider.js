import Swiper from '../../../../node_modules/swiper/swiper-bundle';

const bgSliderContainer = document.querySelector('.bg-slider__container');
const TitleSliderContainer = document.querySelector('.title-slider__wrp');
const paginationItems = document.querySelectorAll('.pagination__line');

const paginationItemInitAimation = () => paginationItems[0].classList.add('pagination__line_active');

window.onload = () => {
    paginationItemInitAimation();
};

const changeSlide = (i) => {
    paginationItems.forEach((el, index) => {
        if (i === index) {
            el.classList.add('pagination__line_active');
        } else {
            el.classList.remove('pagination__line_active');
        }
    })
}

const swiperBg = new Swiper(bgSliderContainer, {
    touchRation: 0,
    effect: 'fade',
    allowTouchMove: false,
    on: {
        slideChange: () => {
            changeSlide(swiperBg.activeIndex);
        },
    },
});


const swiperTitle = new Swiper(TitleSliderContainer, {
    virtualTranslate: false,
    speed: 1000,
    spaceBetween: 300,
    loop: true,
    loopedSlides: 3,
    autoplay: {
        delay: 4000,
    },
    thumbs: {
        swiper: swiperBg,
    },
});

