// ========== 1. DOM obyekti va asosiy xususiyatlar ==========
console.log(document); // Butun HTML hujjati
console.log(document.title); // Sahifa sarlavhasi
console.log(document.URL); // Sahifaning URL manzili
console.log(document.body); // <body> elementi

// ========== 2. Elementlarni tanlash ==========
const title = document.getElementById('title'); // ID bo‘yicha olish
const text = document.querySelector('.text'); // CSS class orqali olish
const btn = document.getElementById('btn'); // button ID orqali
const form = document.getElementById('myForm'); // form ID orqali

// ========== 3. Yaratish, o‘zgartirish va qo‘shish ==========
const newDiv = document.createElement('div'); // yangi <div>
const newText = document.createTextNode('Yangi div ichidagi matn');
newDiv.appendChild(newText); // matnni div ichiga qo‘shish
document.body.appendChild(newDiv); // divni sahifaga qo‘shish

// innerHTML - HTML ni o‘rnatish
title.innerHTML = "<span style='color:blue'>DOMga xush kelibsiz!</span>";

// textContent - faqat matnni o‘rnatish
text.textContent = 'DOM orqali matn o‘zgartirildi';

// ========== 4. Style va class bilan ishlash ==========
title.style.fontSize = '30px'; // font o‘lchami
title.style.color = 'darkgreen'; // rang
title.classList.add('highlight'); // class qo‘shish
title.classList.remove('highlight'); // class o‘chirish
title.classList.toggle('highlight'); // bor bo‘lsa o‘chiradi, yo‘q bo‘lsa qo‘shadi

// ========== 5. Atributlar bilan ishlash ==========
title.setAttribute('data-type', 'sarlavha'); // maxsus atribut qo‘shish
console.log(title.getAttribute('data-type')); // atribut qiymatini olish
title.removeAttribute('data-type'); // atributni o‘chirish

// ========== 6. Hodisalar bilan ishlash ==========
btn.addEventListener('click', function () {
	alert('Tugma bosildi!');
});

// ========== 7. Formani yuborishni ushlash ==========
form.addEventListener('submit', function (e) {
	e.preventDefault(); // sahifa qayta yuklanmasin
	const name = document.getElementById('nameInput').value;
	alert('Ismingiz: ' + name);
});

// ========== 8. DOM traversali (ko‘chish) ==========
console.log(title.parentNode); // Ota element
console.log(document.body.children); // Faqat elementlar
console.log(title.nextElementSibling); // Keyingi element (p)
console.log(text.previousElementSibling); // Oldingi element (h1)
console.log(document.body.firstElementChild); // body ichidagi birinchi element

// ========== 9. Elementlarni o‘chirish va almashtirish ==========
const p = document.createElement('p');
p.textContent = 'Bu yangi paragraf';
document.body.appendChild(p); // Yaratilgan paragrafni sahifaga qo‘shish

const newP = document.createElement('p');
newP.textContent = 'Almashtirilgan paragraf';
document.body.replaceChild(newP, p); // p o‘rniga newP ni qo‘yish

// O‘chirish:
// newP.remove();                              // yangi usul
// document.body.removeChild(newP);            // eski usul

// ========== 10. Scroll va fokus ==========
newP.scrollIntoView({ behavior: 'smooth' }); // elementni ko‘rinadigan qilish
// document.getElementById("nameInput").focus(); // inputga fokus berish

// ========== 11. NodeType turlari ==========
console.log('Node turi:', title.nodeType); // 1 = element

// ========== 12. Qo‘shimcha foydali usullar ==========
window.scrollTo(0, 0); // sahifa yuqoriga ko‘tariladi
console.log('Sahifa URL:', window.location.href);

// DOM yaratish, hodisa qo‘shish, style, travers, atribut — hammasi bitta misolda ishlatilgan
