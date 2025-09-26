'use strict';

// let value;

// value = 13;
// value = -13;
// value = 13.45;
// value = -13.45;
// value = Infinity;
// value = -Infinity;

// value = 15 + 13; // 28
// value = 15 - 5; // 10
// value = 2 * 16; // 32
// value = 18 / 9; // 2
// value = 18 % 2; // sonni 2 ga bo'lingandagi qolgan qoldig'ini aniqlash javob (0)
// value = 17 % 2; // sonni 2 ga bo'lingandagi qolgan qoldig'ini aniqlash javob (1)
// value = 3 ** 2; // 3 ni kvadratini chiqarib beradi javob (9)
// value = 2 ** 8; // 256
// value = 64 ** (1 / 2); // 64 ** 0.5 = 8

// value = 10;
// value = value + 3; // birinchi berilgan o'zgaruvchini qiymatiga 3 qo'shadi va javobi (13)
// value = value * 3; // 30
// value = value / 3; // 3.3333
// value = value - 3; // 7

// value += 3; // 13
// value -= 3; // 7
// value *= 3; // 30
// value /= 3; // 3.3333

// value = 3 + '3'; // '33'
// value = 3 - '3'; // 0
// value = 3 * '3'; // 9
// value = 3 / '3'; // 1
// value = '3' * '3'; // 9
// value = 3 * '3a'; // 1

/** inkrement va dikrement
 * Agar inkrement va dikrement o'zgaruvchidan oldin turgan bo'lsa u shu zahotiyoq ishlab beradi
 * Agar inkrement va dikrement o'zgaruvchidan keyin turgan bo'lsa u shu protsesdagi barcha amallar tugallanganidan keyin ishlab beradi
 *  */

// value++; // 11
// value--; // 9
// --value; // 9 { boshqa amalga o'tgandan keyin ishlaydi}
// ++value; // 11

// Kasr sonlar bilan amallar

// value = 3.3 * 3.3; // 10.8899999
// value = (33 * 33) / 100; // 10.89
// value = (3.3 * 3.3).toFixed(4); // "10.89"
// value = +(3.3 * 3.3).toFixed(4); // son qilib beradi 10.89
// value = Number((3.3 * 3.3).toFixed(2)); // son qilib beradi 10.89
// value = parseFloat((3.3 * 3.3).toFixed(2)); // son qilib beradi 10.89 va parseFloat

// object Math

// value = Math;
// value = Math.PI; // 3.14
// value = Math.E; //
// value = Math.random(); // 0 dan 1 gacha bo'lgan sonlarni olib beradi kasrlari bilan
// value = Math.random() * 10; // 1 dan 10 gacha bo'lgan sonlarni olib beradi kasrlari bilan
// value = parseInt(Math.random() * 10); // 0 dan 9 gacha bo'lgan sonlarni olib beradi kasrlarsiz
// value = (Math.random() * 10).toFixed(0); // 0 dan 10 gacha bo'lgan sonlarni olib beradi kasrlarsiz
// value = Math.round(2.3); // kasr son 2.5 da kam bo'lsa u 2 sonini yaxlitlab beradi
// value = Math.round(2.3); // kasr son 2.5 da baland bo'lsa u 3 sonini yaxlitlab beradi
// value = Math.ceil(2.1); // berilgan qiymatni har doim katta tomonga yaxlitlab beradi
// value = Math.floor(2.9999); // berilgan qiymatni har doim kichkina tomonga yaxlitlab beradi
// value = Math.ceil(-3.3); // berilgan qiymat minus bilan boshlangan bo'lsa har doim kichik tomonga yaxlitlab beradi
// value = Math.floor(-3.3); // berilgan qiymat minus bilan boshlangan bo'lsa har doim katta tomonga yaxlitlab beradi
// value = Math.max(16, 15, 10, 5, 78, 13); // 78
// value = Math.min(16, 15, 10, 5, 78, 13); // 5

// console.log(value);

// UYGA VAZIFA

// // 1 chi masala
// let value; // O'zgaruvchi yaratildi
// value = Math.PI.toFixed(2); // O'zgaruvchiga qiymat berildi va nuqtadan keyin 2 ta raqamdan iborat qilindi
// console.log(value); // javobi 3.14 chiqadi

// // 2 chi masala
// let max = Math.max(15, 11, 16, 12, 51, 12, 13, 51); // O'zgaruvchiga qiymat berildi va max qiymatini olib berildi
// let min = Math.min(15, 11, 16, 12, 51, 12, 13, 51); // O'zgaruvchiga qiymat berildi va min qiymatini olib berildi
// console.log(max, min); // javobi 51 va 11 chiqadi

// // 3 chi masala
// let a_value = Math.random().toFixed(2); // O'zgaruvchiga (0 dan 1 gacha) bo'lgan qiymat berildi va nuqtadan keyin 2 ta raqamdan iborat qilindi
// let b_value = Math.floor(Math.random() * 10); // O'zgaruvchiga (0 dan 9 gacha) bo'lgan qiymat berildi va butun sonni olib berildi
// console.log(a_value, b_value);

// // 4 chi masala
// let num = 0.6 + 0.7; // O'zgaruvchiga qiymat berildi
// console.log(parseFloat(num)); // javobi 1.3 chiqadi

// // 5 chi masala
// value = '100$'; // O'zgaruvchiga matn (string) ko'rinishidagi qiymat berildi
// console.log(parseInt(value)); // Natija: 100

// // parseInt() funksiyasi matn (string) ichidan boshlanishidan boshlab raqamlarni o‘qib, ularni butun songa aylantiradi. Agar birinchi belgilar raqam bo‘lsa, o‘sha raqamlar o‘qiladi va qolgan belgilar e’tiborga olinmaydi. Agar matn raqam bilan boshlanmasa, NaN (Not a Number) qaytaradi.
