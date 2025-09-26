'use strict';

// // UYGA VAZIFA

// //---------------------------------------------
// // 1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова будут в верхнем регистре. Использовать for или while.
// //---------------------------------------------

// let str = 'i am in the easycode';
// let words = str.split(' '); // Matnni so'zlarini massivga o'tkazamiz

// for (let i = 0; i < words.length; i++) {
// 	// Har bir so'zning bosh harfini katta harfga o'zgartiramiz
// 	words[i] = words[i][0].toUpperCase() + words[i].slice(1);
// 	// har birta space dan keyin birinchi kelayotgan harfni katta harfga o'zgartirildi
// }

// let natija = words.join(' '); // split orqali olgan massivni qaytadan stringga o'tkazib natijaga qaytaradi
// console.log(natija); // "I Am In The Easycode"

// // ---------------------------------------
// // 2. Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).
// // ---------------------------------------

// str = 'tseb eht ma i'; // Boshlang'ich matn
// natija = ''; // Natija uchun bo'sh string

// // Matn oxiridan boshiga qarab for tsikli
// for (let i = str.length - 1; i >= 0; i--) {
// 	natija += str[i]; // Har bir harfni natijaga qo'shish
// }

// // // Faqatgina birinchi harfni katta qilamiz
// // natija = natija[0].toUpperCase() + natija.slice(1);

// console.log(natija); // "I am the best"

// // ---------------------------------------
// // 3. Факториал числа - произведение всех натуральных чисел от 1 до nвключительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.
// // ---------------------------------------

// let n = 10; // Faktorialni hisoblash uchun son
// let faktorialSon = 1; // Faktorial uchun o'zgaruvchi

// for (let i = 1; i <= n; i++) {
// 	faktorialSon *= i; // Har bir sonni faktorialga novbatma novbat ko'paytirish
// 	// console.log(faktorialSon);
// }

// console.log(faktorialSon); // 3628800

// // ---------------------------------------
// // 4. На основе строки “JavaScript is a pretty good language” сделать новую строку,где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.
// // ---------------------------------------

// str = 'JavaScript is a pretty good language';
// natija = str.split(' ');

// for (let i = 0; i < natija.length; i++) {
// 	// Har bir so'zning birinchi harfini katta qilamiz
// 	natija[i] = natija[i][0].toUpperCase() + natija[i].slice(1);
// }

// // Massivni stringga aylantiramiz (bo'shliqlarsiz)
// let camelCaseNatija = natija.join('');
// console.log(camelCaseNatija); // "JavaScriptIsAPrettyGoodLanguage"

// // ---------------------------------------
// //5. Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.
// // ---------------------------------------

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// for (let number of numbers) {
// 	if (number % 2 !== 0) {
// 		console.log(number);
// 	}
// } // bu % zi 0 ga teng bo'lmagan sonlarni chiqarib beradi

// for (let number of numbers) {
// 	if (number % 2 === 0) {
// 		console.log(number);
// 	}
// } // bu % zi 0 ga teng bo'lgan sonlarni chiqarib beradi

// // ---------------------------------------
// /*
// 	 6. Дан объект:
// let list = {
//      name: ‘denis’,
//      work: ‘easycode’,
//      age: 29
// }
// Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем
// регистре.Использовать for in.
// 	 */
// // ---------------------------------------

// let list = {
// 	Name: 'denis', // Ism
// 	Work: 'easycode', // Ish joyi
// 	Age: 29, // Yosh (sonli qiymat)
// };

// // Ob'ektni for-in tsikli yordamida aylanib chiqamiz
// for (let key in list) {
// 	// Agar qiymat matn turida bo'lsa
// 	if (typeof list[key] === 'string') {
// 		// Matnni katta harflarga o'zgartirib qayta yozamiz
// 		list[key] = list[key].toUpperCase();
// 	} else {
// 		// Agar qiymat matn turida bo'lmasa
// 		console.log(`${key} maydoni matn emas, turi: ${typeof list[key]},  qiymati: ${list[key]}`);
// 	}
// }

// console.log(list); // { name: 'DENIS', work: 'EASYCODE', age: 29 } 29 sonligi qiymat matn turida emas
