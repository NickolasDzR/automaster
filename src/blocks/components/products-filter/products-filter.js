var productFilter = new Vue({
    el: '.products-filter',
    data: {
        titleSort: 'По цене',
        sort: [
            {message: "По цене"},
            {message: "По наличию"},
        ]
    },
    methods: {
        changeTitle: function(el) {
            var elText = el.target.innerHTML
            el.target.innerHTML = this.message;
            this.message = elText;
        },
    },
    mounted() {
        console.log('loaded');
    }
})