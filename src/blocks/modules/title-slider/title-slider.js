import Swiper from 'swiper/swiper-bundle';

const bgSliderContainer = document.querySelector('.bg-slider__container');
const TitleSliderContainer = document.querySelector('.title-slider__wrp');
const paginationLines = document.querySelectorAll('.pagination__line');

let initiateIndexSlider = 0;
const paginationItemInitAimation = () => paginationLines[initiateIndexSlider].classList.add('pagination__line_active');

window.onload = () => {
    if (document.querySelector('.pagination__line')) {
        paginationItemInitAimation();
    }
};

const changeSlide = (i, prev) => {
    paginationLines.forEach((el, index) => {
        if (i === index) {
            el.classList.add(`pagination__line_active`);
        } else {
            el.classList.remove(`pagination__line_active`);
        }
    });
}

let paginationSlider;

if (document.querySelector('.pagination')) {
    const pagination = document.querySelector('.pagination')
    const paginationSwiperContainer = pagination.querySelector('.swiper-container');

    paginationSlider = new Swiper(paginationSwiperContainer, {
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
}

const swiperBg = new Swiper(bgSliderContainer, {
    touchRation: 0,
    effect: 'fade',
    allowTouchMove: false,
    on: {
        slideChange: (arg) => {
            paginationSlider.slideTo(swiperBg.activeIndex);
            changeSlide(swiperBg.activeIndex, swiperBg.previousIndex);
        },
    },
});

swiperBg.on('onSlideNext', function(){console.log('slide next')});

const swiperTitle = new Swiper(TitleSliderContainer, {
    virtualTranslate: false,
    setWrapperSize: false,
    spaceBetween: 30,
    breakpoints: {
    },
    speed: 1000,
    loop: true,
    loopedSlides: 3,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false
    },
    thumbs: {
        swiper: swiperBg,
    },
});