/*
Объявить две переменные a и b и задать им целочисленные произвольные начальные значения.
Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.
*/
"use strict"
let a = parseInt(prompt("Число a:"));
let b = parseInt(prompt("Число b:"));

if (a >= 0 && b >= 0) {
    let result = a - b;
    alert(result)
} else if (a < 0 && b < 0) {
    let result = a * b;
    alert(result);
} else {
    let result = a + b;
    alert(result);
}