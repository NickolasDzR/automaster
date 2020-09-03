if (document.querySelector('.offer')) {
    const offerBlocks = document.querySelectorAll('.offer');
    const productsSub = document.querySelector('.products-sub');
    const catalogModal = document.querySelector('.catalog-modal')
    const sidebar = document.querySelector('.sidebar');

    offerBlocks.forEach(el => {
        el.addEventListener('click', e => {
            e.preventDefault();

            if (!catalogModal.classList.contains('.catalog-modal_active')) {
                productsSub.classList.add('products-sub_active');
                if (!sidebar.classList.contains('sidebar_active')) {
                    sidebar.classList.add('no-events');
                };
            } else {
                productsSub.classList.add('products-sub_active');
            };
        });
    });

    const closeProductsSubBtn = document.querySelector('.products-sub__anchor');

    closeProductsSubBtn.addEventListener('click', e => {
        e.preventDefault();
        productsSub.classList.remove('products-sub_active');
    });
};