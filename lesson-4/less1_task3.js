/* Подумать над глобальными сущностями. К примеру, сущность «Продукт» в интернет-магазине актуальна не только для корзины, но и для каталога.
Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру для различных модулей сайта, но в разных местах давал возможность вызывать разные методы.
*/
"use strict";

function productCreator(name, price) {
    let product = {};
    product.name = name;
    product.price = price;
    product.priceList = function priceList() {
        console.log(name + " - цена " + price + " руб.")
    }
    return product;
}

let product = productCreator("Круасан", 100);
product.priceList()