// ---------------------------------------
// 1. Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до n: getArray(10); // [1,2,3,4,5,6,7,8,9,10]Данное задание выполните после того как познакомитесь с методами массивов.
// ---------------------------------------

function getArray(son) {
	let arr = []; // Bo'sh massiv yaratamiz
	for (let i = 1; i <= son; i++) {
		// 1 dan songa kiritilgan son gacha sanoydi
		arr.push(i); // Har bir sonni massivga qo'shamiz
	}
	console.log(arr); // Massivni konsolga chiqaramiz: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	return arr; // Massivni qaytaramiz
}

getArray(10); // Funksiyani chaqiramiz
// ---------------------------------------
// 2. Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива. Данное задание выполните после того как познакомитесь с методами массивов: doubleArray([1,2,3]) // [1,2,3,1,2,3]
// ---------------------------------------

function doubleArray(arr) {
	let newArr = arr.concat(arr); // Massivni dublirovat
	console.log(newArr); // Massivni konsolga chiqaramiz

	return newArr; // Massivni qaytaramiz
}

doubleArray([(1, 2, 3)]);

// ---------------------------------------
// 3. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений. Данное задание выполните после того как познакомитесь с методами массивов: changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д.
// ---------------------------------------

/**
 * Berilgan barcha massivlardan birinchi elementlarni o'chirib,
 * qolgan elementlardan iborat yangi massiv qaytaruvchi funksiya
 */
function changeCollection() {
	// 1. Natijani saqlash uchun bo'sh massiv yaratamiz
	let result = [];

	// 2. arguments ob'ekti orqali barcha berilgan parametrlarni aylanamiz
	for (let i = 0; i < arguments.length; i++) {
		// 3. Har bir argument massiv ekanligini tekshiramiz
		if (Array.isArray(arguments[i])) {
			// 4. Massivning nusxasini olamiz (asl massiv o'zgartirilmasligi uchun)
			let newArr = arguments[i].slice();

			// 5. Agar massiv bo'sh bo'lmasa
			if (newArr.length > 0) {
				// 6. Birinchi elementni o'chiramiz
				newArr.shift();
			}

			// 7. O'zgartirilgan massivni natijaga qo'shamiz
			result.push(newArr);
		}
	}

	// 8. Natijani konsolga chiqaramiz (tekshirish uchun)
	console.log(result);

	// 9. Yakuniy natijani qaytaramiz
	return result;
}

// Funksiyani chaqirish va natijalarni ko'rish
const natija = changeCollection(
	[1, 2, 3], // Massiv 1
	['a', 'b', 'c'], // Massiv 2
	[2, 3, 4], // Massiv 3
	['c', 'd'], // Massiv 4
	'text', // Massiv bo'lmagan qiymat (o'tkazib yuboriladi)
	[true, false], // Massiv 5
);

/* KONSOLDA KO'RINADIGAN NATIJA:
[
  [2, 3],     // [1,2,3] dan 1 o'chirildi
  ['b', 'c'], // ['a','b','c'] dan 'a' o'chirildi
  [3, 4],     // [2,3,4] dan 2 o'chirildi
  ['d'],      // ['c','d'] dan 'c' o'chirildi
  [false]     // [true,false] dan true o'chirildi
]
*/

console.log('Qaytarilgan natija:', natija);
/* Qaytarilgan natija ham yuqoridagi kabi bo'ladi */

// ---------------------------------------
// 4. Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и значение на которое хочу проверять. Проверять что все аргументы переданы. Возвращать новый массив с пользователями соответсвующие указанным параметрам.Данное задание выполните после того как познакомитесь с методами массивов funcGetUsers(users, “gender”, “male”); // [ {name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ]
// ---------------------------------------

/**
 * Foydalanuvchilarni berilgan parametr va qiymat bo'yicha filtrlash
 * @param {Array} users - Foydalanuvchilar massivi
 * @param {string} param - Filtrlash uchun parametr nomi (masalan: 'gender')
 * @param {*} value - Qidirilayotgan qiymat (masalan: 'male')
 * @returns {Array} Mos keladigan foydalanuvchilar massivi
 */

// Foydalanuvchilar ro'yxatidan ma'lum parametr (masalan: gender, age, name) bo'yicha qiymat mos kelganlarni ajratib olish funksiyasi
function funcGetUsers(users, param, value) {
	// 1. Natijani saqlash uchun bo'sh massiv yaratamiz
	let result = [];

	// 2. Foydalanuvchilar ro'yxati (massiv) bo'ylab yuramiz
	for (let i = 0; i < users.length; i++) {
		// 3. Har bir foydalanuvchidan parametr bo'yicha qiymat olib, qidirilayotgan qiymat (value) bilan solishtiramiz
		// Masalan: users[i][param] => users[0]['gender'] => 'male'
		if (users[i][param] === value) {
			// 4. Agar foydalanuvchining qiymati value bilan teng bo‘lsa, uni natijalar (result) massiviga qo‘shamiz
			result.push(users[i]);
		}
	}

	// 5. Natijalarni konsolga chiqaramiz
	console.log(result);

	// 6. Natijalar (filter qilingan foydalanuvchilar) massivini qaytaramiz
	return result;
}

// Test qilish uchun foydalanuvchilar ro'yxati
const users = [
	{ name: 'Ali', age: 25, gender: 'male' }, // 0
	{ name: 'Vali', age: 30, gender: 'male' }, // 1
	{ name: 'Gulnora', age: 22, gender: 'female' }, // 2
	{ name: 'Malika', age: 28, gender: 'female' }, // 3
	{ name: 'Javohir', age: 35, gender: 'male' }, // 4
];

// Funksiyani test qilish: gender = 'male' bo'lgan foydalanuvchilarni olish
funcGetUsers(users, 'gender', 'male');
