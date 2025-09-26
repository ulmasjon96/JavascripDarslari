'use strict';

// // user degan obyekt yaratildi, u foydalanuvchi ma'lumotlarini saqlaydi
// const user = {
// 	// foydalanuvchi ismi
// 	firstName: 'James', // Typo: "firsName" o'rniga "firstName" bo'lishi kerak edi
// 	// foydalanuvchi familiyasi
// 	lastName: 'Smith',
// 	// foydalanuvchi yoshi
// 	age: 30,
// 	// foydalanuvchi manzili (ichki obyekt)
// 	address: {
// 		// shahar
// 		city: 'New York',
// 		// davlat
// 		country: 'USA',
// 		// ko'cha nomi
// 		street: 'Randolph St',
// 	},
// };
// console.log(user.firstName); // "James" (lekin "firstName" deb nomlanishi kerak edi)
// console.log(user.address.city); // "New York"
// console.log(user.address.country); // "USA"

// destrukturizatsiya

// 1. Oddiy destrukturizatsiya

// // user obyektidan firstName va lastName xususiyatlarini ajratib olamiz
// // va ularni yangi nomlar bilan (var1 va var2) saqlaymiz
// const { firstName: var1, lastName: var2 } = user;
// console.log(var1); // "James" - user.firstName qiymati var1 ga o'zlashtirildi
// console.log(var2); // "Smith" - user.lastName qiymati var2 ga o'zlashtirildi

// 2. Xususiyat nomi bilan bir xil o'zgaruvchi

// // Bu yerda xususiyat nomlari va o'zgaruvchi nomlari bir xil
// // Lekin to'liq ko'rinishda yozilgan
// const { firstName: firstName, lastName: lastName } = user;
// console.log(firstName); // "James" - user.firstName
// console.log(lastName); // "Smith" - user.lastName

// 3. Qisqartirilgan sintaksis

// // Xususiyat va o'zgaruvchi nomlari bir xil bo'lsa, qisqartirish mumkin
// const { firstName, lastName } = user;
// console.log(firstName); // "James"
// console.log(lastName); // "Smith"

// 4. Standart (default) qiymatlar

// // Agar obyektda age xususiyati bo'lmasa, 30 standart qiymati ishlatiladi
// const { firstName, lastName, age = 30 } = user;
// console.log(firstName); // "James"
// console.log(lastName); // "Smith"
// console.log(age); // 30 - chunki user obyektida age mavjud emas

// 5. Funksiya parametrlarida standart qiymat

// // Funksiya chaqirilganda parametr berilmasa, 'Default value' ishlatiladi
// function myFunc(param = 'Default value') {
// 	console.log(param);
// }
// myFunc(); // "Default value" - parametr berilmagani uchun standart qiymat
// myFunc('Hello'); // "Hello"

// 6. Ichki obyektlarni ajratib olish

// // address xususiyatini butunlay ajratib olamiz
// const { firstName, lastName, address } = user;
// console.log(firstName); // "James"
// console.log(lastName); // "Smith"
// console.log(address); // { city: 'New York', country: 'USA', street: 'Randolph St' }

// 7. Chuqur destrukturizatsiya

// // address ichidagi xususiyatlarni ham ajratib olamiz
// const {
// 	firstName,
// 	lastName,
// 	address: { city, country, street }, // address ichidagilar
// 	address, // butun address obyekti
// } = user;

// console.log(firstName); // "James"
// console.log(lastName); // "Smith"
// console.log(city); // "New York" - address.city
// console.log(country); // "USA" - address.country
// console.log(street); // "Randolph St" - address.street
// console.log(address); // { city: 'New York', country: 'USA', street: 'Randolph St' }
// const colors = ['red', 'green', 'blue', 'yellow', 'black', 'white'],
// 	names = ['John', 'Pete', 'Alice', ['a', 'b', 'c'], 'Bob', 'Jane', 'Jack'];

// 1. Oddiy massiv destrukturizatsiyasi

// // colors massividan barcha elementlarni ajratib olamiz
// const [c1, c2, c3, c4, c5, c6] = colors;
// console.log(c1); // "red"   - colors[0]
// console.log(c2); // "green" - colors[1]
// console.log(c3); // "blue"  - colors[2]
// console.log(c4); // "yellow"- colors[3]
// console.log(c5); // "black" - colors[4]
// console.log(c6); // "white" - colors[5]

// 2. Elementlarni o'tkazib yuborish

// // Faqat 1-chi va 6-chi elementlarni olamiz, qolganlarini o'tkazib yuboramiz
// const [c1, , , , , c6] = colors;
// console.log(c1, c6); // "red" "white"

// MURAKKABROQ MISOLLAR

// 3. Ichki massivni destrukturizatsiya qilish

// // names massividan elementlarni ajratib olamiz
// // 4-element (massiv) ni ham ichma-ich destrukturizatsiya qilamiz
// const [n1, n2, n3, [a, b, c], n4, n5, n6] = names;
// console.log(n1); // "John" - names[0]
// console.log(n2); // "Pete" - names[1]
// console.log(n3); // "Alice"- names[2]
// console.log(a); // "a"    - names[3][0]
// console.log(b); // "b"    - names[3][1]
// console.log(c); // "c"    - names[3][2]
// console.log(n4); // "Bob"  - names[4]
// console.log(n5); // "Jane" - names[5]
// console.log(n6); // "Jack" - names[6]

// 4. Ichki massivni alohida ajratish

// /// Avval 4-elementni massiv sifatida olamiz
// const [n1, n2, n3, arr, n4, n5, n6] = names;
// // Keyin uni alohida destrukturizatsiya qilamiz
// const [v1, v2, v3] = arr;
// console.log(n1); // "John"
// console.log(n2); // "Pete"
// console.log(n3); // "Alice"
// console.log(arr); // ["a", "b", "c"] - butun ichki massiv
// console.log(v1); // "a" - arr[0]
// console.log(v2); // "b" - arr[1]
// console.log(v3); // "c" - arr[2]
// console.log(n4); // "Bob"
// console.log(n5); // "Jane"
// console.log(n6); // "Jack"

// 5. To'g'ridan-to'g'ri elementni tanlab olish

// // names[3] elementini to'g'ridan-to'g'ri destrukturizatsiya qilamiz
// const [v1, v2, v3] = names[3];
// console.log(v1); // "a" - names[3][0]
// console.log(v2); // "b" - names[3][1]
// console.log(v3); // "c" - names[3][2]

// 6. Ichki massivni to'g'ridan-to'g'ri destrukturizatsiya qilish

// // Destrukturizatsiya amalga oshirilmoqda
// const [n1, , , [v1, v2, v3], n4, n5, n6] = names;

// console.log(n1); // "John" - names[0]
// console.log(n2); // ReferenceError: n2 is not defined (CHUNKI U O'TKAZIB YUBORILGAN)
// console.log(n3); // ReferenceError: n3 is not defined (CHUNKI U O'TKAZIB YUBORILGAN)
// console.log(v1); // "a" - names[3][0] (ichki massivning birinchi elementi)
// console.log(v2); // "b" - names[3][1] (ichki massivning ikkinchi elementi)
// console.log(v3); // "c" - names[3][2] (ichki massivning uchinchi elementi)
// console.log(n4); // "Bob" - names[4]
// console.log(n5); // "Jane" - names[5]
// console.log(n6); // "Jack" - names[6]

/* ---- REST OPERATOR ---- */

// 1. OBYEKTLARDA REST OPERATORLARI

// 1. Asosiy foydalanish

// // firstName va age ni ajratib, qolgan xususiyatlarni otherProps ga yig'amiz
// const { firstName, age, ...otherProps } = user;

// console.log(firstName); // "James" - user.firstName
// console.log(age); // 30 - user.age
// console.log(otherProps); // { lastName: 'Smith', email: 'james@example.com', address: {...} }

// 2. Tanlangan xususiyatlarni ajratish

// // address va lastName ni ajratib, qolganlarini others ga yig'amiz
// const { address, lastName, ...others } = user;

// console.log(address); // { city: 'New York', country: 'USA' }
// console.log(lastName); // "Smith"
// console.log(others); // { firstName: 'James', age: 30, email: 'james@example.com' }

//  3.  Massivlarda Rest Operatori

// colors = ['red', 'green', 'blue', 'yellow', 'black', 'white'];

// // Birinchi 2 ta elementni ajratib, qolganlarini others massiviga yig'amiz
// const [c1, c2, ...others] = colors;

// console.log(c1);     // "red" - colors[0]
// console.log(c2);     // "green" - colors[1]
// console.log(others); // ["blue", "yellow", "black", "white"] - colors[2] dan oxirigacha

// 2. REST OPERATORNING ASOSIY QOIDALARI

// 1. Faqlgina oxirida ishlatilishi mumkin:

// // Noto'g'ri:
// const [...rest, lastItem] = colors; // SyntaxError

// // To'g'ri:
// const [firstItem, ...rest] = colors;

// 2. Obyektda qolgan xususiyatlarni yig'ish:

// const { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 };
// console.log(rest); // { c: 3, d: 4 }

// 3. Massivda qolgan elementlarni yig'ish:

// const [x, y, ...rest] = [1, 2, 3, 4, 5];
// console.log(rest); // [3, 4, 5]

// 4. AMAMLIY FOYDALANISH MISOLLARI

// 1. Funksiya parametrlarida

// function sum(a, b, ...rest) {
// 	console.log(a + b); // Birinchi 2 ta son yig'indisi
// 	console.log(rest); // Qolgan parametrlar massivi
// }
// sum(1, 2, 3, 4, 5); // 3, [3, 4, 5]

// 2. Obyektni qayta ishlash

// user = { name: 'John', age: 30, role: 'admin' };

// // role xususiyatini olib tashlash
// const { role, ...userWithoutRole } = user;
// console.log(userWithoutRole); // { name: 'John', age: 30 }

// 3. Massivlarni birlashtirish

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

/* ---- SPREAD OPERATOR ---- */

// console.log(...colors);
// console.log(...names);

// HOME WORK

function func(first, ...other) {
	return {
		first,
		other,
	};
}

const result = func('a', 'b', 'c', 'd');
console.log(result);

function getInfo(organizatsiya) {
	// 1. Obyektni parchalaymiz
	const { nomi = "Noma'lum", info: { partnerlar = [] } = {} } = organizatsiya;

	// 2. Barcha hamkorlarni bitta stringga aylantiramiz
	const barchaPartnerlar = partnerlar.join(' ');

	// 3. Natijani chiqaramiz
	console.log(`Nomi: ${nomi}`);
	console.log(`Partnerlar: ${barchaPartnerlar}`);
}

// Misol:
getInfo({
	nomi: 'Google',
	info: {
		partnerlar: ['Microsoft', 'Apple', 'Samsung'],
	},
});
