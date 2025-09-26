'use strict';

// let string = 'some test string';
// let value;

// // 1
// value = string[0];
// value = string[string.length - 1];

// // 2
// value =
//     string[0].toUpperCase() +
//     string.slice(1, -1) +
//     string[string.length - 1].toUpperCase();

// // 3
// value = string.indexOf('string');

// // 4
// let indexOfFirstSpace = string.indexOf(' '); // 4
// value = string.indexOf(' ', indexOfFirstSpace + 1);
// // value = string.lastIndexOf(' ');

// // value = string
// //     .split('')
// //     .map((letter, i) => {
// //         if (letter === ' ') return i;
// //     })
// //     .filter((item) => {
// //         if (item) return item;
// //     });

// // 5
// value = string.slice(5, 5+4);

// // 6
// value = string.slice(4, 9);

// // 7
// value = string.slice(0, -6);

// // 8
// let a = 20,
//     b = 16;

// value = a + '' + b;

// console.log(value);

// let user = {
// 	firstname: "O'lmas",
// 	lastname: 'Ismatov',
// 	age: 20,
// 	'is married': true,
// 	address: {
// 		country: 'Uzbekistan',
// 		city: 'Bukhara',
// 		street: 'Rondom street',
// 	},
// };

// let value;

// /**Objectning xususiyati 2 tushunchadan iborat: kalit va qiymat.
//  * Misol: firstname va "O'lmas"
//  * Bu yerda firstname kalit, "O'lmas" qiymat.
//  */

// // value o'zgaruvchisini ichidagi kalitni to'g'ri olish usullari
// value = user.firstname;
// value = user.lastname;
// value = user['firstname'];
// value = user['lastname'];
// value = user.age;
// value = user['is married'];

// // value o'zgaruvchisini ichidagi kalitni to'g'ri olish usullari
// value = user.address;
// value = user.address.country;
// value = user.address.city;
// value = user.address.street;
// value = user['address'].city;
// value = user.address['city'];
// value = user['address']['city'];

// let propName = 'lastname';

// value = propName;
// value = user[propName];
// // value = user['lastname'];

// // Objectda mavjud bo'lmagan xususiyatga murojaat qilib qiymat o'rnatilsa, bu xususiyat objectda e'lon qilinadi
// user.info = 'Hello';

// // Object ichidagi keraksiz xususiyatni o'chirish
// delete user.info;

// user.skills = ['Rider', 'Second ww warior', "Peeky blinder's boss"];
// // user.example.info = 'Hello'; // userni ichida example kalitini yaratganimiz yoq lekin infoga murojaat qilyapmiz bu esa katta xato

// // userni ichiga example ni yaratganimiz va infoga murojaat qilyapmiz
// user.example = {};
// user.example.info = 'Hello';
// // delete user.example.info;

// // Metodlar
// value = Object.keys(user); // Bu massiv yaratib beradi va massivni ichiga shu objectni kalitlarini olib beradi
// value = Object.values(user); // Bu massiv yaratib beradi va massivni ichiga shu objectni qiymatlarini olib beradi
// value = Object.entries(user); // Bu massiv yaratib beradi va massivni ichiga shu objectni massivlarini kalit va qiymat olib beradi

// let entriesOfObject = [
// 	['firstname', "O'lmas"],
// 	['lastname', 'Ismatov'],
// 	['age', 20],
// ];

// value = Object.fromEntries(entriesOfObject);

// console.log(value);
// console.log(user);

// // UYGA VAZIFA

// let productInfo = {
// 	product: 'iphone',
// };

// productInfo.price = 1000;
// productInfo.currency = 'dollar';

// productInfo.details = {
// 	model: '14 Pro',
// 	color: 'black',
// };

// console.log(productInfo);
