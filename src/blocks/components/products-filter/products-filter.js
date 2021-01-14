var app = new Vue({
    el: '.products-filter',
    data: {
        message: 'По цене',
    },
    methods: {
        changeTitle: function(el) {
            var elText = el.target.innerHTML
            el.target.innerHTML = this.message;
            this.message = elText;
        },
    },
    mounted() {
        var productsFilterItem = document.querySelector('.products-filter__item'),
            widthProductFilterItem = productsFilterItem.offsetWidth,
            productsFilterCatogodyItem = document.querySelector('.products-filter__category-item');

            productsFilterCatogodyItem.style.minWidth = `${widthProductFilterItem}px`;
    }
})