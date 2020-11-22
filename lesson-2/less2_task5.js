// Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
"use strict"

function getSum(a, b) {
    let result = a + b;
    return result;
}

function getSubtract(a, b) {
    let result = a - b;
    return result;
}

function getMultiplication(a, b) {
    let result = a * b;
    return result;
}

function getDivision(a, b) {
    let result = a / b;
    if (isFinite(result)) {
        return result;
    } else {
        alert('Деление на ноль. Второе число не должно быть равно нулю!')
    }
}