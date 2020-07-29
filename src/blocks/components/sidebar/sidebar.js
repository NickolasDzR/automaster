const bodyTag = document.body;

if (document.querySelector('.sidebar')) {
    const sidebar = document.querySelector('.sidebar');
    const catalogModal = document.querySelector('.catalog-modal');
    const hamburger = document.querySelector('.hamburger');
    const productsSub = document.querySelector('.products-sub');

    sidebar.addEventListener('click', e => {
        e.preventDefault();

        if (sidebar.classList.contains('sidebar_active')) {
            sidebar.classList.remove('sidebar_active');
            catalogModal.classList.remove('catalog-modal_active');
            bodyTag.classList.remove('overflow-hidden');
            if (productsSub.classList.contains('products-sub_active')) {
                productsSub.classList.remove('products-sub_active');
            }
        } else {
            sidebar.classList.add('sidebar_active');
            catalogModal.classList.add('catalog-modal_active');
            setTimeout(() => {
                bodyTag.classList.add('overflow-hidden');
            }, 700);
        };
    });
};