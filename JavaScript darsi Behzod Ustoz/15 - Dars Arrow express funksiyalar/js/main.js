'use strict';

/**Function's
 * declaration
 * expression
 * arrow
 * function constructor
 * method
 * callback
 * recursion
 * IIFE
 * Promise
 * Generator
 * Proxy
 * Reflect
 * Symbol
 * Iterator
 * Async
 * Async generator
 * Async iterator
 * Async function
 */

// // Declaration Function yaratilguncha functionga murojaad qilish mumkin
// console.log(myFanc('John'));

// function myFanc(str) {
// 	return 'Hello' + str;
// }

// console.log(myFanc('Potter'))

// // decloration Function 1 xil idintifikatorli e'lon qilishga ruxsat beradi bu esa koddagi xatolikka olib keladi
// function myFunc(num) {
// 	return num * 2;
// }

// console.log(myFanc(5));

/* -- Expression Function -- */

// console.log(myFunc('Harry '))  // Function yozilgan uzgaruvchiga u e'lon qilingunicha functionga murojaad qilish mumkin emas!

// const myFunc = function (name) {
// return 'Hello ' + name;
// };
// console.log(myFunc('John'));

// // expression Functionda this mavjud
// const getPrice = function (currency) {
// 	console.log(this.name + currency);
// };

// let prod1 = {
// 	name: 'intel',
// 	price: 130,
// 	getPrice,
// };

// prod1.getPrice('USD');

// expression Functionga argumentlar mavjud!

// const getSum = function () {
// 	let ress = 0;
// 	for (let value of arguments) {
// 		ress += value;
// 	}
// 	return ress;
// };

// console.log(getSum(1, 2, 3, 4, 5));

/* -- Arrow Function -- */
// const myFunc = str => {
// 	return 'Hello ' + str;
// };

// console.log(myFunc('John'));

// strelka funksiyada return vazifasiniyam bajaradi
// const myFunc = str => {
// 	'Hello ' + str;
// };

// console.log(myFunc('John'));

// const sayHello = (firsName, lastName, age) => {
// 	return `Hello my name is ${firsName} ${lastName} and I'm ${age} years old`;
// };

// console.log(sayHello("O'ktam", 'Narziyev', 29));

// // Arrow Functionda strelkadan keyin return va qaussiz ishlatish mumkin bu xatolik bermaydi lekin adashib qolish mumkin
// const sayHello = (firsName, lastName, age) => `Hello my name is ${firsName} ${lastName} and I'm ${age} years old`;

// console.log(sayHello("O'ktam", 'Narziyev', 29));
