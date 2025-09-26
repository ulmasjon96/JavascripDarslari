'use strict';

// // Asosiy konteyner yaratish
// const container = document.createElement('div');
// document.body.appendChild(container);

// // 1. Box elementini yaratish
// const box = document.createElement('div');
// box.className = 'box';
// box.id = 'box';
// Object.assign(box.style, {
// 	width: '100px',
// 	height: '100px',
// 	backgroundColor: '#3498db',
// 	margin: '20px',
// 	border: '2px solid #2980b9',
// });
// container.appendChild(box);

// // 2. Tugmalarni yaratish (1-5)
// for (let i = 1; i <= 5; i++) {
// 	const button = document.createElement('button');
// 	button.textContent = i;
// 	Object.assign(button.style, {
// 		padding: '8px 16px',
// 		margin: '5px',
// 		backgroundColor: '#2ecc71',
// 		color: 'white',
// 		border: 'none',
// 		borderRadius: '4px',
// 		cursor: 'pointer',
// 	});

// 	// Tugma hover effekti
// 	button.addEventListener('mouseenter', () => {
// 		button.style.backgroundColor = '#27ae60';
// 	});
// 	button.addEventListener('mouseleave', () => {
// 		button.style.backgroundColor = '#2ecc71';
// 	});

// 	container.appendChild(button);
// }

// // 3. Doiralarni yaratish (3 ta)
// for (let i = 0; i < 3; i++) {
// 	const circle = document.createElement('div');
// 	circle.className = 'circle';
// 	Object.assign(circle.style, {
// 		width: '50px',
// 		height: '50px',
// 		backgroundColor: '#e74c3c',
// 		borderRadius: '50%',
// 		display: 'inline-block',
// 		margin: '10px',
// 	});
// 	container.appendChild(circle);
// }

// // 4. ParentWrapper va ichidagi elementlar
// const parentWrapper = document.createElement('div');
// parentWrapper.className = 'parentWrapper';
// Object.assign(parentWrapper.style, {
// 	padding: '20px',
// 	backgroundColor: '#f1f1f1',
// 	margin: '20px 0',
// });

// const wrapper = document.createElement('div');
// wrapper.className = 'wrapper';
// Object.assign(wrapper.style, {
// 	display: 'flex',
// 	justifyContent: 'space-around',
// 	padding: '10px',
// 	backgroundColor: '#ecf0f1',
// });

// // 3 ta yurakcha yaratish
// for (let i = 0; i < 3; i++) {
// 	const heart = createHeart();
// 	wrapper.appendChild(heart);
// }

// parentWrapper.appendChild(wrapper);
// container.appendChild(parentWrapper);

// // 5. Qo'shimcha 2 ta yurakcha
// for (let i = 0; i < 2; i++) {
// 	const heart = createHeart();
// 	container.appendChild(heart);
// }

// // 6. Birinchi formani yaratish
// const firstForm = document.createElement('form');
// firstForm.name = 'firstForm';
// Object.assign(firstForm.style, {
// 	margin: '20px 0',
// 	padding: '20px',
// 	backgroundColor: '#f9f9f9',
// 	borderRadius: '5px',
// });

// const usernameInput = document.createElement('input');
// usernameInput.name = 'username';
// usernameInput.type = 'text';
// usernameInput.placeholder = 'Username';
// Object.assign(usernameInput.style, {
// 	padding: '8px',
// 	margin: '5px 0',
// 	width: '200px',
// 	border: '1px solid #ddd',
// 	borderRadius: '4px',
// });

// const checkInput = document.createElement('input');
// checkInput.name = 'check';
// checkInput.type = 'checkbox';
// Object.assign(checkInput.style, {
// 	margin: '10px',
// });

// const checkLabel = document.createElement('label');
// checkLabel.textContent = ' I agree';

// const submitBtn = document.createElement('input');
// submitBtn.name = 'submitBtn';
// submitBtn.type = 'submit';
// submitBtn.value = 'Submit';
// Object.assign(submitBtn.style, {
// 	padding: '8px 16px',
// 	backgroundColor: '#3498db',
// 	color: 'white',
// 	border: 'none',
// 	borderRadius: '4px',
// 	cursor: 'pointer',
// });

// submitBtn.addEventListener('mouseenter', () => {
// 	submitBtn.style.backgroundColor = '#2980b9';
// });
// submitBtn.addEventListener('mouseleave', () => {
// 	submitBtn.style.backgroundColor = '#3498db';
// });

// firstForm.appendChild(usernameInput);
// firstForm.appendChild(checkInput);
// firstForm.appendChild(checkLabel);
// firstForm.appendChild(document.createElement('br'));
// firstForm.appendChild(submitBtn);
// container.appendChild(firstForm);

// // 7. Ikkinchi formani yaratish
// const secondForm = document.createElement('form');
// secondForm.name = 'secondForm';
// Object.assign(secondForm.style, {
// 	margin: '20px 0',
// 	padding: '20px',
// 	backgroundColor: '#f9f9f9',
// 	borderRadius: '5px',
// });

// const textInput = document.createElement('input');
// textInput.type = 'text';
// textInput.placeholder = 'Enter something';
// Object.assign(textInput.style, {
// 	padding: '8px',
// 	margin: '5px 0',
// 	width: '200px',
// 	border: '1px solid #ddd',
// 	borderRadius: '4px',
// });

// const formButton = document.createElement('button');
// formButton.textContent = 'Submit';
// Object.assign(formButton.style, {
// 	padding: '8px 16px',
// 	backgroundColor: '#3498db',
// 	color: 'white',
// 	border: 'none',
// 	borderRadius: '4px',
// 	cursor: 'pointer',
// });

// formButton.addEventListener('mouseenter', () => {
// 	formButton.style.backgroundColor = '#2980b9';
// });
// formButton.addEventListener('mouseleave', () => {
// 	formButton.style.backgroundColor = '#3498db';
// });

// secondForm.appendChild(textInput);
// secondForm.appendChild(formButton);
// container.appendChild(secondForm);

// // Yurakcha yaratish funksiyasi
// function createHeart() {
// 	const heart = document.createElement('div');
// 	heart.className = 'heart';
// 	Object.assign(heart.style, {
// 		width: '30px',
// 		height: '30px',
// 		backgroundColor: '#9b59b6',
// 		display: 'inline-block',
// 		margin: '5px',
// 		position: 'relative',
// 		transform: 'rotate(45deg)',
// 	});

// 	// Yurakning chap qismi
// 	const before = document.createElement('div');
// 	Object.assign(before.style, {
// 		content: '""',
// 		width: '30px',
// 		height: '30px',
// 		backgroundColor: '#9b59b6',
// 		borderRadius: '50%',
// 		position: 'absolute',
// 		top: '-15px',
// 		left: '0',
// 	});

// 	// Yurakning o'ng qismi
// 	const after = document.createElement('div');
// 	Object.assign(after.style, {
// 		content: '""',
// 		width: '30px',
// 		height: '30px',
// 		backgroundColor: '#9b59b6',
// 		borderRadius: '50%',
// 		position: 'absolute',
// 		top: '0',
// 		left: '-15px',
// 	});

// 	heart.appendChild(before);
// 	heart.appendChild(after);
// 	return heart;
// }

// // DOM (Document Object Model) - HTML hujjatini obyekt ko'rinishida ifodalash

// // 1. Document obyektini ko'rish
// console.log(document); // Butun HTML hujjatini ko'rsatadi
// console.dir(document); // Document obyektining xususiyatlarini obyekt ko'rinishida ko'rsatadi

// // 2. Documentning asosiy xususiyatlari
// console.log(document.title); // Sahifa sarlavhasi (<title> tagidagi matn)
// console.log(document.URL); // Sahifaning to'liq URL manzili
// console.log(document.body); // <body> elementini ko'rsatadi
// console.log(document.head); // <head> elementini ko'rsatadi

// /****************************** ESKI USULLAR ******************************/
// // 3. Elementlarni tanlashning eski usullari

// // ID orqali element tanlash (faqat bitta element qaytaradi)
// const box = document.getElementById('box'); // 'box' id-li elementni tanlaydi

// // Teg nomi orqali elementlarni tanlash (HTMLCollection qaytaradi)
// const btns = document.getElementsByTagName('button'); // Barcha <button> elementlari

// // Birinchi buttonni tanlash
// const firstBtn = document.getElementsByTagName('button')[0]; // Birinchi button element

// // Class nomi orqali elementlarni tanlash (HTMLCollection qaytaradi)
// const rounds = document.getElementsByClassName('circle'); // 'circle' class-li elementlar

// // Yana bir class orqali tanlash
// const hearts = document.getElementsByClassName('heart'); // 'heart' class-li elementlar

// // Wrapper elementini tanlash
// const wrapper = document.getElementsByClassName('wrapper')[0]; // Birinchi 'wrapper' class-li element

// // Wrapper ichidagi heart elementlari
// const heartss = wrapper.getElementsByClassName('heart'); // wrapper ichidagi 'heart' class-lilar

// /****************************** ZAMONAVIY USULLAR ******************************/
// // 4. Elementlarni tanlashning zamonaviy usullari (CSS selectorlariga o'xshash)

// // ID orqali tanlash (getElementById ham tez, shuning uchun ishlatilgan)
// const boxModern = document.getElementById('box');

// // Birinchi buttonni tanlash
// const firstBtnModern = document.querySelector('button'); // Birinchi <button> element

// // Barcha buttonlarni tanlash (NodeList qaytaradi)
// const btnsModern = document.querySelectorAll('button'); // Barcha <button> elementlari

// // Class orqali tanlash
// const roundsModern = document.querySelectorAll('.circle'); // Barcha 'circle' class-li elementlar

// // Barcha heart class-li elementlar
// const heartsModern = document.querySelectorAll('.heart'); // Barcha 'heart' class-li elementlar

// // Wrapper elementini tanlash
// const wrapperModern = document.querySelector('.wrapper'); // Birinchi '.wrapper' class-li element

// // Wrapper ichidagi heart elementlari
// const heartssModern = wrapperModern.querySelectorAll('.heart');

// // Murakkab CSS selektori orqali tanlash
// const hearts2 = document.querySelectorAll('body .parentWrapper .wrapper .heart');
// // Bu selector: body ichidagi .parentWrapper ichidagi .wrapper ichidagi .heart elementlari

// // 5. Tanlangan elementlarni konsolga chiqarish
// console.log(heartsModern); // Modern usul bilan tanlangan 'heart' class-li elementlar

// // Atrof bilan amallar

// // 1. Body elementini va uning tarkibini ko'rish
// console.log(document.body); // <body> elementining o'zini ko'rsatadi
// console.log(document.body.childNodes); // Body ichidagi BARCHA child nodelarni qaytaradi (text node'lar ham qo'shilgan)
// console.log(document.body.children); // Faqat element child'larni qaytaradi (HTMLCollection)

// // 2. Buttonlar orasidagi bog'lanishlar
// const thirdBtn = btns[2]; // Buttonlar kolleksiyasidan 3-buttonni tanlaymiz (0,1,2 indekslar)

// // 3. Sibling (aka/singil) elementlar bilan ishlash
// console.log(thirdBtn.previousSibling); // 3-button dan oldingi node (element yoki text node bo'lishi mumkin)
// console.log(thirdBtn.previousSibling.previousSibling); // Undan ham oldingi node

// console.log(thirdBtn.previousElementSibling); // Faqat element siblingni qaytaradi (2-button)

// console.log(thirdBtn.nextSibling); // 3-button dan keyingi node
// console.log(thirdBtn.nextSibling.nextSibling); // Undan keyingi node

// console.log(thirdBtn.nextElementSibling); // Faqat element siblingni qaytaradi (4-button bo'lishi mumkin)

// // 4. Parent (ota) elementlar bilan ishlash
// const secondHeart = hearts[1]; // heart elementlaridan 2-sini tanlaymiz
// console.log(secondHeart); // O'zini ko'rsatadi
// console.log(secondHeart.parentNode); // Birinchi parent node (div yoki boshqa element)
// console.log(secondHeart.parentNode.parentNode); // Parentning parenti

// console.log(secondHeart.parentElement); // parentNode ga o'xshash, lekin faqat elementlarni qaytaradi
// console.log(secondHeart.parentElement.parentElement); // Parent elementning parent elementi

// const forms = document.querySelectorAll('form'),
// 	firstForm = forms[0],
//   secondForm = forms[1];

// const firstForm = document.querySelector('[name="firstForm"]'),
// 	secondForm = document.querySelector('[name="secondForm"]');

const forms = document.forms,
	firstForm = forms[0],
	secondForm = forms[secondForm],
	firstFormElements = firstForm.elements,
	secondFormElements = secondForm.elements;

console.log(firstFormElements);
console.log(firstFormElements[0]);
console.log(firstFormElements[1]);
console.log(firstFormElements[2]);

console.log(firstFormElements.userName);
console.log(firstFormElements.check);
console.log(firstFormElements.submitBtn);

console.log(secondFormElements);
console.log(secondFormElements[0]);
console.log(secondFormElements[1]);
console.log(secondFormElements[2]);

console.log(secondFormElements.userName);
console.log(secondFormElements.check);
console.log(secondFormElements.submitBtn);

const checkbox = document.querySelector('[name="firstForm"] [type="checkbox"]');

// Metodlar
let value;

value = secondHeart.closest('.parentWrapper'); // Birinchi parent elementni qaytaradi
value = secondHeart.closest('div'); // Birinchi parent elementni qaytaradi
value = secondHeart.closest('h1'); // Birinchi parent elementni qaytaradi
value = secondHeart.closest('body'); // Birinchi parent elementni qaytaradi

const parentWrapper = document.querySelector('.parentWrapper');
