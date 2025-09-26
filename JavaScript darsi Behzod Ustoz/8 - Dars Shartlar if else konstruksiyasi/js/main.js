'use strict';

// let item = {
// 	product: 'Iphone',
// };

// item.price = 1000;
// item.currency = 'dollar';

// item.details = {};
// item.details.model = '14 Pro';
// item.details.color = 'black';

// console.log(item);

// let value;

// value = 3 > 2; // true
// value = 3 < 2; // false
// value = 3 >= 2; // true
// value = 3 <= 2; // false
// value = '3' > 2; // true
// value = 3 > '2'; // true
// value = '13' > '2'; // false buni inicode bilan taqqoslaydi
// value = 'a' > 'A'; // true buni inicode bilan taqqoslaydi

// // maynni UNICODE ni aniqlash
// value = 'a'.charCodeAt(); // 97 charCodeAt() buni inicode bilan taqqoslaydi sonini chiqaradi
// value = 'A'.charCodeAt(); // 65

// value = 'abv' > 'abcsad'; // true

// value = '1'.charCodeAt(); // 49
// value = '20'.charCodeAt(); // 50
// value = '23'.charCodeAt(); // 51

// // Qatiy tenglik
// value = 10 === 10; // true
// value = 10 === '10'; // false

// // Qatiy tengsizlik
// value = 10 !== 10; // false
// value = 10 !== '10'; // true

/*
if(shart){
shart qoniqtirilgandagi amallar
} else{
 aksincha (shart qoniqtirilmagandagi) amallar
 }
 */

// value = 10;
// value = -10;
// if (value > 0) {
// 	console.log('Son noldan katta');
// } else {
// 	console.log('Error');
// }

// value = 10;
// Boolean();
// value = 0;
// value = 'Hello';
// value = '';

/** Inkor qiymatlar
 * 0
 * ''
 * null
 * undefined
 * NaN
 * false
 */

// O'zgaruvchi qiymati borligini tekshirish

// if (value) {
// 	console.log("O'zgaruvchi bo'sh emas");
// } else {
// 	console.log("O'zgaruvchi bo'sh yoki unda inkor qiymat bor");
// }

// 'emas' operatori

// console.log(Boolean('Hello')); // true
// console.log(Boolean('')); // false
// console.log(Boolean(0)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(NaN)); // false
// console.log(Boolean(false)); // false

// console.log(!'Hello'); // false
// console.log(!null); // true

/** "emas" "!" operatori - qiymatni o'ziga bo'lgan qarama-qarshi Booleanga aylantiradi
 * Misol: !"hello" -> false
 * Misol: !"null" -> true
 */

// Inkor qiymat qabul qiluvchi shart
// value = null;
// value = 'Hello';

// if (!value) {
// 	console.log("O'zgaruvchi qiymati inkor emas");
// }

// Objectla bilan misol
// let user = {
// 	name: null,
// 	age: 20,
// };

// if (user.name) {
// 	console.log('Name degan xususiya bor ekan');
// } else {
// 	console.log("Name degan xususiya yo'q ekan");
// }

// Object.hasOwnProperty() Objectda ko\'rsatilgan bar yoki yo\'qligini tekshirish
// console.log(user.hasOwnProperty('name'));

// if (user.hasOwnProperty('name')) {
// 	console.log('Name degan xususiya bor ekan');
// } else {
// 	console.log("Name degan xususiya yo'q ekan");
// }

// Bunaqa xususiyat yo'q
// if (user.hasOwnProperty('name') && user.name) {
// 	console.log('Name degan xususiya bor ekan');
// } else {
// 	console.log("Name degan xususiya yo'q ekan");
// }

// Ko'rsatilgan xususiyat bo'lmaganda ishlaydigan shart

// if (!user.hasOwnProperty('info')) {
// 	console.log("Info degan xususiya yo'q ekan");
// }

// Massilar bilan misol
// let arr = [null, 123, 'Hello'];

// arr.length = 0;

// if (arr.length) {
// 	console.log("Massiv bo'sh emas");
// } else {
// 	console.log("Massiv bo'sh");
// }

// massiv bo'sh bo'lganda ishlaydigan shart

// arr.length = 0;

// if (!arr.length) {
// 	console.log("Massiv bo'sh");
// }

// O'zgaruvchi qiymatini massiv ekankigini tekshirish
// console.log(typeof arr); // object

// if (arr instanceof Array) {
// 	console.log("Massiv");
// } // Array - massivni tekshirish uchun ishlatiladi

// if (Array.isArray(arr)) {
// 	console.log('Massiv');
// } else {
// 	console.log('Massiv emas');
// }

// O'zgaruvchini qiymati massiv bo'lmaganda ishlaydigan shart
// arr = 'Hello';

// if(!Array.isArray(arr)){
// 	console.log('Massiv emas');
// }

// "or" "yoki" "||" operatori
// "yoki" "||" operatori har doim true qiymatni tanlaydi

// value = 'Hello' || true;
// value = '' || 0 || false || NaN || undefined || null; // Ilojsizlikdan null ni tanlaydi
// value = [] || {} || true;

// Misol
// let answer = prompt('Ismingizni kiriting');
// let userName = answer || 'Default name';
// value = userName;

// "and" "va" "&&" operatori
// "va" "&&" operatori har doim false qiymatni tanlaydi

// value = 'Hello' && false; // Ilojsizlikdan false ni tanlaydi
// value = 0 && false; //  0 ni tanlaydi chunki 0 bu false
// value = '' && 0 && false; // "" ni tanlaydi chunki "" bu false
// value = 'Hello' && 123 && [] && {} && true; // Ilojsizlikdan true ni tanlaydi

// value = 10;

// if (value > 10 && value < 20) {
// 	console.log('Olaman');
// } else {
// 	console.log('Olmayman');
// }

// value = 10;
// value = -10;
// value = 0;
// value = 'Hello';

// if else da ko'p shart qo'yish

// if (value > 0) {
// 	console.log('value biggest than zero');
// } else if (value < 0) {
// 	console.log('value less than zero');
// } else if (value === 0) {
// 	console.log('value equal to zero');
// } else {
// 	console.log('error');
// }

// console.log(value);

// UYGA VAZIFA

// ---------------------------------------------
// 1. Mantiqiy operatorlar (|| va &&) ishlashi
// ---------------------------------------------

let a;

// || (yoki): birinchi "true" qiymatni qaytaradi
a = 0 || 'string'; // 0 false, 'string' true => 'string'

// && (va): agar birinchi qiymat true bo‘lsa, ikkinchi qiymatni qaytaradi
a = 1 && 'string'; // 1 true, 'string' => 'string'

// || ishlatilsa: null false, 25 true => qaytadi: 25
a = null || 25; // 25

// && ishlatilsa: null false bo‘lgani uchun qaytadi: null
a = null && 25; // null

// || operatori birinchi true qiymatni topadi
a = null || 0 || 35; // null false, 0 false, 35 true => 35

// && operatori birinchi false qiymatni topadi
a = null && 0 && 35; // null false => null

console.log('a:', a); // Yakuniy natija: null

// ----------------------------------------------------
// 2. Turli turdagi qiymatlar bilan matematik amallar
// ----------------------------------------------------

let value;

// String va sonlar qo‘shilsa: oxirgi natija stringga aylanadi
value = 12 + 14 + '12'; // 26 + '12' => '2612'

// '1' string son bo‘lsa, avtomatik son sifatida ishlatiladi
value = 3 + 2 - '1'; // 5 - 1 => 4

// '3' + 2 = '32' (string), '32' - 1 = 31
value = '3' + 2 - 1; // 31

// undefined + 2 => NaN (Not a Number)
value = undefined + 2; // NaN

// null + 5 => 0 + 5 = 5
value = null + 5; // 5

// true => 1, undefined => NaN => 1 + NaN = NaN
value = true + undefined; // NaN

console.log('value:', value); // Yakuniy natija: NaN

// ---------------------------------------------
// 3. If shart operatorlari bilan solishtirish
// ---------------------------------------------

let hidden = 5;

if (hidden == 0) {
	console.log(1);
} else if (hidden > 0) {
	console.log('greater than zero'); // tuzatilgan matn
} else if (hidden < 0) {
	console.log(hidden * 10);
}

// ------------------------------------------------
// 4. Obyektni shart asosida o‘zgartirish (car)
// ------------------------------------------------

let car = {
	name: 'Lexus',
	age: 10,
	create: 2008,
	needRepair: false,
};

// Agar yoshi 5 yildan katta bo‘lsa, ta'mirlash kerak
if (car.age > 5) {
	console.log('Need Repair');
	car.needRepair = true;
}

console.log('car:', car);

// -----------------------------------------------------------------
// 5. Narx va chegirma orqali narxni hisoblash (item)
// -----------------------------------------------------------------

let item = {
	name: 'Intel core i7',
	price: '100$',
	discount: '15%',
};

// '$' belgilarini olib tashlab, float ga aylantiramiz
let price = parseFloat(item.price.replace('$', ''));
let discount = parseFloat(item.discount.replace('%', ''));

// Chegirmali narxni hisoblash: price - (price * discount / 100)
item.priceWithDiscount = price - (price * discount) / 100;

console.log('item:', item);

// ----------------------------------------------------
// 6. Narx bo‘yicha filter qilish (product)
// ----------------------------------------------------

let product = {
	name: 'Яблоко',
	price: '10$',
};

let min = 10;
let max = 20;

// '$' belgisi olib tashlanadi va floatga o‘tkaziladi
let narx = parseFloat(product.price.replace('$', ''));

// Agar narx oralig‘ida bo‘lsa, chiqariladi
if (narx >= min && narx <= max) {
	console.log(product.name);
} else {
	console.log('товаров не найдено.');
}
