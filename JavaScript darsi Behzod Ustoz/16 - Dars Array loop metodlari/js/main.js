'use strict';

// 1. Massiv yaratish va o'zgaruvchini e'lon qilish
let names = ['Harry', 'Potter', 'John', 'Smith', 'James', 'Bond'],
	value; // Bu o'zgaruvchi ishlatilmayapti, shunchaki e'lon qilingan

const users = [
	{
		_id: '5cde6ce338171bb473d2855',
		index: 0,
		isActive: false,
		balance: 6953.64,
		age: 29,
		name: 'Thomas Shelby',
		gender: 'male',
		company: 'Shelby Company',
		email: 'thomasshelby@mail.com',
		phone: '+1 (977) 522-33-78',
		registered: '2015-02-14T11:45:27 -02:00',
	},
	{
		_id: '5cde6ce0db765gh42ue14786',
		index: 1,
		isActive: true,
		balance: 8706.31,
		age: 25,
		name: 'Amanda Desanta',
		gender: 'female',
		company: 'CherryVine',
		email: 'amandadesanta@mail.com',
		phone: '+1 (977) 700-31-98',
		registered: '2018-05-27T20:38:11 -03:00',
	},
	{
		_id: '5cde6ce760241ef682t1631',
		index: 2,
		isActive: false,
		balance: 3457.65,
		age: 33,
		name: 'Edward Morra',
		gender: 'male',
		company: 'Dedsec',
		email: 'edwardmorra@mail.com',
		phone: '+1 (977) 431-25-79',
		registered: '2012-07-10T13:15:44 -03:00',
	},
	{
		_id: '5cde6ce134758ed69da1361',
		index: 3,
		isActive: true,
		balance: 1578.98,
		age: 22,
		name: 'John Snow',
		gender: 'male',
		company: 'Winterfell',
		email: 'johnsnow@mail.com',
		phone: '+1 (977) 789-84-57',
		registered: '2019-01-15T10:33:45 -03:00',
	},
	{
		_id: '5cde6ce9ab123cd47ef2894',
		index: 4,
		isActive: true,
		balance: 4231.75,
		age: 27,
		name: 'Sarah Connor',
		gender: 'female',
		company: 'Cyberdyne',
		email: 'sarahconnor@mail.com',
		phone: '+1 (977) 654-12-34',
		registered: '2017-09-22T15:20:13 -03:00',
	},
	{
		_id: '5cde6ce4fg567hj89kl3210',
		index: 5,
		isActive: false,
		balance: 9876.22,
		age: 35,
		name: 'Michael Corleone',
		gender: 'male',
		company: 'Corleone Inc',
		email: 'michaelcorleone@mail.com',
		phone: '+1 (977) 321-45-67',
		registered: '2014-11-30T09:15:28 -02:00',
	},
	{
		_id: '5cde6ce8mn901op23qr4567',
		index: 6,
		isActive: true,
		balance: 2678.19,
		age: 24,
		name: 'Ellen Ripley',
		gender: 'female',
		company: 'Weyland Corp',
		email: 'ellenripley@mail.com',
		phone: '+1 (977) 876-90-12',
		registered: '2020-03-17T14:50:39 -03:00',
	},
	{
		_id: '5cde6ce2st345uv67wx8901',
		index: 7,
		isActive: false,
		balance: 5123.87,
		age: 31,
		name: 'James Bond',
		gender: 'male',
		company: 'MI6',
		email: 'jamesbond@mail.com',
		phone: '+1 (977) 555-66-77',
		registered: '2016-06-08T12:25:51 -02:00',
	},
	{
		_id: '5cde6ce7yz789ab12cd3456',
		index: 8,
		isActive: true,
		balance: 7345.91,
		age: 28,
		name: 'Lara Croft',
		gender: 'female',
		company: 'Tomb Raiders',
		email: 'laracroft@mail.com',
		phone: '+1 (977) 444-88-99',
		registered: '2018-12-01T17:35:22 -03:00',
	},
	{
		_id: '5cde6ce3ef012gh34ij5678',
		index: 9,
		isActive: false,
		balance: 1890.45,
		age: 30,
		name: 'Tony Stark',
		gender: 'male',
		company: 'Stark Industries',
		email: 'tonystark@mail.com',
		phone: '+1 (977) 999-11-22',
		registered: '2013-04-25T08:45:16 -02:00',
	},
];

// for (let i = 0; i < names.length; i++) {
// 	console.log(i, names[i]);
// }

// for (let i = names.length - 1; i >= 0; i--) {
// 	console.log(names[i]);
// }

// for (let name of names) {
// 	console.log(name);
// }

// // 2. forEach() metodi bilan massiv elementlarini aylantirish (eski usul)
// names.forEach(function (param1, param2, param3) {
// 	// param1 - joriy element (masalan, 'Harry')
// 	console.log(param1); // Elementni chiqaradi

// 	// param2 - element indeksi (0, 1, 2...)
// 	console.log(param2); // Indeksni chiqaradi

// 	// param3 - butun massivning o'zi
// 	console.log(param3); // Butun names massivini chiqaradi
// });

// // 3. forEach() metodi bilan massiv elementlarini aylantirish (arrow function bilan)
// names.forEach(name => {
// 	// name - joriy element (arrow function faqat birinchi parametrni oladi)
// 	console.log(name); // Har bir ismni alohida chiqaradi
// });

// /* -- ForEach metodi -- */

// names.forEach(function (param1, param2, param3) {
// 	console.log(param1); // massivni qiymatini chiqardi
// 	console.log(param2); // massiv qiymatlari8ning indeksini chiqardi
// 	console.log(param3); // siklda ishtirok etayotgan massivni qiymatini chiqardi
// });

// names.forEach(function (item, i, arr) {
// 	console.log(item);
// 	console.log(i);
// 	console.log(arr);
// });

// // Faqat index bilan ishlaganda 2-parametrga sakrab(1-parametrni yozmasdan) o'tib bo'lmaydi

// names.forEach((item, i, arr) => {
// 	console.log(item);
// 	console.log(i);
// 	console.log(arr);
// });

// filter() = massivni o'zgartirmaydi Undan faqat side-effect (masalan, chop etish yoki tashqi o'zgaruvchilarni o'zgartirish) uchun foydalanish mumkin

names = ['Harry', 'Potter', 'John', 'Smith', 'James', 'Bond'];
// value = names.filter(function (item, i, arr) {
// 	return item.length >= 5;
// });

// value = names.filter(item => {
// 	return item.length >= 5;
// });

// value = names.filter(item => item.length <= 4);

// value = users.filter(() => users.gender === 'male');

// value = users
// 	.filter(user => user.gender === 'male')
// 	.map(user => user.name)
// 	.sort();

// value = users
// 	.filter(user => user.gender === 'female')
// 	.map(user => user.name)
// 	.sort();
// console.log(value); // Natija: ['Harry', 'Potter', 'Smith', 'James', 'Bond']
// console.log(names); // Natija: ['Harry', 'Potter', 'John', 'Smith', 'James', 'Bond']

// value = users
// 	.filter(user => {
// 		return user.gender === 'female';
// 	})
// 	.map(user => {
// 		return (user.name = user.phone);
// 	})
// 	.sort();

// reduce() = massivni o'zgartirmaydi Undan faqat side-effect (masalan, chop etish yoki tashqi o'zgaruvchilarni o'zgartirish) uchun foydalanish mumkin

names = ['Harry', 'Potter', 'John', 'Smith', 'James', 'Bond'];
// let ress = '';
// for (let name of names) {
// 	ress += name;
// }
// console.log(ress);

value = names.reduce((a, b) => {
	return a + b + ' ';
});

// balanslarni yigindisini qaytarib beradigan funksiya

value = users.reduce((a, b) => {
	return a + b.balance;
}, 0);

value = users.reduce((acc, user) => {
	acc[user.name] = user;
	return acc;
}, {});

value = users.some(user => {
	return user.gender === 'male';
});

console.log(value); // Natija: ['Harry', 'Potter', 'Smith', 'James', 'Bond']
console.log(users); // Natija: ['Harry', 'Potter', 'John', 'Smith', 'James', 'Bond']
