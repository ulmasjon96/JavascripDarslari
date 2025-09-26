'use strict';
// let value;
// let a = 10,
//   b = 2;

// if (a > 0) {
// 	b = a;
// } else {
// 	b = 13;
// }

// Ternar operator

// a > 0 ? (b = a) : (b = 13);
// a > 0 ? // shart
// 	 (b = a) // To'g'ri shartdagi amallar
// 	 : // aksincha
// 	 (b = 13); // noto'g'ri shartdagi amallar

let value;
// let a = 10,
// 	b = 2;
// a = 10;
// a = -10;
// a = 0;
// a = 'abc';

// if (a > 0) {
// 	b = a;
// } else if (a < 0) {
// 	b *= 15;
// } else if (a === 0) {
// 	b = 20;
// } else {
// 	b = 'error';
// }

// if va elseni yordamida ternar operator qilish usulida qilish
// a > 0 ? (b = a) : a < 0 ? (b *= 15) : a === 0 ? (b = 20) : (b = 'error');

// a = 10;
// a = -10;

// console.log(a < 0 ? a : 13);

// b = a > 0 ? a : 13;

// b = a > 0 ? a : a < 0 ? b * 15 : (a = 0 ? 20 : 'error');

// let color = 'green';

// if (color === 'red') {
// 	console.log("To'xta");
// } else if (color === 'yellow') {
// 	console.log('Tayyorlan');
// } else if (color === 'green') {
// 	console.log('Harakatlan!');
// } else {
// 	console.log('error');
// }

// color = 'red';

// switch (color) {
// 	case 'red':
// 		console.log("To'xta");
// 		break;
// 	case 'yellow':
// 		console.log('Tayyorlan!');
// 		break;
// 	case 'green':
// 		console.log('Harakatlan!');
// 		break;
// 	default:
// 		console.log('error');
// 		break;
// }
// color = 'yellow';

// switch (color) {
// 	case 'red':
// 		console.log("To'xta");
// 		break;
// 	case 'yellow':
// 	case 'green':
// 		console.log('Harakatlan!');
// 		break;
// 	default:
// 		console.log('error');
// 		break;
// }

// console.log(b);

// UYGA VAZIFA

let a;

a = prompt('a ni qiymatini kiriting');

a === 'block'
	? console.log('block')
	: a === 'none'
	? console.log('none')
	: a === 'inline'
	? console.log('inline')
	: console.log('other');

switch (a) {
	case 'block':
		console.log('block');
		break;
	case 'none':
		console.log('none');
		break;
	case 'inline':
		console.log('inline');
		break;
	default:
		console.log('other');
}
