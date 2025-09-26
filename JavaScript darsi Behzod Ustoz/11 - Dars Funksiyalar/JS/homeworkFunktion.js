'use strict';

// UYGA VAZIFA

// --------------------------------------
// 1. Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)
// --------------------------------------

function multiply() {
	let result = 1; // Boshlang'ich qiymat 1 (ko'paytirish uchun neytral element)

	// arguments ob'ekti orqali aylanish
	for (let i = 0; i < arguments.length; i++) {
		result *= arguments[i]; // Har bir sonni ko'paytirish
	}

	// Natijani konsolga chiqarish
	console.log(result);

	return result; // Natijani qaytarish
}

// Funksiyani 4 ta son bilan chaqirish va natijani konsolga chiqarish
multiply(1, 2, 3, 4); // 24 chiqadi

// --------------------------------------
// 2. Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.
// --------------------------------------

// reverseString nomli funksiya yaratilmoqda, bu funksiya bitta parametr qabul qiladi: str (ya'ni matn)
// reverseString nomli funksiya — bu funksiya berilgan matnni teskari qilib qaytaradi
function reverseString(str) {
	// Teskari matnni saqlash uchun bo'sh string o'zgaruvchi yaratilmoqda
	let reversed = '';

	// For sikli orqali matnning oxirgi belgisidan boshlab birinchi belgisigacha yuriladi
	// i — bu index, boshlanishi: oxirgi belgidan (str.length - 1), shart: i >= 0, har safar i kamayadi (i--)
	for (let i = str.length - 1; i >= 0; i--) {
		// Har bir belgi reversed o'zgaruvchisiga qo'shib boriladi
		// Masalan: 'test' -> reversed = 't', keyin 'st', keyin 'est', keyin 'tset'
		reversed += str[i];
	}
	// Natijani konsolga chiqaramiz
	console.log(reversed);

	// Natijada reversed o'zgaruvchisida teskari matn hosil bo‘ladi
	// Uni return operatori orqali qaytaramiz
	return reversed;
}

// Funksiyani chaqiryapmiz, unga 'test' matnini uzatyapmiz
// Konsolga chiqishi kerak bo'lgan natija: 'tset'
reverseString('test');

// --------------------------------------
// 3. Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа: getCodeStringFromText(‘hello’) // “104 101 108 108 111”
// --------------------------------------

function getCodeStringFromText(text) {
	// Unicode kodlarini saqlash uchun bo'sh massiv
	let result = '';

	// Har bir belgining Unicode qiymatini topamiz
	for (let i = 0; i < text.length; i++) {
		result += text.charCodeAt(i); // harfning Unicode qiymatini qo'shamiz

		// Agar bu oxirgi harf bo'lmasa, orqasidan bo'sh joy qo'shamiz
		if (i < text.length - 1) {
			result += ' ';
		}
	}
	// Natijani konsolga chiqaramiz
	console.log(result);

	// Natijani qaytaramiz
	return result;
}

// Misol:
getCodeStringFromText('hello'); // "104 101 108 108 111"

// --------------------------------------
// 4. Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0). Генерирует рандомное число от 1-10 и сравнивает с заданным числом если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало число 5”. Числа в строке указаны как пример вы подставляете реальные числа.
// --------------------------------------

// guessNumber nomli funksiya yaratilmoqda — u foydalanuvchidan 1 dan 10 gacha bo‘lgan son qabul qiladi
function guessNumber(userNumber) {
	// Agar foydalanuvchi kiritgan qiymat son bo‘lmasa (masalan: matn, null, undefined) — xato xabar chiqadi
	if (typeof userNumber !== 'number') {
		console.log('Xatolik: Iltimos, son kiriting.');
		return; // Funksiya shu yerda to‘xtaydi
	}

	// Agar son 1 dan kichik yoki 10 dan katta bo‘lsa — xato xabar chiqariladi
	if (userNumber < 1 || userNumber >= 10) {
		console.log('Xatolik: 1 dan 10 gacha bo‘lgan son kiriting.');
		return; // Funksiya shu yerda to‘xtaydi
	}

	// Bu yerda 1 dan 10 gacha tasodifiy son hosil qilinadi
	// Math.random() -> 0 dan 1 gacha tasodifiy son
	// * 10 -> 0 dan 10 gacha
	// Math.floor(...) -> pastga qarab yaxlitlaydi (0 dan 9 gacha)
	// + 1 -> 1 dan 10 gacha bo‘lgan butun sonlar diapazoni hosil bo‘ladi
	const randomNumber = Math.floor(Math.random() * 10) + 1;

	// Foydalanuvchi raqami tasodifiy son bilan tengligini tekshiramiz
	if (userNumber === randomNumber) {
		// Agar raqamlar bir xil bo‘lsa — foydalanuvchi yutadi
		console.log('Siz yutdingiz, tabriklayman!');
	} else {
		// Aks holda — foydalanuvchi yutqazadi, ikkala raqam konsolga chiqariladi
		console.log(
			`Siz noto‘g‘ri taxmin qildingiz. Siz tanlagan raqam: ${userNumber}, lekin paydo bo‘lgan raqam: ${randomNumber}`,
		);
	}
}

// Funksiyani chaqiryapmiz va unga 5 raqamini uzatyapmiz
// Bu raqam 1 dan 10 gacha oraliqda bo‘lgan tasodifiy raqam bilan solishtiriladi
guessNumber(5);
