1. Продумать, где можно применить замыкания для практикума из седьмого урока.

JavaScript не имеет встроенной возможности объявлять частные(private) методы, но это можно эмулировать с помощью замыкания.
Частные методы полезны не только тем, что ограничивают доступ к коду, это также мощное средство глобальной организации пространства имен,
    позволяющее не засорять публичный интерфейс вашего кода внутренними методами классов.

function refocus(direction) {
    return function () {
        let item_count = document.querySelector('.item-count');
        if (direction == "+") {
            item_count.textContent = Number(item_count.textContent) + 1;
        }
        else {
            item_count.textContent = Number(item_count.textContent) - 1;
        };
    };
};

let item_plus = refocus("+");
let item_minus = refocus("-");

document.querySelector('.item-plus').onclick = item_plus;
document.querySelector('.item-minus').onclick = item_minus;

2. Не выполняя кода, ответить, что выведет браузер и почему
/* a. ----------------*/
if (!("a" in window)) {
    var a = 1; // var a - продекларирует переменную во время работы интерпретатора, то есть "a" in window = true
}
alert(a); // undefined, потому что по условию if переменная не будет объявлена

/* b. ----------------*/
var b = function a(x) {
    x && a(--x);
};
alert(a); // ошибка - a не продекларирована.

/* c. ----------------*/
function a(x) {
    return x * 2;
}
var a;
alert(a); // функцию a

/* d. ----------------*/
function b(x, y, a) {
    arguments[2] = 10;
    alert(a);
}
b(1, 2, 3); // всплывающее окно со значением 10. «arguments» - это объект типа Array, доступный внутри функций, который содержит значения аргументов, переданных этой функции.

/* e. ----------------*/
function a() {
    alert(this);
}
a.call(null); // [object Window] - null является свойством Window, который передает this