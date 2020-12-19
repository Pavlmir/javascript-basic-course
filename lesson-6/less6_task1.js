/* Продолжаем реализовывать модуль корзины:
Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы;
Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида.
*/
"use strict";

class Product {

    constructor(name, price, unit) {
        this.name = name;
        this.price = price;
        this.unit = unit;
        this.count = 0;
    }

    sayHi() {
        alert(this.name);
    }

}


class Bascket {

    constructor() {
        this.arrBascket = [];
    }

    countBasketPrice() {
        let reducer = (sum, current) => sum + current.price * current.count;
        let result = this.arrBascket.reduce(reducer, 0);
        return result;
    }

    addProduct(item, count, InBasket) {
        let addCount = count - item.count;
        item.count = item.count + addCount;
        if (InBasket === false) {
            this.arrBascket.push(item);
        }
        if (item.count === 0) {
            this.arrBascket.pop(item);
        }
    }

    searchProduct(name) {
        let result = "";
        this.arrBascket.forEach(el => {
            if (el.name === name) {
                result = el;
            }
        });
        return result;
    }

    getInfoProduct() {
        let resCount = 0;
        let resName = ' ';
        this.arrBascket.forEach(el => {
            resCount += el.count;
            resName += el.name + ' ';
        });
        return {
            resCount: resCount,
            resName: resName
        };
    }

}

let bascket = new Bascket();
let product_btn_change = document.querySelectorAll('.product-btn-change');
function get_count(value, name) {
    let product_count = document.querySelector('.' + name);
    if (value === '-') {
        if (Number(product_count.value) > 0) {
            product_count.value = Number(product_count.value) - 1;
        }
    }
    else {
        product_count.value = Number(product_count.value) + 1;
    }
};
product_btn_change.forEach(element => element.addEventListener('click', (e) => get_count(element.value, element.name)));

let cart = document.querySelector('#cart');
let catalog = document.querySelector('#catalog');
let product_btn_buy = document.querySelectorAll('.product-btn-buy');
function add_cart(value, name) {
    let product_name = document.querySelector('#' + name + ' .name');
    let product_price = document.querySelector('#' + name + ' .price');
    let product_unit = document.querySelector('#' + name + ' .unit');
    let product_count = document.querySelector('.' + name);
    let InBasket = true;
    let product = bascket.searchProduct(product_name.innerHTML);
    if (product === "") {
        product = new Product(product_name.innerHTML, Number(product_price.innerHTML), product_unit.innerHTML);
        InBasket = false;
    };
    bascket.addProduct(product, Number(product_count.value), InBasket);
    let res = bascket.getInfoProduct();
    let resCount = res.resCount;
    let resName = res.resName;
    let resSum = bascket.countBasketPrice();
    if (resSum === 0 && resCount === 0) {
        cart.textContent = "Корзина пуста";
        catalog.textContent = "Корзина с товарами: - ";
    }
    else {
        cart.textContent = `В корзине: ${resCount} товаров на сумму ${resSum} рублей`;
    }

    catalog.textContent = `Корзина с товарами: ${resName} `;
};
product_btn_buy.forEach(element => element.addEventListener('click', (e) => add_cart(element.value, element.name)));