'use strict';
// Strict mode-ni yoqadi. Bu JavaScript kodidagi xatolarni qat'iyroq tekshiradi
// va ba’zi xato ishlov berishlarni taqiqlaydi (masalan, e’lon qilinmagan o‘zgaruvchiga qiymat berish).

const box = document.querySelector('#box');
// HTML dagi id="box" bo‘lgan elementni tanlab oladi va uni `box` o‘zgaruvchisiga saqlaydi.

// box.style.backgroundColor = 'aqua';
// box.style.width = '400px';
// ↑ Style orqali elementning fon rangini "aqua" va kengligini "400px" qilib o‘zgartirish mumkin.

// box.computedStyleMap.cssText = 'background-color: aqua; width: 400px';
// ↑ Bunday yozish to‘g‘ri emas. computedStyleMap orqali cssText bevosita o‘zgartirilmaydi.

// box.computedStyleMap.cssText = `
//   background-color: aqua;
//   width: 400px;
// `;
// ↑ Yuqoridagidek yozish ham ishlamaydi. Faqat ko‘rsatish uchun yozilgan.

// let widthValue = 600 - 200;
// ↑ Yangi o‘zgaruvchi yaratildi, qiymati 600 - 200 = 400 ga teng bo‘ladi.

// box.style.width = `${widthValue}px`;
// ↑ box elementining kengligi hisoblangan qiymat (400px) bilan o‘zgartiriladi.

// box.style.cssText = `
//   background-color: aqua;
//   width: ${widthValue}px;
// `;
// ↑ `cssText` orqali bir vaqtning o‘zida bir nechta style xossalarini qo‘shish mumkin.

// console.log(box.className);
// ↑ box elementining barcha class nomlarini chiqaradi (bitta string sifatida).

// box.className = 'item'
// ↑ box elementining classini butunlay 'item' qilib o‘zgartiradi (oldingi classlar yo‘qoladi).

// box.className += ' item'
// ↑ Elementga yangi class qo‘shadi (eski class ustiga qo‘shiladi).

// console.log(box.classList);
// ↑ classList - bu elementdagi barcha classlarni massivga o‘xshash ro‘yxat sifatida ko‘rsatadi.

// box.classList.add('item');
// ↑ box elementiga 'item' classini qo‘shadi.

// box.classList.add('item', 'second');
// ↑ Bir vaqtning o‘zida bir nechta classlarni qo‘shadi.

// box.classList.remove('second');
// ↑ Elementdan 'second' classini olib tashlaydi.

// if (box.classList.contains('second')) {
// 	box.classList.remove('second');
// } else {
// 	box.classList.add('second');
// }
// ↑ Agar elementda 'second' classi bo‘lsa - uni olib tashlaydi,
//   bo‘lmasa - qo‘shadi.

// box.classList.toggle('second');
// ↑ toggle() - agar class mavjud bo‘lsa olib tashlaydi, yo‘q bo‘lsa qo‘shadi.

// console.log(box.classList.contains('second'));
// ↑ Elementda 'second' classi mavjud yoki yo‘qligini true/false ko‘rinishida chiqaradi.

const currentBtn = document.querySelector('button')[2];
// ↑ Sahifadagi uchinchi (<button>) elementni tanlaydi (indeks 0 dan boshlanadi).

// currentBtn.setAtribut('id', 'btn_id');
// ↑ Bu xato yozilgan. To‘g‘risi setAttribute('id', 'btn_id');
//   Bu qator currentBtn elementiga id="btn_id" qo‘shadi.

// console.log(currentBtn.hasAttribute('id'));
// ↑ Elementda 'id' atributi bor-yo‘qligini tekshiradi (true/false).

// currentBtn.setAtribut('class', 'btn_class')
// ↑ To‘g‘risi: setAttribute('class', 'btn_class')
//   Bu elementning class atributini 'btn_class' qilib o‘rnatadi.

// currentBtn.removeAttribute('class')
// ↑ Elementdagi 'class' atributini butunlay olib tashlaydi.

// console.log(currentBtn.dataset.myattr);
// ↑ data-* atributlariga JavaScript orqali murojaat qilish uchun dataset ishlatiladi.
//   Masalan: <button data-myattr="hello"></button> bo‘lsa, shu qiymatni chiqaradi.

// console.log(currentBtn.getAttribute('data-myattr'))
// ↑ getAttribute() yordamida data-myattr atributining qiymatini chiqaradi.

// console.log(currentBtn.getAttribute('data-myattr2'))
// ↑ Agar bunday atribut bo‘lmasa, `null` qaytaradi.

const item = document.querySelector('div');
// ↑ Sahifadagi birinchi <div> elementini tanlab oladi.

item.classList.add('black');
// ↑ item elementiga 'black' nomli class qo‘shadi.

item.textContent = 'Hello world';
// ↑ Elementning ichki matnini "Hello world" qilib o‘zgartiradi.

// document.body.prepend(item);
// ↑ Elementni sahifa tanasining eng boshiga qo‘shadi.

// document.body.append(item);
// ↑ Elementni sahifa tanasining eng oxiriga qo‘shadi.

// currentBtn.after(item)
// ↑ currentBtn dan keyin item elementini qo‘shadi.

// currentBtn.before(item)
// ↑ currentBtn dan oldin item elementini qo‘shadi.

// currentBtn.remove()
// ↑ currentBtn elementini sahifadan olib tashlaydi.

const parrentWrapper = document.querySelector('.parrent-wrapper');
// ↑ class="parrent-wrapper" bo‘lgan elementni tanlaydi.

// parrentWrapper.insertAdjacentElement('afterbegin', item);
// ↑ item elementini parrentWrapperning ichida eng boshiga joylashtiradi.

// parrentWrapper.insertAdjacentElement('afterend', item);
// ↑ item elementini parrentWrapperdan keyin joylashtiradi.

// parrentWrapper.insertAdjacentElement('beforebegin', item);
// ↑ item elementini parrentWrapperdan oldin joylashtiradi.

// parrentWrapper.insertAdjacentElement('beforeend', item);
// ↑ item elementini parrentWrapper ichining oxiriga joylashtiradi.

// parrentWrapper.append(item);
// ↑ item elementini parrentWrapper ichiga qo‘shadi (oxiriga).

item.textContent += ' Galaxy';
// ↑ Elementning matniga " Galaxy" so‘zini qo‘shadi (oldingi matn ustiga).

item.textContent = '<a href="#">click me</a>';
// ↑ Element ichidagi matnni tozalab, faqat "<a href="#">click me</a>" yozadi.
//   textContent faqat matn sifatida qo‘shadi, HTML sifatida emas, shuning uchun link ishlamaydi,
//   faqat matn sifatida ko‘rinadi.

item.textContent = '<a href="#">click me</a>';
// ↑ Bu ham xuddi yuqoridagidek, yana linkni matn sifatida ko‘rsatadi.

item.textContent += '<a href="#">click me</a>';
// ↑ Yana bitta link matn sifatida qo‘shadi (HTML emas, oddiy matn sifatida chiqariladi).
