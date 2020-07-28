const sidebar = document.querySelector('.sidebar');
const catalogModal = document.querySelector('.catalog-modal');
const hamburger = document.querySelector('.hamburger');

sidebar.addEventListener('click', e => {
    e.preventDefault();
    // if catalogModal_active has class catalogModal_active, then remove main-nav__active class first, then remove catalogModal
    if (document.body.style.overflow === 'visible' || document.body.style.overflow === '') {
        setTimeout(() => {
            document.body.style.overflow = 'hidden'
        }, 700);
    } else {
        setTimeout(() => {
            document.body.style = '';
        }, 700);
    }
    hamburger.classList.toggle('no-events');
    sidebar.classList.toggle('sidebar_active');
    catalogModal.classList.toggle('catalog-modal_active');

})