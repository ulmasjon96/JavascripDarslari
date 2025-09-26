'use strict';

// let index = 0;

// console.log('hello');
// index += 1;
// console.log('hello');
// index += 1;
// console.log('hello');
// index += 1;
// console.log('hello');
// index += 1;
// console.log('hello');
// index += 1;

// console.log(index);

/** Sikllar(Цыкл) turlari
 * 1. while
 * 2. do while
 * 3. for
 * 4. for of
 * 5. for in
 */

// let index = 0; // 0. schotchik sifatida index yaratilganini ko'ryapti index = 0

// while (index < 5) {
// 	// 1. index 5 dan kichik bo'lsa
// 	console.log('hello'); // 2. hello chiqariladi
// 	index++; // 3. indexga 1 qo'shiladi
// } // 4. index 5 gacha teng bo'lsa while tsikli tugaydi

// while (index <= 5) {
// 	console.log(index);
// 	index++;
// } // index 0 dan 5 gacha teng bo'lsa while tsikli tugaydi

// index = 5;

// while (index >= 0) {
// 	console.log(index);
// 	index--;
// } // index 5 dan 0 gacha teng bo'lsa while tsikli tugaydi

// while (index <= 5) {
// 	console.log(index);
// 	index++;
// }

// console.log(index);

// let str = 'Hello world i am web developer',
// 	arr = ['Hello', 'world', 'i', 'am', 'web', 'developer'];

// console.log(str[0]);
// console.log(str[1]);
// console.log(str[2]);
// console.log(str[3]);
// console.log(str[4]);
// str.length - 1;

// let index = 0;
// str = 'Hello world i am web developer';
// arr = ['Hello', 'world', 'i', 'am', 'web', 'developer'];

// while (index < str.length) {
// 	console.log(str[index]);
// 	index++;
// } // str ni elementlarini chiqarib beradi

// index = str.length - 1;
// while (index >= 0) {
// 	console.log(str[index]);
// 	index--;
// } // str ni elementlarini teskari chiqarib beradi

// while (index < arr.length) {
// 	console.log(arr[index]);
// 	index++;
// } // arr ni elementlarini so'zlarini chiqarib beradi

// index = arr.length - 1;
// while (index >= 0) {
// 	console.log(arr[index]);
// 	index--;
// } // arr ni elementlarini teskari so'zlarini chiqarib beradi

// // Sonlar massivi
// let numbers = [13, 7, 20, 15, 6];

// // Yig'indi uchun o'zgaruvchi, boshlang'ich qiymati 0
// let ress = 0;

// // Massiv indeksini kuzatish uchun o'zgaruvchi
// index = 0;

// // While tsikli - massiv oxirigacha ishlaydi
// while (index < numbers.length) {
// 	// Joriy massiv elementini yig'indiga qo'shish
// 	ress += numbers[index];

// 	// Indeksni birga oshirish (keyingi elementga o'tish)
// 	index++;
// }

// // Natijani konsolga chiqarish
// console.log(ress) // 61

// // Yig'indi uchun o'zgaruvchi, boshlang'ich qiymati 0
// let ress = '';

// // Massiv indeksini kuzatish uchun o'zgaruvchi
// index = 0;

// while (index < str.length) {
// 	ress += str[index];
// 	index++;
// 	console.log(ress);
// }

// // Natija uchun bo'sh string
// ress = '';

// // Indeksni boshlang'ich holatga keltirish
// index = 0;

// // Ishlov beriladigan matn
// str = 'Hello world i am web developer';

// // While tsikli - matn oxirigacha ishlaydi
// while (index < str.length) {
// 	// Agar joriy belgi bo'shliq bo'lsa
// 	if (str[index] === ' ') {
// 		ress += '_'; // pastgi chiziq qo'shish
// 	} else {
// 		ress += str[index]; // asl belgini qo'shish
// 	}
// 	// Indeksni birga oshirish
// 	index++;
// }

// // Natijani konsolga chiqarish
// console.log(ress); // "Hello_world_i_am_web_developer"

// // Indeksni matn oxiridan boshlash
// index = str.length - 1;

// // Natija uchun bo'sh string
// ress = '';

// // Ishlov beriladigan matn
// str = 'Hello world i am web developer';

// // While tsikli - matn boshigacha ishlaydi (teskari)
// while (index >= 0) {
// 	// Agar joriy belgi bo'shliq bo'lsa
// 	if (str[index] === ' ') {
// 		ress += '_'; // pastgi chiziq qo'shish
// 	} else {
// 		ress += str[index]; // asl belgini qo'shish
// 	}
// 	// Indeksni birga kamaytirish
// 	index--;
// }

// // Natijani konsolga chiqarish
// console.log(ress) // "repoleved_bew_ma_i_dlrow_olleH"

/* do while */

// index = 13;

// do {
// 	console.log('amal');
// 	index++;
// } while (index < 5);

/* for */
/*
for (iterator yaratilishi; shart; inkrement/dekrement) {
	sikl amalari
}
 */

// for (let i = 0; i <= 10; i++) {
// 	console.log(i);
// } // 0 dan 10 gacha sonlar chiqariladi

// for (let i = 10; i >= 0; i--) {
// 	console.log(i);
// } // 10 dan 0 gacha sonlar chiqariladi

let str = 'Hello world i am web developer',
	arr = ['Hello', 'world', 'i', 'am', 'web', 'developer'],
	ress = '',
	numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
	index = 0;

// for (let i = 0; i < str.length; i++) {
// 	console.log(str[i]);
// } // Har bir belgini sanab berdi

// for (let i = 0; i < str.length; i++) {
// 	if (str[i] === ' ') {
// 		ress += '_';
// 	} else {
// 		ress += str[i];
// 	}
// }
// console.log(ress); // "Hello_world_i_am_web_developer"

// for (let i = str.length - 1; i >= 0; i--) {
// 	if (str[i] === ' ') {
// 		ress += '_';
// 	} else {
// 		ress += str[i];
// 	}
// }
// console.log(ress); // "repoleved_bew_ma_i_dlrow_olleH"

// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// } // Har bir belgini sanab berdi

// for (let i = arr.length - 1; i >= 0; i--) {
// 	console.log(arr[i]);
// } // Har bir belgini teskari sanab berdi

// ress = 0; // Yig'indi uchun o'zgaruvchi, boshlang'ich qiymat 0
// numbers = [13, 7, 20, 15, 6]; // Sonlar massivi

// for (let i = 0; i < numbers.length; i++) {
// 	ress += numbers[i]; // Joriy elementni yig'indiga qo'shish
// 	console.log(ress); // Har qadamdagi yig'indini ko'rsatish
// }

// console.log(ress); // Yakuniy yig'indini ko'rsatish

/* for of */
arr = ['Hello', 'world', 'i', 'am', 'web', 'developer'];
numbers = [13, 7, 20, 15, 6];

// for (let value of arr) {
// 	console.log(value);
// }

// for (let value of numbers) {
// 	console.log(value);
// }

// numbers = [13, 7, 20, 15, 6]; // Sonlar massivi
// ress = 0; // Yig'indi uchun o'zgaruvchi

// for (let value of numbers) {
// 	// Har bir element uchun tsikl
// 	ress += value; // Joriy qiymatni yig'indiga qo'shish
// 	console.log(ress); // Joriy yig'indini ko'rsatish
// }

// console.log(ress); // Yakuniy yig'indini ko'rsatish

/* for in */
// for (let key in arr) {
// 	// Har bir kalit uchun tsikl
// 	console.log(key); // Indeksni (kalitni) ko'rsatish
// 	console.log(arr[key]); // Element qiymatini ko'rsatish
// }

// console.log(arr); // Butun massivni ko'rsatish

// let user = {
// 	firdname: "O'lmas", // Ism (noto'g'ri yozilgan - firstname bo'lishi kerak edi)
// 	lastname: 'Ismatov', // Familiya
// 	age: 29, // Yosh
// };

// for (let key in user) {
// 	// Har bir xususiyat uchun tsikl
// 	console.log(key); // Xususiyat nomini ko'rsatish
// 	console.log(user[key]); // Xususiyat qiymatini ko'rsatish
// }
