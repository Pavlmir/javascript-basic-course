"use strict";

// Retrieve
let objBasket = JSON.parse(window.localStorage.basket);
const basketDivLink = document.querySelector('.contain-div');
basketDivLink.innerHTML = htmlGenerateBasket(objBasket);

function htmlGenerateBasket(objBasket) {
	let result = [];
	let arrBascket = objBasket.arrBascket;
	// проверяет, есть ли товары в корзине
	if (arrBascket.length > 0) {
		arrBascket.forEach(items => result.push(
			`<div class='item-wrap' data-name='${items.name}'>
				<div class='item-desc'>
					${items.name}
				</div>
				<div class='item-stats'>
					<div class='item-plus''>
						<img src="images/plus.png" />
					</div>
					<div class='item-count' data-name='${items.name}'>
						${items.count}
					</div>
					<div class='item-minus''>
						<img src="images/minus.png" />
					</div>
					<div class='items-sum' data-name='${items.name}'>
						${items.price} руб.
					</div>
				</div>
			</div>`));
		// если корзина пустая:
	} else {
		result.push(
			`<div class='item-wrap'>
				<div class='item-desc'>
					<p>Корзина пустая</p>
				</div>
				<div class='item-stats'>
				</div>
			</div>`);
	}
	const checkBasket = document.querySelector('#checkBasket');
	// check if basket exists
	if (!checkBasket) {
		// Footer here
		let reducer = (sum, current) => sum + current.price * current.count;
		let resSum = arrBascket.reduce(reducer, 0);
		result.push(
			`<div class='basket-footer'>
				<div id="checkBasket" class='total-sum'>
				${resSum} руб.
				</div>
				<div class='next-button'>
					<p>Далее</p>
				</div>
			</div>`)
	}

	return result.join('');
};

const nextLink = document.querySelectorAll('.next');

// Анимация стрелок
nextLink.forEach((element) => {
	// отображение стрелочки
	let arrLink = element.querySelector('.arrow');
	arrLink.addEventListener('click', (e) => {
		arrLink.classList.toggle('up');
		arrLink.classList.toggle('down');

		// отображение панели
		let hideLink = element.querySelector(".show");
		hideLink.classList.toggle('hidden');
	});
});

// Кнопка далее
nextLink.forEach((element, index) => {
	let buttonLink = element.querySelector(".next-button"); // ссылка на кнопку
	buttonLink.addEventListener('click', (e) => {
		// логика последней кнопки
		if (element === nextLink[nextLink.length - 1]) {
		}
		else {
			let arrLinkParent = element.querySelector(".arrow"); // ссылка на cтрелку
			let arrLinkParentSibling = nextLink[index + 1].querySelector(".arrow"); // ссылка на следующую стрелку
			let panelShow = nextLink[index + 1].querySelector('.hidden'); // панель, которую нужно открыть - следующая
			let panelHide = element.querySelector('.show'); // панель, которую нужно спрятать - текущая

			// проверяем панель, которую должны показать после нажатия кнопки, если она закрыта - то открываем
			if (panelShow != null && panelShow.classList.contains('hidden')) {
				// отображение стрелочки родителя
				arrLinkParent.classList.toggle('up');
				arrLinkParent.classList.toggle('down');
				// отображение стрелочки след. брата родителя
				arrLinkParentSibling.classList.toggle('up');
				arrLinkParentSibling.classList.toggle('down');
				// отображение панели родителя
				panelHide.classList.toggle('hidden');
				// отображение панели след. брата родителя
				panelShow.classList.toggle('hidden');

			} else {
				// отображение стрелочки родителя
				arrLinkParent.classList.toggle('up');
				arrLinkParent.classList.toggle('down');
				// прячем только родительскую панель
				if (panelHide != null) {
					panelHide.classList.toggle('hidden');
				}

			}
		}
	});
});


// Кнопки увеличения и вычитания товара
const basketDivLinkAll = document.querySelectorAll('.item-wrap');
basketDivLinkAll.forEach((element) => {
	let item_plus = element.querySelector('.item-plus');
	let item_count = element.querySelector('.item-count');
	let item_minus = element.querySelector('.item-minus');
	item_plus.addEventListener('click', (e) => {
		item_count.textContent = Number(item_count.textContent) + 1;
	});
	item_minus.addEventListener('click', (e) => {
		item_count.textContent = Number(item_count.textContent) - 1;
	});
});
