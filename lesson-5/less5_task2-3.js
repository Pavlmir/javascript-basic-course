/*
Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре.
Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
a. Пустая корзина должна выводить строку «Корзина пуста»;
b. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
*/
"use strict";

function productCreator(name, price) {
    let product = {};
    product.name = name;
    product.price = price;
    product.count = 0;
    return product;
}

let myBascket = {
    bascket: [],
    countBasketPrice() {
        let reducer = (sum, current) => sum + current.price * current.count;
        let result = this.bascket.reduce(reducer, 0);
        return result;
    },
    addProduct(item, count) {
        item.count = count;
        this.bascket.push(item);
    }
};

myBascket.addProduct(productCreator("Круасан", 100), 1);
myBascket.addProduct(productCreator("Пончик", 200), 2);
myBascket.addProduct(productCreator("Булочка", 300), 1);
myBascket.addProduct(productCreator("Крендель", 300), 5);

function fillingCart(myCart) {
    let cart = document.getElementById('cart');
    let catalog = document.getElementById('catalog');
    let resCount = 0;
    let resName = ' ';

    let resSum = myCart.countBasketPrice();
    myCart.bascket.forEach(el => resCount += el.count);
    myCart.bascket.forEach(el => resName += el.name + ' ');
    console.log(resCount)
    if (resSum === 0 && resCount === 0) {
        cart.textContent = "Корзина пуста"
    }
    cart.textContent = `В корзине: ${resCount} товаров на сумму ${resSum} рублей`
    catalog.textContent = `Каталог: ${resName} `

}

fillingCart(myBascket);