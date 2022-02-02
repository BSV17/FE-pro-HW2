const userName = prompt("Как тебя зовут?");
const yearOfBirth = prompt("Какого ты года рождения?");
const userAge = 2022 - yearOfBirth;
alert(userName + " " + userAge);

const a = +prompt("Введите число a");
const b = +prompt("Введите число b");
const c = +prompt("Введите число c");
console.log("Число a - " + a + ", число b - " + b + ", число c - " + c);

const summ = a + b + c;

console.log("Сумма всех чисел " + summ);

const aIsEven = a % 2 === 0;
const bIsEven = b % 2 === 0;
const cIsEven = c % 2 === 0;
console.log("Число является четным: a - " + aIsEven + ", b - " +  bIsEven + ", c - " + cIsEven);
console.log("Среднее арифметическое = " + (a + b + c)/3);

let num = prompt("Введите пятизначное число");
console.log(num);

let num5 = num % 10;
num = Math.floor(num/10);
let num4 = num % 10;
num = Math.floor(num/10);
let num3 = num % 10;
num = Math.floor(num/10);
let num2 = num % 10;
num = Math.floor(num/10);
let num1 = num % 10;
num = Math.floor(num/10);
console.log(num1 + ' ' + num2 + ' ' + num3 + ' ' + num4 + ' ' + num5 + ' ');
