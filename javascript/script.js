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
const a1 = "Hello TS";
document.querySelector(".out-1").textContent = a1;
// отримання тексту з парного тегу
const a2 = document.querySelector(".out-2").textContent;
console.log("a2: ", a2);
const a3 = +document.querySelector(".out-3").textContent;
console.log("a3: ", a3, typeof a3 === "number");
// отримуємо value з input
// const i5 = <HTMLInputElement>document.querySelector(".i-5");
const i5 = document.querySelector(".i-5");
console.log("i5: ", i5.value);
const i6 = document.querySelector(".i-6");
console.log("i6: ", +i6.value, typeof +i6.value);
// i6.value = '88'
i6.value = String(88);
//checkbox
const checkbox = document.querySelector('input[type="checkbox"]');
if (checkbox.checked) {
    console.log("checked");
}
// radiobutton
const r = document.querySelector('input[name="r"]:checked');
console.log("r: ", r.value, typeof r.value);
// select value
const select = document.querySelector(".s-1");
console.log("select: ", select.value);
select.value = "aaa";
// Якцо елементу не має на HTML сторінці
const i8 = document.querySelector(".i-8");
// console.log('i8: ', i8);
// 1
console.log('i8: ', i8?.value);
// 2
if (i8 !== null) {
    console.log(i8.value);
}
//# sourceMappingURL=script.js.map