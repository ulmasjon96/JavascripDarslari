'use strict';
// JavaScript qat’iy rejimda (strict mode) ishlaydi.
// Bu rejimda:
// - E’lon qilinmagan o‘zgaruvchiga qiymat berish xato hisoblanadi.
// - "this" global scope ichida ishlatilsa, `undefined` bo‘ladi (normal rejimda esa `window`).
// - Ba’zi xatoliklarni sukutda o‘tkazib yubormasdan to‘g‘ridan-to‘g‘ri xato chiqaradi.

// function myfanc() {
// 	// Oddiy funksiya e’lon qilindi, nomi `myfanc`.

// 	console.log(this);
// 	// Funksiya ichida `this` qiymati konsolga chiqariladi.
// 	// Strict mode yoqilgani uchun:
// 	// 1) Agar funksiyani oddiy `myfanc();` qilib chaqirsangiz → this = undefined.
// 	// 2) Agar obyekt ichida chaqirsangiz (obj.myfanc();) → this = o‘sha obyekt.
// 	// 3) Agar `new myfanc();` desangiz → this = yangi yaratilgan obyekt.
// }

// // Funksiyani oddiy usulda chaqiramiz:
// myfanc();
// // Natija: konsolda `undefined` chiqadi, chunki strict mode ishlayapti.

// // window orqali chaqirish:
// window.myfanc();
// // Natija: window (chunki endi funksiya obyekt methodi sifatida chaqirildi).

// let promt1 = {
// 	// Obyekt yaratilyapti, nomi promt1
// 	// Unda 3 ta property bor: name, prise, va myfanc (funksiya)

// 	name: 'intel', // string qiymat
// 	prise: 130, // raqam qiymat

// 	myfanc: function () {
// 		// Bu obyekt ichidagi method (funksiya).
// 		// Agar uni promt1.myfanc() qilib chaqirsak, "this" obyektning o‘zini ko‘rsatadi.

// 		console.log(this);
// 		// Bu yerda this obyektning o‘zini bildiradi, ya’ni promt1.
// 		// Shuning uchun konsolda promt1 obyekti chiqadi.
// 	},
// };

// // Obyektning o‘zini chiqarish
// console.log(promt1);
// // Natija: { name: "intel", prise: 130, myfanc: ƒ }
// // Konsolda butun obyekt ko‘rinadi.

// // Faqat obyekt ichidagi funksiyani chiqarish
// console.log(promt1.myfanc);
// // Natija: ƒ () { console.log(this); }
// // Ya’ni faqat funksiya kodini ko‘rsatadi, lekin uni ishlatmaydi.

// // Funksiyani obyekt ichidan chaqirish
// promt1.myfanc();
// // Natija: { name: "intel", prise: 130, myfanc: ƒ }
// // Bu safar `this` obyektni bildiradi, shuning uchun obyektning o‘zi chiqadi.
