// NUMBER
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
console.log(s_3);
