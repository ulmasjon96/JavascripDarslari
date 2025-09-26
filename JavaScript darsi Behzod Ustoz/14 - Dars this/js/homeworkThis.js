'use strict';

//--------------------------------------------
// 1. Создать объект, который описывает ширину и высоту прямоугольника, а также метод который может посчитать площадь фигуры: const rectangle = {width:..., height:..., getSquare:...};
//--------------------------------------------

const rectangle = {
	width: 10,
	height: 20,
	getSquare() {
		return this.width * this.height;
	},
};

console.log(rectangle.getSquare());

//--------------------------------------------
// 2. Создать объект, у которого будет цена товара и его скидка, а также два метода: для получения цены и для расчета цены с учетом скидки:
// const price = {
//     price: 10,
//     discount: '15%',
// ... };
// price.getPrice(); // 10
// price.getPriceWithDiscount(); // 8.5
//--------------------------------------------

// const price = {
// 	price: 10,
// 	discount: '15%',
// 	getPrice() {
// 		return this.price;
// 	},
// 	getDiscount: function () {
// 		const discountValue = parseFloat(this.discount) / 100;
// 		return this.price * (1 - discountValue);
// 	},
// };

// console.log(price.getPrice());
// console.log(price.getDiscount());

const product = {
	price: 10,
	discount: '15%', // To'g'ri format

	getPrice() {
		return this.price;
	},

	getDiscountedPrice() {
		const discountValue = parseFloat(this.discount) / 100; // '15%' -> 0.15
		return this.price * (1 - discountValue); // 10 * 0.85 = 8.5
	},
};

console.log(product.getPrice()); // 10
console.log(product.getDiscountedPrice()); // 8.5
