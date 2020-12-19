/*
Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему
желанию. Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки.
Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.
*/
"use strict";

function createChessBoard() {
    let cellLimit = 8;
    let rowLimit = 8;
    let colorOdd = 'ch-black';
    let colorEven = 'ch-white';
    let colorTemp = '';
    let arr = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

    // Присваиваем имена столбцов
    let chessRow = document.createElement('div');
    chessRow.classList.add('chess-container');
    for (let i = 0; i <= arr.length - 1; i++) {
        let item = document.createElement('div');
        chessRow.appendChild(item);
        item.innerHTML = arr[i];
        item.classList.add('chess-box-header-col');

    };
    document.body.append(chessRow);

    for (let i = 1; i <= rowLimit; i++) {
        let chessRow = document.createElement('div');
        chessRow.classList.add('chess-container');

        // Присваиваем номера строк
        let item = document.createElement('div');
        chessRow.appendChild(item);
        item.innerHTML = i;
        item.classList.add('chess-box-header-row');

        for (let j = 1; j <= cellLimit; j++) {
            let item = document.createElement('div');
            item.id = String(arr[i]) + String(j);
            chessRow.appendChild(item);

            item.classList.add('chess-box');

            if (j % 2) {
                item.classList.add(colorOdd);
            }
            else {
                item.classList.add(colorEven);
            };

        };
        colorTemp = colorOdd;
        colorOdd = colorEven;
        colorEven = colorTemp;

        document.body.append(chessRow);
    };
};

createChessBoard();