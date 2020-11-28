/*
С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/
"use strict";
function countBasketPrice(arr) {
    let totalPrise = 0;
    for (let i = 0; i < arr.length; i++) {
        totalPrise += arr[i].price;
    }
    return totalPrise;
}

let cart = [
    {
        product_name: "Круасан",
        price: 100,
    },
    {
        product_name: "Пончик",
        price: 200,
    },
    {
        product_name: "Булочка",
        price: 300,
    },
    {
        product_name: "Крендель",
        price: 300,
    }
]
let totalPrice = countBasketPrice(cart);
console.log(totalPrice); 