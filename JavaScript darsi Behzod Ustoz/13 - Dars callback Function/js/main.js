'use strict';

// /**
//  * func1 - func2 ni chaqiruvchi asosiy funksiya
//  * Bu funksiya hech qanday parametr qabul qilmaydi va qiymat qaytarmaydi
//  */
// function func1() {
// 	// func2 ni chaqiramiz
// 	func2();
// }

// /**
//  * func2 - Konsolga xabar chiqaruvchi yordamchi funksiya
//  * Bu funksiya ham parametr qabul qilmaydi va qiymat qaytarmaydi
//  */
// function func2() {
// 	// Konsolga "hello" deb yozuv chiqaramiz
// 	console.log('hello');
// }

// // Dasturni ishga tushirish uchun func1 ni chaqiramiz
// func1();

// 2 - Misol
/**
 * func1 - berilgan stringni callback funksiyaga uzatadi
 * @param {string} str - uzatiladigan matn
 * @param {function} cb - callback funksiya
 */
function func1(str, cb) {
	// Callback funksiyasini chaqirib, unga str parametrini uzatamiz
	cb(str);
}

/**
 * func2 - berilgan matnni konsolga chiqaradi
 * @param {string} str - chiqariladigan matn
 */
function func2(str) {
	// "Hello " va str ni birlashtirib konsolga chiqaramiz
	console.log('Hello ' + str);
}

// func1 ni chaqirib, unga 'John' va func2 callbackini uzatamiz
func1('John', func2);
