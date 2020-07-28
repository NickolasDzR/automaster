const hamburger = document.querySelector('.hamburger'),
    modal = document.querySelector('.modal');
    mainNavLeft = document.querySelector('.main-nav__left');


hamburger.addEventListener('click', e => {
    e.preventDefault();
    hamburger.classList.toggle('is-active');
    // if modal_active has class modal_active, then remove main-nav__active class first, then remove modal
    if (modal.classList.contains('modal_active')) {
        setTimeout(() => {
            modal.classList.remove('modal_active');
            document.body.style.overflow = 'visible';
        }, 500);
        mainNavLeft.classList.remove('main-nav__left_active');
    } else {
        // if modal hasn't modal__active, then add modal class first, then mainNavLeft appear
        modal.classList.add('modal_active');
        setTimeout(() => {
            mainNavLeft.classList.add('main-nav__left_active');
            document.body.style.overflow = 'hidden';
        }, 700);
    }
})