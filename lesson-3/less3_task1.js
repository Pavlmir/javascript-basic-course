// С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
"use strict";
let i = 0;
let arr = []
while (i <= 100) {
    if (i > 1) {
        is_simple = true;
        let j = 0;
        while (j < arr.length) {
            if (i % arr[j] === 0) {
                is_simple = false;
                break;
            }
            j++;
        }
        if (is_simple) {
            console.log(i);
            arr.push(i)
        }
    }
    i++;
}