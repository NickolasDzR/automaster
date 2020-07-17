const sidebar = document.querySelector('.sidebar');

const typeListenner = ['mouseover', 'mouseout', 'click'];

typeListenner.forEach(el => {
    sidebar.addEventListener(el, e => {
        e.preventDefault();
        if (el === 'mouseover') {
            sidebar.classList.add('sidebar_active');
        } else {
            sidebar.classList.remove('sidebar_active');
        }
    })
})