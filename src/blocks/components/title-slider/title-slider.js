import Swiper from '../../../../node_modules/swiper/swiper-bundle';

const bgSliderContainer = document.querySelector('.bg-slider__container');
const TitleSliderContainer = document.querySelector('.title-slider__wrp');
const paginationItems = document.querySelectorAll('.pagination__line');

const paginationItemInitAimation = () => paginationItems[0].classList.add('pagination__line_active');
// const styleSliderAfterSliderInit = () => TitleSliderContainer.style.overflow = 'visible';

window.onload = () => {
    paginationItemInitAimation();
    // setTimeout(styleSliderAfterSliderInit, 100);
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
            width: '320',
        },
    },
    speed: 1000,
    loop: true,
    loopedSlides: 3,
    // autoplay: {
    //     delay: 4000,
    // },
    thumbs: {
        swiper: swiperBg,
    },
});

