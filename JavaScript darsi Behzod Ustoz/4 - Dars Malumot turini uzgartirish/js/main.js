'use strict';

/** Malumot turlari
 * 1. string
 * 2. number
 * 3. boolean
 * 4. null
 * 5. undefined
 * 6. symbol
 * 7. bigint
 * 8. object
 * 9. function
 * 10. object date
 * 11. array
 */

let value;

// number to string

// let num = 13;
// num = '13';
// num = String(13);
// value = num;
// value = String(45);
// value = String(num);
// value = (7).toString();  // numberni string qilib beradi
// value = num.toString(); // numberni string qilib beradi
// value = 8 + ' '; // numberni string qilib beradi
// value = num + ' '; // numberni string qilib beradi

// boolen to string

// let bool = true;

// value = bool;
// value = String(false);
// value = String(bool);
// value = false.toString();
// value = bool.toString();
// value = false + ' ';
// value = bool + ' ';

// undefined to string

// let undef;

// value = undefined;
// value = String(undef);
// value = String(undefined);
// value = undef.toString(); // undefinedga metod qo'llab bo'lmaydi!
// value = undefined.toString();
// value = undef + ' ';
// value = undefined + ' ';

// null to string

// let nul = null;
// value = nul;
// value = String(nul);
// value = String(null);
// value = nul.toString(); // nullga metod qo'llab bo'lmaydi!
// value = null.toString(); // nullga metod qo'llab bo'lmaydi!
// value = nul + ' ';
// value = null + ' ';

// object to string

let user = {
	name: "O'lmas",
	age: 29,
};

// value = user;
// value = String(user); // '[object Object]'
// value = user.toString(); // '[object Object]'
// value = user.toString(); // '[object Object]'
// value = user + ' '; // '[object Object]'
// value = user + ' '; // '[object Object]'

// array to string

let array = ['hello', false, 123];

// value = array;
// value = String(array); // 'hello,false,123'
// value = array.toString(); // 'hello,false,123'
// value = array.toString(); // 'hello,false,123'
// value = array + ' '; // 'hello,false,123 '
// value = array + ' '; // 'hello,false,123 '

// JSON

// value = JSON; // {Symbol(Symbol.toStringTag): 'JSON', parse: ƒ, stringify: ƒ, rawJSON: ƒ, isRawJSON: ƒ}
// value = JSON.stringify(array); // '["hello",false,123]'

// string to number

// let str = '123';
// value = str; // string
// value = Number('123'); // 123
// value = Number(str); // 123
// value = String(str); // '123'
// value = String(123); // '123'
// value = +str; // 123
// value = +'13ab'; // NaN - not a number
// value = Number('13ab'); // NaN
// value = +''; // 0
// value = +null; // 0
// value = +undefined; // NaN
// value = Number(''); // 0
// value = '100USD';
// value = parseInt('100USD'); // matndan sonni butun qismini 100 ni olib beradi
// value = parseInt('100.5USD'); // matndan sonni butun qismini 100 ni olib beradi
// value = parseFloat('100.555USD'); // 100.555 ni olib beradi
// value = parseInt('usd100'); // NaN

// parseInt = sonni butun qismni olib beradi son chap tomondan kelishi kerak
// parseFloat = sonni kasr qismni bilan olib beradi son chap tomondan kelishi kerak

// boolean to namber

// value = true; // true
// value = Number(true) // 1
// value = Number(false) // 0
// value = +true // 1
// value = +false // 0
// value = true + true + true; // 3
// value = false - 3; // -3

// undefined to number

// value = Number(undefined) // NaN
// value = +undefined // NaN

// null to number

// value = Number(null) // 0
// value = +null // 0

// value = undefined + 3; // NaN
// value = null + 3; // 3

// object to number

// value = user;
// value = Number(user); // NaN
// value = +user; // NaN
// value = Number({}); // NaN
// value = +{}; // NaN

// array to number

// value = array; // array
// value = Number(array); // NaN
// value = +array; // NaN
// value = Number([]); // 0
// value = +[]; // 0
// value = [] - 3 // -3

// all to number

// value = Boolean('Hello'); // true
// value = Boolean('') // false
// value = Boolean(123); // true
// value = Boolean(-123); // true
// value = Boolean(0); // false
// value = Boolean(undefined); // false
// value = Boolean(null); // false
// value = Boolean(user); // true
// value = Boolean({}); // true
// value = Boolean(array); // true
// value = Boolean([]); // true

console.log(value);
console.log('Malumot turi: ' + typeof value);
