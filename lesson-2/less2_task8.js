// С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.
"use strict"

function power(val, pow) {
    if (pow === 1) {
        return val;
    }
    let result = val * power(val, pow - 1);
    return result;
}

let val = parseInt(prompt("Введите число", ''));
let pow = parseInt(prompt("Введите степень", ''));
alert(power(val, pow));