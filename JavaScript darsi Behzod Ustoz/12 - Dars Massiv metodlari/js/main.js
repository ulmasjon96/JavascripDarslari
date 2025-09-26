'use strict';

let strings = ['Hello', 'world', 'i', 'am', 'web', 'developer', 'web'],
	names = ['Harry', 'Potter', 'John', 'Smith', 'James', 'Bond'],
	numbers = [10, 13, 5, 21, 35],
	value;

// value = strings;
// value = strings.join(' '); // Massivni stringga aylantiramiz (bo'shliqlarsiz)
// value = strings[1];
// value = strings.length; // Massivdagi elementlar soni
// value = strings.length - 1; // Massivning oxirgi elementining indexi
// value = strings[strings.length - 1]; // Massivning oxirgi elementini o'qib olish

// strings[4] = 'JavaScript'; // Massivning 4 - elementini o'zgartiramiz (web) so'zini JavaScript so'ziga o'zgartiramiz

// delete strings[4]; // Massivning 4 - elementini o'chiradi bu usul massiv uchun to'g'ri kelmaydi

// strings[99] = ' nimadir';

// Metodlar
// value = strings.indexOf('web', 3); // 3 - indexdan boshlab web so'zini aniqlab beradi
// value = strings.lastIndexOf('web'); // Massivning oxiridan boshlab web so'zini aniqlab beradi

// // includes = Berilgan simvolni yoki matnni bor yoki yo'qligini aniqlaydi

// value = strings.includes('web'); // Massivda web so'zini bor yoki yo'qligini aniqlab beradi

// // concat = Matnlarni qo'shish

// value = strings.concat(names); // Massivlarni qo'shish
// value = [].concat(strings, names); // Massivlarni qo'shish
// value = [].concat(strings, names, numbers); // Massivlarni qo'shish

// // shift - Massivning boshini o'chirib tashlaydi

// strings.shift(); // Massivning boshini o'chirib tashlaydi

// // pop - Massivning oxiridan 1 ta element o'chirib tashlaydi

// strings.pop(); // Massivning oxiridan 1 ta element o'chirib tashlaydi

// // push - Massivning oxiriga 1 ta element qo'shamiz

// strings.push('JavaScript'); // Massivning oxiriga JavaScript so'zini qo'shamiz

// // unshift - Massivning boshiga 1 ta element qo'shamiz

// strings.unshift('JavaScript'); // Massivning boshiga JavaScript so'zini qo'shamiz

// // slice = Massivning boshidan oxirigacha har bir elementini o'qib olish

// value = strings.slice(1, 3); // Massivning 1 - dan 3 - gacha har bir elementini o'qib olish

// // splice = Massivning boshidan oxirigacha har bir elementini o'qib olish

// value = strings.splice(1, 3); // Massivning 1 - dan 3 - gacha har bir elementini o'qib olish

// // reverse = Massivni teskari ko'rsatib beradi

// value = strings.reverse();

// // sort = Massivni alifbo tartibida sortirovka qiladi

// value = strings.sort();

// // join = Massivni stringga aylantiramiz

// value = strings.join(' ');

// // split = Stringni massivga aylantiramiz

// value = strings.split(' ');

// // forEach = asl massivni o'zgartirmaydi Undan faqat side-effect (masalan, chop etish yoki tashqi o'zgaruvchilarni o'zgartirish) uchun foydalanish mumkin

// //strings massividagi har bir element uchun funksiya ishlatish (forEach)
// strings.forEach(function (item, index) {
// 	//item - hozirgi element, index - uning tartib raqami
// 	value = item + ' ' + index; // element va uning indeksini birlashtirib string qilish
// 	console.log(value); // natijani konsolga chiqarish
// });

// // map = forEach dan keyin massivni o'zgartirish uchun foydalanish mumkin

// // strings massividagi har bir elementni o'zgartirib yangi massiv yaratish (map)
// value = strings.map(function (item, index) {
// 	// item - hozirgi element, index - uning indeksi (0 dan boshlanadi)
// 	value = item + ' ' + index; // element va uning indeksini birlashtirib yangi qiymat yaratish
// 	return value; // yangi qiymatni yangi massivga qo'shish uchun qaytarish
// });

// // filter = massivni o'zgartirmaydi Undan faqat side-effect (masalan, chop etish yoki tashqi o'zgaruvchilarni o'zgartirish) uchun foydalanish mumkin

// // strings massividagi har bir element uchun funksiya ishlatish (filter)
// value = strings.filter(function (item, index) {
// 	// item - hozirgi element, index - uning tartib raqami
// 	value = item + ' ' + index; // element va uning indeksini birlashtirib string qilish
// 	return value; // stringni qaytarish
// });

// // reduce = massivni o'zgartirmaydi Undan faqat side-effect (masalan, chop etish yoki tashqi o'zgaruvchilarni o'zgartirish) uchun foydalanish mumkin

// // strings massividagi elementlarni bitta qiymatga yig'ish (reduce)
// value = strings.reduce(function (accumulator, currentValue, currentIndex, array) {
// 	// accumulator - oldingi qaytgan qiymat (dastlabki qiymat yoki birinchi element)
// 	// currentValue - hozirgi element qiymati
// 	// currentIndex - hozirgi element indeksi (ixtiyoriy)
// 	// array - asl massiv (ixtiyoriy)

// 	console.log(`Yig'indi: ${accumulator}, Joriy: ${currentValue}, Indeks: ${currentIndex}`);

// 	// Har bir element va indeksni birlashtirib, yangi string hosil qilamiz
// 	let combined = currentValue + ' ' + currentIndex;

// 	// Yangi stringni accumulatorga qo'shamiz (bu misolda har birini alohida qatorga)
// 	return accumulator + '\n' + combined;
// }, ''); // Boshlang'ich qiymat - bo'sh string (initialValue)

// console.log('Yakuniy natija:\n' + value);

// slice - belgilangan massiv diapazoni bo'yicha qiymatlardan yangi massiv yasaydi
value = strings.slice(0, 3); // 0-indeksdan boshlab 3-indeksgacha(3-indeks hisob emas) bo'lgan qiymatlardan massiv yasaydi
value = strings.slice(2, 4); // 2-indeksdan boshlab 4-indeksgacha bo'lgan qiymatlardan massiv yasaydi
value = strings.slice(1, -2); // 1-indeksdan boshlab qiymatlardan yangi massiv yasaydi faqat oxirgi 2 ta qiymatni hisoblamaydi
value = strings.slice(3); // 3-indeksdan boshlab massiv oxirigacha bo'lgan qiymatlardan iborat yangi massiv yasaydi chunki boshlang'ich indeks aniq, oxiri aniq emas shu sabab massivni oxirigacha hisoblaydi

// splice - belgilangan indeksdan boshlab belgilangancha qiymatni kesib oladi

value = null;
// value = strings.splice(0, 3); // 0-indeksdan boshlab 3 ta qiymat kesib oladi
// value = strings.splice(4, 2); // 4-indeksdan boshlab 2 ta qiymat kesib oladi
// value = strings.splice(2); // 2-indeksdan boshlab massiv oxirigacha bo'lgan qiymatlarni kesib oladi
// value = strings.splice(-2); // massiv oxiridan 2 ta qiymatni kesib oladi
// value = strings.splice(1, -2); // [] chunki 1 indeksdan boshlab -2 ta qiymat kesib bo'lmaydi
// value = strings.splice(4, 1); // 4-indeksdan boshlab 1 ta qiymat kesib oladi
// strings.splice(4, 1); // 4-indeksdan boshlab 1 ta qiymat kesib oladi(xuddi o'chirib tashlagandek chunki kesib olingan qismi o'zgaruvchiga yozilmayabdi)
// strings.splice(4, 1, 'frontend'); // 4-indeksdan boshlab 1 ta qiymat kesib oladi va o'rniga 'frontend' qiymatini qoyadi
// strings.splice(4, 2, 'frontend'); // 4-indeksdan boshlab 2 ta qiymat kesib oladi va o'rniga 2 ta qiymat yozadi
// strings.splice(4, 0, 'frontend', 'JavaScript'); // 4-indeksdan boshlab 0 ta qiymat kesib oladi va 2 ta boshqa qiymat qo'shadi

// reverse - massivni teskari qiladi
// strings.reverse();

// // split - matndan belgilangan belgi bo'yicha ajratib massiv yasaydi
// let str1 = 'hello world i am javascript developer',
// 	str2 = 'hello_world_i_am_javascript_developer';

// value = str1.split('');
// value = str1.split(' ');
// value = str2.split('_');

// // join - massiv qiymatlaridan belgilangan belgi bilan birlashtirib yagona matn yasaydi

// // 1. null qiymatini o'zgaruvchiga tayinlash
// value = null; // value o'zgaruvchisiga null (bo'sh) qiymatini beradi
// console.log(value); // Natija: null

// // 2. names massiv elementlarini hech qanday ajratuvchisiz birlashtirish
// value = names.join('');
// console.log(value); // Natija: "HarryPotterJohnSmithJamesBond"

// // 3. names massiv elementlarini pastki chiziq (_) bilan ajratish
// value = names.join('_');
// console.log(value); // Natija: "Harry_Potter_John_Smith_James_Bond"

// // 4. names massiv elementlarini probel (bo'sh joy) bilan ajratish
// value = names.join(' ');
// console.log(value); // Natija: "Harry Potter John Smith James Bond"

// // 5. names massiv elementlarini '+' belgisi bilan ajratish
// value = names.join('+');
// console.log(value); // Natija: "Harry+Potter+John+Smith+James+Bond"

// // 6. numbers massiv elementlarini hech qanday ajratuvchisiz birlashtirish
// value = numbers.join('');
// console.log(value); // Natija: "101352135" (string ko'rinishida)

// // 7. numbers massiv elementlarini probel bilan ajratish
// value = numbers.join(' ');
// console.log(value); // Natija: "10 13 5 21 35"

// // 8. numbers massiv elementlarini vergul va probel bilan ajratish
// value = numbers.join(', ');
// console.log(value); // Natija: "10, 13, 5, 21, 35"

// // 9. numbers massiv elementlarini pastki chiziq (_) bilan ajratish
// value = numbers.join('_');
// console.log(value); // Natija: "10_13_5_21_35"

// // 10. numbers massiv elementlarini chiziqcha (-) bilan ajratish
// value = numbers.join('-');
// console.log(value); // Natija: "10-13-5-21-35"

// // Asl string (pastki chiziqcha bilan ajratilgan)
// str2 = 'hello_world_i_am_javascript_developer';

// // Barcha pastki chiziqchalarni vergul va probel bilan almashtirish
// value = str2.replaceAll('_', ', ');

// // value = strings.join('');

// console.log(value);
// console.log(strings);
// console.log(names);
// console.log(numbers);
