Vue.component('goods-items', {
    props: ['item'],
    template: `<div class="goods__item">
                        <img src="./img/goods/logo-comp.png" class="goods__logo">
                        <div class="goods__title"><a src="./goods-item" class="goods__link">
                            {{ item.title }}</a>
                        </div> <div class="goods__info">
                            <div class="goods__text">
                                {{ item.text }}
                            </div>
                            <div class="goods__price">
                                {{ item.price | numberFormatter }}руб
                            </div>
                        </div>
                        <div class="goods__additional">
                            <div class="goods__available" v-if="!item.available">
                                <p class="goods__paragraph">
                                    Out of stock
                                </p>
                            </div>
                            <div class="goods__available" v-else>
                                <p class="goods__paragraph">
                                    {{ item.available }} Шт
                                </p>
                            </div>
                        <a href="" class="goods__about goods__link">Подробнее</a>
                    </div>
                    <img src="./img/goods/machine.png" class="goods__img">
                </div>`,
    filters: {
        numberFormatter: (v) => {
            v = Math.round(v)
            v = v + '';
            v = v.split('').reverse().map((item, i) => i % 3 == 0 ? item + ' ' : item)
            v = v.reverse().join('');
            return v
            },
    },
});

var goods = new Vue({
    el: '.goods',
    data: {
        price: 2000000,
        goodsItems: [
            {
                title: 'Sivik Master DTC-450',
                text: 'Automatic input three parameters, LCD monitor, multioperator, aludata, 220V',
                price: 1300000,
                available: false,
                image: `machine.png`,
                logo: `logo-comp.png`
            },
            {
                title: 'Sivik Master DTC-450',
                text: 'Automatic input three parameters, LCD monitor, multioperator, aludata, 220V',
                price: 700000,
                available: false,
                image: `machine2.png`,
                logo: `logo-comp.png`
            },
            {
                title: 'Sivik Master DTC-450',
                text: 'Automatic input three parameters, LCD monitor, multioperator, aludata, 220V',
                price: 1250000,
                available: false,
                image: `machine3.png`,
                logo: `logo-comp.png`
            },
            {
                title: 'Sivik Master DTC-450',
                text: 'Automatic input three parameters, LCD monitor, multioperator, aludata, 220V',
                price: 2000000,
                available: false,
                image: `machine4.png`,
                logo: `logo-comp.png`
            },
            {
                title: 'Sivik Master DTC-450',
                text: 'Automatic input three parameters, LCD monitor, multioperator, aludata, 220V',
                price: 2100000,
                available: false,
                image: `machine.png`,
                logo: `logo-comp.png`
            },
            {
                title: 'Sivik Master DTC-450',
                text: 'Automatic input three parameters, LCD monitor, multioperator, aludata, 220V',
                price: 2200000,
                available: false,
                image: `machine2.png`,
                logo: `logo-comp.png`
            },
            {
                title: 'Sivik Master DTC-450',
                text: 'Automatic input three parameters, LCD monitor, multioperator, aludata, 220V',
                price: 2300000,
                available: false,
                image: `machine3.png`,
                logo: `logo-comp.png`
            },
            {
                title: 'Sivik Master DTC-450',
                text: 'Automatic input three parameters, LCD monitor, multioperator, aludata, 220V',
                price: 2500000,
                available: false,
                image: `machine4.png`,
                logo: `logo-comp.png`
            },
            {
                title: 'Sivik Master DTC-450',
                text: 'Automatic input three parameters, LCD monitor, multioperator, aludata, 220V',
                price: 2500000,
                available: false,
                image: `machine.png`,
                logo: `logo-comp.png`
            },
            {
                title: 'Sivik Master DTC-450',
                text: 'Automatic input three parameters, LCD monitor, multioperator, aludata, 220V',
                price: 2500000,
                available: false,
                image: `machine2.png`,
                logo: `logo-comp.png`
            },
            {
                title: 'Sivik Master DTC-450',
                text: 'Automatic input three parameters, LCD monitor, multioperator, aludata, 220V',
                price: 1100000,
                available: false,
                image: `machine3.png`,
                logo: `logo-comp.png`
            },
            {
                title: 'Sivik Master DTC-450',
                text: 'Automatic input three parameters, LCD monitor, multioperator, aludata, 220V',
                price: 1700000,
                available: false,
                image: `machine3.png`,
                logo: `logo-comp.png`
            },
            {
                title: 'Sivik Master DTC-450',
                text: 'Automatic input three parameters, LCD monitor, multioperator, aludata, 220V',
                price: 1700000,
                available: false,
                image: `machine.png`,
                logo: `logo-comp.png`
            },
            {
                title: 'Sivik Master DTC-450',
                text: 'Automatic input three parameters, LCD monitor, multioperator, aludata, 220V',
                price: 2500000,
                available: false,
                image: `machine4.png`,
                logo: `logo-comp.png`
            },
            {
                title: 'Sivik Master DTC-450',
                text: 'Automatic input three parameters, LCD monitor, multioperator, aludata, 220V',
                price: 2450000,
                available: false,
                image: `machine.png`,
                logo: `logo-comp.png`
            },
            {
                title: 'Sivik Master DTC-450',
                text: 'Automatic input three parameters, LCD monitor, multioperator, aludata, 220V',
                price: 2450000,
                available: false,
                image: `machine2.png`,
                logo: `logo-comp.png`
            },
            {
                title: 'Sivik Master DTC-450',
                text: 'Automatic input three parameters, LCD monitor, multioperator, aludata, 220V',
                price: 2450000,
                available: false,
                image: `machine2.png`,
                logo: `logo-comp.png`
            },
        ]
    },
    computed: {
        goodsFilter: function(val) {
            return this.goodsItems.filter(val => val.price > this.price);
        },
        goodsSortUp: function(val) {
            return this.goodsItems.sort(function(a, b) {
                return val - b
            })
        }
    },
    mounted() {
        console.log(this.goodsItems);
    },
});