const sidebar = document.querySelector('.sidebar');
const catalogModal = document.querySelector('.catalog-modal');

sidebar.addEventListener('click', e => {
    e.preventDefault();
    // if catalogModal_active has class catalogModal_active, then remove main-nav__active class first, then remove catalogModal
        sidebar.classList.toggle('sidebar_active');
        catalogModal.classList.toggle('catalog-modal_active');

})