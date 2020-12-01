/*
Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект,
в котором в соответствующих свойствах описаны единицы, десятки и сотни.
Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/
"use strict";

function convertingNumberToObject(number) {
    if (number > 999) {
        let obj = Object.create(null);
        return `Вы ввели неверные параметры ${JSON.stringify(obj)}`;
    } else {
        let obj = {
            "единицы": number % 10,
            "десятки": Math.floor(number % 100 / 10),
            "сотни": Math.floor(number / 100),
        };
        return obj;
    };
}

let n = prompt("Введите число от 0 до 999:", 0);
console.log(convertingNumberToObject(n));
document.getElementById("lesson1").innerHTML = JSON.stringify(convertingNumberToObject(n));