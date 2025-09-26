// console.log('Hello World');
// console.log('3');
// console.log(13);

// Malumot turlari 2 xil turlarga bo'linadi:
// 1. Primitive type
// 2. Reference type
/** Primitivelar
 * 1. String
 * 2. Number
 * 3. Boolean
 * 4. Null
 * 5. Undefined
 * 6. Symbol
 * 7. BigInt
 */

/** Obyektlar (Reference type - ssilka bo'yicha o'tuvchi)
 * 1. Object
 * 2. Array
 * 3. Function
 * 4. Object Date
 */

// String

// let str;
// str = 'Hello'; // 1 qavsi ishlatiladi
// str = 'Hello'; // 2 qavsi ishlatiladi
// str = `Hello`; // begtik ishlatiladi

// console.log(str);
// console.log('Malumot turi: ' + typeof str); // typeof - malumot turini aniqlash uchun ishlatiladi

// Number

// let num;
// num = 13;
// num = -13;
// num = 4.56;
// num = -4.56;
// num = Infinity;
// num = -Infinity;
// num = 3 * 3 // 9
// num = 3 * "a" // NaN - son emas

// console.log(num);
// console.log('Malumot turi: ' + typeof num); // typeof - malumot turini aniqlash uchun ishlatiladi

// Boolean

// let bool;
// bool = true;
// bool = false;

// console.log(bool);
// console.log('Malumot turi: ' + typeof bool); // typeof - malumot turini aniqlash uchun ishlatiladi

// undefined
// undefined - agar o'zgaruvchi e'lon qilinsa, lekin unga qiymat o'rnatilmasa uning standart qiymati undefined bo'ladi

// let und;

// console.log(und);
// console.log('Malumot turi: ' + typeof und); // typeof - malumot turini aniqlash uchun ishlatiladi

// null - malumot turini object deb chiqaradi lekin bu xato lekin null ni malumot turi bu null

// let nul = null;
// console.log(nul);
// console.log('Malumot turi: ' + typeof nul); // typeof - malumot turini aniqlash uchun ishlatiladi

// object

// let user1 = {
// 	firsName: "O'lmas",
// 	lastName: 'Ismatov',
// 	age: 29,
// };

// let user2 = {
// 	firsName: "O'ktam",
// 	lastName: 'Narziyev',
// 	age: null,
// };

// let user3 = {
// 	firsName: 'Muhammadali',
// 	lastName: null,
// 	age: 18,
// };

// console.table(user1, user2, user3); // table - obyektlarni chiqarish uchun ishlatiladi();

// console.log(user1);
// console.log('Malumot turi: ' + typeof user1); // typeof - malumot turini aniqlash uchun ishlatiladi

// console.log(user1.firsName);
// console.log(user2.lastName);
// console.log(user3.age);

// array
// let arr = ['Hello', false, 123];

// arr.example = 'world';

// console.table(arr)
// console.log(arr[2]);
// console.log(arr[0]);
// console.log('Malumot turi: ' + typeof arr); // typeof - malumot turini aniqlash uchun ishlatiladi

// let users = [user1, user2, user3]

// console.log(users);
// console.log(users[1]);

'use strict';

// alert ichidagi malumotni uvidamlenie qilib chiqarib beradi
// alert('Hello');

// confirm ichidagi malumotni uvidamlenie qilib chiqarib beradi va { ha yoki yo'q } deb javobini chiqarib beradi
// confirm('Mavzuni tushundizmi? ');

// ha bosganda true yo'q bosganda false chiqaradi
// let answer = confirm('Mavzuni tushundizmi? ');

let answer = prompt('Yoshiz nechida ');

console.log(answer);
