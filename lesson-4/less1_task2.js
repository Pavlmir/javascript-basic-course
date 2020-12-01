/* Продолжить работу с интернет-магазином:
a) В прошлом домашнем задании вы реализовали корзину на базе массивов.
b) Какими объектами можно заменить их элементы?
c) Реализуйте такие объекты. Перенести функционал подсчета корзины на объектно-ориентированную базу.
*/
"use strict";

function productCreator(name, price) {
    let product = {};
    product.name = name;
    product.price = price;
    return product;
}

let myBascket = {
    bascket: [],
    countBasketPrice() {
        let reducer = (sum, current) => sum + current.price;
        let result = this.bascket.reduce(reducer, 0);
        return result;
    },
    addProduct(item) {
        this.bascket.push(item)
    }
};

myBascket.addProduct(productCreator("Круасан", 100));
myBascket.addProduct(productCreator("Пончик", 200));
myBascket.addProduct(productCreator("Булочка", 300));
myBascket.addProduct(productCreator("Крендель", 300));
console.log(myBascket.countBasketPrice());

