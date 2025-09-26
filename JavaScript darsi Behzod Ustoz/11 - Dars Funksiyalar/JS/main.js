'use strict';

// let userName;

// userName = "O'lmas";
// userName = 'Ismatov';
// console.log('Hello ' + userName);

// userName = "O'lmas";
// console.log('Hello ' + userName);

/** Funksiyalar
 * 1. Function declaration // An'anviy funksiyalar
 * 2. Function expression // kalta o'zgaruvchiga yoziladigan funksiyalar
 * 3. Arrow function // strelkalik funksiyalar
 * 4. Function constructor
 * 5. Method
 * 6. Callback
 * 7. Recursion
 * 8. IIFE
 * 9. Promise
 * 10. Generator
 * 11. Proxy
 * 12. Reflect
 * 13. Symbol
 * 15. Iterator
 * 17. Async
 * 18. Async generator
 * 19. Async iterator
 * 20. Async function
 * 21. Async generator function
 * 22. Async iterable
 * 23. Async generator iterable
 * 24. Async iterable generator
 * 25. Async generator iterable
 * 26. Async iterable generator
 */

// 1. Function declaration
/*

function nameOfFunction(parametrlar) {
		Funksiyani amallari
}

*/

// function myFunc() {
// 	console.log('Hello world');
// }
// myFunc();

// parametr/argument bilan amallar
// function myFunc(arg = 'Hello') {
// 	console.log(arg);
// }
// myFunc();

// function myFunc(arg = 'Guest') {
// 	console.log('Hello ' + arg);
// }

// // Funktsiyani chaqirishlar:
// myFunc("O'ktam Narziyev"); // Hello O'ktam Narziyev
// myFunc("O'lmas Ismatov"); // Hello O'lmas Ismatov
// myFunc('Muhammadali Muhammadaliyev'); // Hello Muhammadali Muhammadaliyev
// myFunc(); // Hello Guest (default qiymat)

// function sayHello(firsname, lastname) {
// 	let str; // Salomlashish matni uchun o'zgaruvchi
// 	str = 'Hello ' + firsname + ' ' + lastname; // Matnni yasash
// 	console.log(str); // Natijani chiqarish
// }

// // Funktsiyani turli ismlar bilan chaqirish:
// sayHello("O'ktam", 'Narziyev'); // Hello O'ktam Narziyev
// sayHello("O'lmas", 'Ismatov'); // Hello O'lmas Ismatov
// sayHello('Muhammadali', 'Muhammadaliyev'); // Hello Muhammadali Muhammadaliyev

// function myFunc() {}

// console.log('Malumot turi: ' + typeof myFunc); // "Malumot turi: function"

// myFunc nomli funksiya e'lon qilinmoqda
// function myFunc() {
// 	// arguments - funksiyaga berilgan barcha argumentlarni o'zida saqlovchi maxsus ob'ekt
// 	console.log(arguments); // arguments ob'ektini konsolga chiqarish
// }

// // Funksiyani 3 ta argument bilan chaqirish
// myFunc(123, 'Hello', true);

// function getSumm() {
// 	let ress = 0; // Yig'indi uchun o'zgaruvchi

// 	// arguments ob'ekti orqali aylanish
// 	for (let value of arguments) {
// 		ress += value; // Har bir qiymatni yig'indiga qo'shish
// 	}

// 	console.log(ress); // Natijani chiqarish
// }

// // Funksiyani turli sonlar bilan chaqirish
// getSumm(10, 13, 17, 25); // 65 chiqadi

// 1 - Misol

// Ko'rinish tartibi
// let x = 10; // Global o'zgaruvchi

// function myFunc() {
// 	x = 20; // Global x ni qiymatini o'zgartirish
// 	console.log(x); // 20 (funksiya ichidagi qiymat)
// }

// myFunc(); // Funksiyani chaqirish
// console.log(x); // 20 (global o'zgaruvchi o'zgartiriladi)

// 2 - Misol

// function myFunc() {
// 	let x = 10; // Funksiya ichida local o'zgaruvchi
// }

// myFunc(); // Funksiyani chaqirish
// x = 13; // Global o'zgaruvchi yaratish
// console.log(x); // 13 chiqadi (lekin bu yaxshi amaliyot emas)

// 3 - Misol
// function myFunc(value) {
// 	// Parametr sifatida 'value' qabul qilinadi
// 	value = 20; // Parametr qiymatini o'zgartirish
// }

// myFunc(); // Funksiyani argument bermasdan chaqirish
// console.log(value); // 'value' o'zgaruvchisini global miqiyda ishlatishga urinish va javobi (value is not defined) chiqadi

// return
// function sayHello(name) {
// 	let str; // str o'zgaruvchisi e'lon qilinadi
// 	str = 'Hello ' + name; // Matn yasash
// 	return str; // Natijani qaytarish
// }

// // 1-chaqiruv (natija ishlatilmaydi)
// sayHello("O'lmas"); // Funksiya "Hello O'lmas" qaytaradi, lekin hech narsa qilmaydi

// // 2-chaqiruv (natija o'zgaruvchiga saqlanadi)
// let natija = sayHello("O'lmas"); // Funksiya natijasi saqlanadi
// console.log(natija); // "Hello O'lmas" chiqadi

// getSumm nomli funksiya e'lon qilinmoqda
// function getSumm() {
// 	// ress - yig'indi uchun o'zgaruvchi, boshlang'ich qiymati 0
// 	let ress = 0;

// 	// arguments - funksiyaga berilgan barcha argumentlarni o'zida saqlovchi maxsus ob'ekt
// 	// for..of tsikli yordamida har bir argumentni aylanib chiqamiz
// 	for (let value of arguments) {
// 		// Har bir qiymatni yig'indiga qo'shamiz
// 		ress += value;
// 	}

// 	// Hisoblangan yig'indini funksiya natijasi sifatida qaytaramiz
// 	return ress;
// }

// // Funksiyani 4 ta argument bilan chaqirib, natijani natija o'zgaruvchisiga saqlaymiz
// let natija = getSumm(10, 13, 17, 25);

// // Hisoblangan yig'indini konsolga chiqaramiz
// console.log(natija); // 65 chiqadi

// function aboutNumber(num) {
// 	if (num > 0) {
// 		return 'Son musbat'; // Agar son 0 dan katta bo'lsa
// 	} else if (num < 0) {
// 		return 'Son manfiy'; // Agar son 0 dan kichik bo'lsa
// 	} else if (num == 0) {
// 		return 'Son nol'; // Agar son 0 ga teng bo'lsa
// 	} else {
// 		return 'error'; // Boshqa hollar uchun (masalan, son emas)
// 	}
// }

// // Funksiyani turli qiymatlar bilan chaqirish
// let natija = aboutNumber(-12); // "Son manfiy"
// natija = aboutNumber(0); // "Son nol"
// natija = aboutNumber(12); // "Son musbat"

// // Oxirgi natijani ko'rsatish
// console.log(natija); // "Son musbat" chiqadi
