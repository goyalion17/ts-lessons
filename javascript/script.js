"use strict";
/* // NUMBER
let n: number = 4;
console.log(n);
n = 5;
console.log(n);
// n = "Hello";
// console.log(n);

let n1: number;
n1 = 99;
console.log(n1);

// + перетворює строку в число
n = +"3";
console.log(n);

const n2: number = 77;
console.log(n2);
// n2 = 11

// STRING
const s1: string = "Hello";
const s2: string = " TS";
console.log(s1 + s2);
let s3: string = s1 + s2;
console.log(s3);

// BOOLEAN
const b1: boolean = true;
console.log(b1, typeof b1);

// const c1: number = parseInt('4', 10)
// const c1: number = parseFloat('4')
const c1: number = Number("4");
// const c1: number = +'4'
console.log(c1);

const c2: string = String(888);
console.log(c2);

const c3: boolean = Boolean(888);
console.log(c3);

document.querySelector(".out-1").textContent = c2;
document.querySelector(".out-1").textContent = String(c3);

const n5: number = Number(document.querySelector(".out-2").textContent);
console.log(n5, typeof n5);

// Homework
// 1
const p_01: string = "type script";
console.log("p_01: ", p_01);
// 2
const p_02: string = "";
console.log(p_02);
// 3
const s_031: string = "Hi";
const s_032: string = " people";
const s_3: string = s_031 + s_032;
console.log(s_3); */
// 13.11.2023 ================================================================================================================
/* const a1: string = "Hello TS";
document.querySelector(".out-1").textContent = a1;

// отримання тексту з парного тегу
const a2: string = document.querySelector(".out-2").textContent;
console.log("a2: ", a2);

const a3: number = +document.querySelector(".out-3").textContent;
console.log("a3: ", a3, typeof a3 === "number");

// отримуємо value з input
// const i5 = <HTMLInputElement>document.querySelector(".i-5");
const i5 = document.querySelector(".i-5") as HTMLInputElement;
console.log("i5: ", i5.value);

const i6 = document.querySelector(".i-6") as HTMLInputElement;
console.log("i6: ", +i6.value, typeof +i6.value);

// i6.value = '88'
i6.value = String(88);

//checkbox
const checkbox = document.querySelector(
  'input[type="checkbox"]'
) as HTMLInputElement;
if (checkbox.checked) {
  console.log("checked");
}

// radiobutton
const r = document.querySelector('input[name="r"]:checked') as HTMLInputElement;
console.log("r: ", r.value, typeof r.value);

// select value
const select = <HTMLSelectElement>document.querySelector(".s-1");
console.log("select: ", select.value);

select.value = "aaa";

// Якцо елементу не має на HTML сторінці
const i8 = document.querySelector(".i-8") as HTMLInputElement | null;
// console.log('i8: ', i8);
// 1
console.log('i8: ', i8?.value);

// 2
if (i8 !== null) {
  console.log(i8.value);
} */
// 28.11.2023 ================================================================================================================
function foo() {
    console.log("1");
}
foo();
// Повертаємо тип даних
function foo2() {
    const n = 66;
    return n;
}
console.log(foo2());
// Процедура: void - функція, яка нічого не повертає
function t03() {
    document.querySelector(".out-1").textContent = "Hello";
}
t03();
// Аргументи
function t04(a, b) {
    return a * b;
}
console.log(100 - t04(5, 5));
// Процедура: void - функція, яка нічого не повертає
function t05(a, b) {
    console.log(a * b);
}
t05(5, 6);
// Кількість аргументів
function t06(a, b) {
    console.log(b);
    if (b)
        return a * b;
    return a;
}
console.log(t06(10));
// Декілька типів даних
function checkEmail(email) {
    // @
    if (email.indexOf("@") !== -1)
        return email.toLowerCase();
    return false;
}
console.log(checkEmail("harry@Potter.ua"));
if (checkEmail("harry@Potter.ua")) {
    console.log("good");
}
//# sourceMappingURL=script.js.map