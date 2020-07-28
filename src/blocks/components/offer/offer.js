const offerBlocks = document.querySelectorAll('.offer');
const productsSub = document.querySelector('.products-sub');

offerBlocks.forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault();
        productsSub.classList.add('products-sub_active');
    })
})