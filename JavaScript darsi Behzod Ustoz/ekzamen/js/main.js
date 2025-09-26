'use strict';

//-----------------------------------------------------
// 1) Shunday funksiya yaratingki u 2 ta parametrga(a va b) ega bo'lsin. Ushbu parametrlarga butun son kelib tushadi(a < b). Funksiya ushbu parametr qiymatlaridan a dan b gacha bo'lgan sonlardan massiv yasab qaytarsin.
// Misol:
// a = 1
// b = 4
// --> [1, 2, 3, 4]
//-----------------------------------------------------

// 1. Boshlang'ich qiymatlarni belgilab
const a = 1; // Massivning boshlang'ich soni
const b = 4; // Massivning oxirgi soni

// 2. Ternar operator va for sikli yordamida massiv yaratish
const result =
	a > b // 3. Shartni tekshirish
		? [] // 4. Agar a > b bo'lsa, bo'sh massiv qaytarish
		: (() => {
				// 5. Aks holda, IIFE (darhol ishga tushadigan funksiya)
				const arr = []; // 6. Bo'sh massiv yaratish

				// 7. For tsikli - a dan b gacha sonlarni yig'ish
				for (let i = a; i <= b; i++) {
					arr.push(i); // 8. Har bir sonni massivga qo'shish
				}

				return arr; // 9. Tayyor massivni qaytarish
		  })(); // 10. Funksiyani darhol chaqirish

// 11. Natijani ko'rsatish
console.log(result); // [1, 2, 3, 4]

//-----------------------------------------------------
// 2) Salom beruvchi funksiya yarating, funksiyaning 2 ta parametri bo'lsin. Bu funksiyaning parametrlarga 2 ta nom kiradi va nomga binoan salom beradi
//     Misol:
//     Agar:	                            Natija:
//     ikkala nom bir xil bo'lganda 	    'Salom boss'
//     aksincha	                         'Salom, mehmon'
//-----------------------------------------------------

// 1. O'zgaruvchilarni e'lon qilib qiymat berish kerak
const ism1 = 'Ali'; // Birinchi ismni saqlash
const ism2 = 'Vali'; // Ikkinchi ismni saqlash

// 2. Shart operatori (if-else)
if (ism1 === ism2) {
	// 3. Ikkala ismni solishtiramiz
	// 4. Agar shart to'g'ri bo'lsa (ismlar bir xil)
	console.log(`Salom boss ${ism1}`); // 5. Boss uchun xabar
} else {
	// 6. Aks holda (ismlar farq qilsa)
	console.log(`Salom, mehmon ${ism1} va ${ism2}`); // 7. Mehmonlar uchun xabar
}

//-----------------------------------------------------
// 3) Parametriga kelib tushgan sonning kvadratini qaytaruvchi funksiya yarating
//   Misol: 2 => 4, 3 => 9
//-----------------------------------------------------

let son = 2; // 1. Parametrga kelib tushgan son

// 2. functio yaratamiz va sonni kvadratini qaytarib beramiz
function kvadrat(son) {
	return son ** 2; // 3. son kiritilganda shu sonni kvadratini qaytarib beradigan funksiya
}

console.log(kvadrat(son)); // 4. natijada son o'zgaruvchisiga qiymat kiritilganda u sonni kvadratini qaytaradi

//-----------------------------------------------------
// 4) Funksiya parametriga sondan tashkil topgan tasodifiy massiv qabul qiladi va sonlarni ko'paytmasini qaytaradi.
//   Misol: [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
//-----------------------------------------------------

// 1. massiv yaratamiz
const massiv = [1, 2, 3, 4];

// 2. funksiya yaratamiz va massivni sonlarini ko'paytmasini qaytarib beramiz
function sonlar(massiv) {
	// reduce() massivni sonlarini ko'paytmasini qaytarib beradigan funksiya
	return massiv.reduce((a, b) => a * b, 1); // 3. massivni sonlarini ko'paytmasini qaytarib beradigan funksiya
}

console.log(sonlar(massiv)); // 4. natijada massiv o'zgaruvchisiga qiymat kiritilganda u massivni sonlarini ko'paytmasini qaytaradi

//-----------------------------------------------------
// 5) Funksiya parametriga massiv qabul qiladi va u parametrni teskarisini qaytarsin
//     Misol (kirish -> chiqish)
//      [1, 2, 3, 4]  -> [4, 3, 2, 1]
//      [9, 2, 0, 7]  -> [7, 0, 2, 9]
//-----------------------------------------------------

// 1. massiv yaratamiz
const massiv2 = [1, 2, 3, 4];

// 2. funksiya yaratamiz va massivni teskarisini qaytarib beramiz
function teskar(massiv2) {
	// reverse() massivni teskarisini qaytarib beradigan funksiya
	return massiv2.reverse(); // 3. massivni teskarisini qaytarib beradigan funksiya
}

console.log(teskar(massiv2)); // 4. natijada massiv o'zgaruvchisiga qiymat kiritilganda u massivni teskarisini qaytaradi

//-----------------------------------------------------
// 6) Matn so'zlaridan massiv hosil qiluvchi funksiya yarating.

//     Misol (kirish ==> chiqish):
//     "Robin Singh" ==> ["Robin", "Singh"]

//     "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
//-----------------------------------------------------

// 1. matn yaratamiz
const matn = 'Robin Singh';

// 2. funksiya yaratamiz va matnni so'zlarini qaytarib beramiz
function sozlar(matn) {
	// split() matnni so'zlarini qaytarib beradigan funksiya
	return matn.split(' '); // 3. matnni so'zlarini qaytarib beradigan funksiya
}

console.log(sozlar(matn)); // 4. natijada matn o'zgaruvchisiga qiymat kiritilganda u matnni so'zlarini qaytaradi

//-----------------------------------------------------
// 7) Funksiya parametriga son qabul qiladi, agar u son juft bo'lsa u sonni 8 ga ko'paytirib qaytaradi aksincha 9 ga ko'paytirib qaytaradi
//-----------------------------------------------------

const kiritilgaSon = 5; // 1. Parametrga son kiritamiz

// if-else yordamida amalni bacharamiz
if (kiritilgaSon % 2 == 0) {
	// agar son o'zgaruvchisiga kiritilgan son qoldigi 0 bo'lsa
	// 2. son juft bo'ladi va sonni 8 ga ko'paytiradi
	console.log(kiritilgaSon * 8);
} else {
	// 3. sonni qoldig'i bo'lsa sonni 9 ga ko'paytiradi
	console.log(kiritilgaSon * 9);
}

//-----------------------------------------------------
// 8) Funksiya 2 ta matn ko'rinishida bo'lgan son qabul qiladi va ikkala sonni yig;indisini matn ko'rinishida qaytaradi:

//     Misol: ( kirish1, kirish2 --> chiqish )

//     "4",  "5" --> "9"
//     "34", "5" --> "39"
//     "", "" --> "0"
//     "2", "" --> "2"
//     "-5", "3" --> "-2"
//-----------------------------------------------------

const son1 = ''; // 1. Birinchi parametr (matn ko'rinishida)
const son2 = ''; // 2. Ikkinchi parametr (matn ko'rinishida)

// 3. Funksiya - matn ko'rinishidagi sonlarni yig'indisini qaytaradi
function yigindis(son1, son2) {
	// 4. Bo'sh matnlarni 0 ga aylantiramiz va sonlarga o'tkazamiz
	const num1 = son1 === '' ? 0 : parseInt(son1);
	const num2 = son2 === '' ? 0 : parseInt(son2);

	// 5. Yig'indini hisoblab, matn ko'rinishida qaytaramiz
	return num1 + num2;
}

console.log(yigindis(son1, son2)); // "0"

//-----------------------------------------------------
// 9) Funskiya parametriga qabul qilgan nomni "initsiallarga" ajratsin. Bu deganiki 2 ism va familiyani birinchi harflari nuqta bilan yozilib qoyilsin

//     Misol:

//     Sam Harris => S.H
//     patrick feeney => P.F
//-----------------------------------------------------

const ism = 'Ulmasjon'; // 1. - Parametrga ism kiritamiz
const familiya = 'Ismatov'; // 2. - Parametrga familiya kiritamiz

// 3. Funksiya - ism va familiyani "initsiallarga" ajratsin
function initsial(ism, familiya) {
	// 4. ism va familiyani "initsiallarga" ajratsin
	return ism[0] + '.' + familiya[0];
}

console.log(initsial(ism, familiya)); // natijada ism va familiyani 1 chi harflari oladi va nuqta bilan ajratiladi

//-----------------------------------------------------
// 10) Funksiya yarating agar ushbu funksiyaning parametriga true kelib tushsa 'Yes' matnini qaytarsin aksincha agar false kelib tushsa 'No' qaytarsin.
//-----------------------------------------------------

const parametr = 0; // 1. Parametrga qiymat kiritamiz

// 3. Funksiya - parametrga kelib tushgan qiymatni qaytaradi
function qiymat(parametr) {
	// 4. Parametrga kelib tushgan qiymatni qaytaradi
	return parametr ? 'Yes' : 'No';
}

console.log(qiymat(parametr)); // natijada parametrga kelib tushgan qiymatni qaytaradi Javob false chiqadi
