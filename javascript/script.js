"use strict";
// NUMBER
let n = 4;
console.log(n);
n = 5;
console.log(n);
// n = "Hello";
// console.log(n);
let n1;
n1 = 99;
console.log(n1);
// + перетворює строку в число
n = +"3";
console.log(n);
const n2 = 77;
console.log(n2);
// n2 = 11
// STRING
const s1 = "Hello";
const s2 = " TS";
console.log(s1 + s2);
let s3 = s1 + s2;
console.log(s3);
// BOOLEAN
const b1 = true;
console.log(b1, typeof b1);
// const c1: number = parseInt('4', 10)
// const c1: number = parseFloat('4')
const c1 = Number("4");
// const c1: number = +'4'
console.log(c1);
const c2 = String(888);
console.log(c2);
const c3 = Boolean(888);
console.log(c3);
document.querySelector(".out-1").textContent = c2;
document.querySelector(".out-1").textContent = String(c3);
const n5 = Number(document.querySelector(".out-2").textContent);
console.log(n5, typeof n5);
// Homework
// 1
const p_01 = "type script";
console.log("p_01: ", p_01);
// 2
const p_02 = "";
console.log(p_02);
// 3
const s_031 = "Hi";
const s_032 = " people";
const s_3 = s_031 + s_032;
console.log(s_3);
//# sourceMappingURL=script.js.map