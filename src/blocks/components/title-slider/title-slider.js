import Swiper from '../../../../node_modules/swiper/swiper-bundle';

const bgSliderContainer = document.querySelector('.bg-slider__container');
const TitleSliderContainer = document.querySelector('.title-slider__wrp');
const paginationLines = document.querySelectorAll('.pagination__line');

const paginationItemInitAimation = () => paginationLines[0].classList.add('pagination__line_active');

window.onload = () => {
    paginationItemInitAimation();
};

const changeSlide = (i) => {
    paginationLines.forEach((el, index) => {
        if (i === index) {
            el.classList.add('pagination__line_active');
        } else {
            el.classList.remove('pagination__line_active');
        }
    });
}

const pagination = document.querySelector('.pagination')
const paginationSwiperContainer = pagination.querySelector('.swiper-container');

const paginationSlider = new Swiper(paginationSwiperContainer, {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 30,
    allowTouchMove: false,
    speed: 1000,
    breakpoints: {
        576: {
            slidesPerView: 3,
        }
    }
});

const swiperBg = new Swiper(bgSliderContainer, {
    touchRation: 0,
    effect: 'fade',
    allowTouchMove: false,
        on: {
            slideChange: () => {
                paginationSlider.slideTo(swiperBg.activeIndex);
                changeSlide(swiperBg.activeIndex);
            },
        },
});

const swiperTitle = new Swiper(TitleSliderContainer, {
    virtualTranslate: false,
    setWrapperSize: false,
    width: '1312',
    spaceBetween: '100%',
    breakpoints: {
        1280: {
            width: '1200',
        },
        992: {
            width: '912',
        },
        768: {
            width: '688',
        },
        576: {
            width: '496',
        },
        320: {
            width: '240',
        },
    },
    speed: 1000,
    loop: true,
    loopedSlides: 3,
    autoplay: {
        delay: 4000,
    },
    thumbs: {
        swiper: swiperBg,
    },
});