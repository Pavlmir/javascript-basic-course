/*
Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в градусах по Фаренгейту.
Подсказка: расчёт идёт по формуле: Tf = (9 / 5) * Tc + 32, где Tf – температура по Фаренгейту, Tc – температура по Цельсию
*/
"use strict";
let tc = prompt("Введите температуру в градусах по Цельсию", "");
let tf = (9 / 5) * tc + 32;
if (tc == "") {
    alert("Вы не ввели температуру");
} else if (tc == null) {
    alert("Вы нажали на отмену");
} else {
    alert(`Температура в градусах по Фаренгейту = ${tf}`);
}
