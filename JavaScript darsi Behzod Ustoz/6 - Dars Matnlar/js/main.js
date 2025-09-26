'use strict';

let firstName = "O'lmas",
	lastName = 'Ismatov',
	str = 'Hello world i am web developer',
	info = str + 'Men ' + firstName + ' ' + lastName,
	value;

value = 'Hello';
value = 'World';
value = value + ' ' + value;

value = 'he says: "i am developer"';
value = `he says: "i'm developer"`;

value = 'he says: "i\'m developer"';
value = 'u dediki: "o\'g\'limga namuna" ';

// value = 'tasks:
// 1. task
// 2. task
// 3. task
// '; // 1 talik qo'shtirnoq xatolik beradi

// value = "tasks:
// 1. task
// 2. task
// 3. task
// "; // 2 talik qo'shtirnoq xatolik beradi

// value = `tasks:
// 1. task
// 2. task
// 3. task
// `; // bektik qo'shtirnoq xatolik bermaydi

/** qo'shtirnoqlar va matnlarda kerakli harakatlarni o'zgartirish
 * \n - yangi qator
 * \t - tab
 * \' - tek qo'shtirnoq
 * \" - uch qo'shtirnoq
 */

// value = 'tasks: \n\t1. task \n\t2. task \n\t3. task';

// let age = 2025 - 2000;

// value = 'i am age years old';
// value = 'i am ' + age + ' years old';
// value = `i am ${age} years old`;
// value = `i am ${2025 - 2000} years old`;

// firstName = "O'lmas";
// value = firstName[0];
// value = firstName[1];
// value = firstName.length; // matndagi sinvollar soni
// value = firstName.length - 1; // matnning oxirgi indexsi
// value = firstName[firstName.length - 1]; // matnning oxirgi belgisini olish
// value = str[str.length - 1];
// value = lastName[lastName.length - 1];

// value = 'Hello' + 'world'; // matnlarni qo'shish "konkatenatsiya" qilish degani o'rtasida space bo'lmaydi
// value = firstName + lastName; // bundaham o'rtasida space bo'lmaydi
// value = firstName + ' ' + lastName; // bunda esa o'rtasida space bo'ladi
// value = `${firstName} ${lastName}`;

// // Metodlar
// str = 'Hello world i am web developer';

// indexOf = Berilgan simvolni yoki matnni indexini aniqlab beradi
// value = str.indexOf('o'); // matnni boshidan kelgan 1 - o harf(simvolini) indexini topadi
// value = str.indexOf('o', 5); // matnni boshidan kelgan 5 - o harf(simvolini) indexini topadi
// value = str.indexOf('o', 8); // matnni boshidan kelgan 8 - o harf(simvolini) indexini topadi
// value = str.indexOf('web');
// value = str.lastIndexOf('o'); // matnni oxiridan kelgan 1 - o harf(simvolini) indexini topadi
// value = str.indexOf('asd'); // -1 qaytaradi chunki bunday simvol yoki matn yo'q

// // includes - Berilgan simvolni yoki matnni bor yoki yo'qligini aniqlaydi
// value = str.includes('o'); // true
// value = str.includes('o', 5); // true
// value = str.includes('o', 8); // false
// value = str.includes('web'); // true
// value = str.includes('asd'); // false

// // concat = Matnlarni qo'shish
// value = str.concat(' ', "yangi matnni qo'shdim"); // matnlarni qo'shish
// value = firstName.concat(' ', lastName);

// // upperCase = Matnni katta harflarga o'tkazib beradi
// value = str.toUpperCase(); // matnni katta harflarga o'tkazib beradi

// // lowerCase = Matnni kichkina harflarga o'tkazib beradi
// value = str.toLowerCase(); // matnni kichkina harflarga o'tkazib beradi

// // slice = Matnni qismini olib tashlaydi
// value = str.slice(0, 5); // matnni boshidan kelgan 0 - 5 - qismini olib tashlaydi
// value = str.slice(5); // matnni boshidan kelgan 5 - qismini olib tashlaydi
// value = str.slice(6, 11); // matnni oxiridan kelgan 6  - 11 qismini olib tashlaydi
// value = str.slice(6, -9); // matnni oxiridan kelgan 6 - (-9)qismini olib tashlaydi
// value = str.slice(-9); // matnni oxiridan kelgan (-9)qismini olib tashlaydi

// // replace = Matnni o'zgartirish

// value = str.replace('web', 'frontend'); // matnni o'zgartiradi va web so'zini frontend so'ziga o'zgartiradi

// // replaseAll = Matndagi barcha so'zlarga tasir qiladi
// value = str.replaceAll('o', '0');
// value = str.replaceAll(' ', '_');

// // repeat = Matnni qayta ishlatadi
// value = firstName.repeat(3);

// // split = Matnni qayta ishlatadi
// value = firstName.split(''); // bu JavaScript string metod bo‘lib, matnni belgilangan ajratkich bo‘yicha ajratib, massivga (array) aylantiradi

// // trim = Matnni qayta ishlatadi
// value = firstName.trim(); // bu JavaScript string metodi bo‘lib, matnning boshida va oxiridagi bo‘sh joylarni (space, tab, newline) olib tashlaydi.

// // charAt = Matnni qayta ishlatadi
// value = firstName.charAt(0); // bu JavaScript string metodi bo‘lib, berilgan indeksdagi belgini (harfni) qaytaradi.

// // charCodeAt = Matnni qayta ishlatadi
// value = firstName.charCodeAt(0); // JavaScript metod bo‘lib, berilgan indeksdagi belgining UTF-16 (Unicode) kodini qaytaradi.

// // substr = Matnni qayta ishlatadi
// value = firstName.substr(0, 3); // bu JavaScript metodi bo‘lib, matndan boshlanish indeksidan boshlab, berilgan uzunlikdagi qismni ajratib oladi.

// // substr = Matnni qayta ishlatadi
// value = firstName.substring(0, 3); // bu JavaScript metodi bo‘lib, berilgan boshlanish va tugash indekslari orasidagi belgilarni matndan ajratib oladi.

// // indexOf = Matnni qayta ishlatadi
// value = firstName.indexOf('l'); // bu JavaScript metodi bo‘lib, berilgan belgini (harfni) matndan ajratib oladi va sonini ko'rsatadi.

// console.log(value);
// // console.log(str);

// UYGA VAZIFA

// // 1 chi misol Получить первую и последнюю буквы строки

// let str = 'some test string';
// let value = str[0] + ' .... ' + str[str.length - 1];

// // 2 chi misol Сделать первую и последнюю буквы в верхнем регистре

// let str = 'some test string';
// let value = (str[0] + ' .... ' + str.at(-1)).toUpperCase();

// // 3 chi misol Найти положение слова ‘string’ в строке

// let str = 'some test string';
// let value = str.slice(str.indexOf('string'));

// // 4 chi misol  Найти положение второго пробела (“вручную” ничего не считать)

// let str = 'some test string';
// let value = str.lastIndexOf(' ');

// // 5 chi misol Получить строку с 5-го символа длиной 4 буквы

// let str = 'some test string';
// let value = str.slice(5, 9);

// // 6 chi misol Получить строку с 5-го по 9-й символы

// let str = 'some test string';
// let value = str.slice(5, 9);

// // 7 chi misol Получить новую строку из исходной путем удаления последних 6-и символов (то есть исходная строка без последних 6и символов)

// let str = 'some test string';
// let value = str.slice(0, -6);

// // 8 chi misol Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”

// let a = 20;
// let b = 16;
// let value = ${a}${b};

// console.log(value);
