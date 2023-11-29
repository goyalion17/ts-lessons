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
/* function foo() {
  console.log("1");
}
foo();

// Повертаємо тип даних
function foo2(): number {
  const n = 66;
  return n;
}
console.log(foo2());

// Процедура: void - функція, яка нічого не повертає
function t03(): void {
  document.querySelector(".out-1").textContent = "Hello";
}
t03();

// Аргументи
function t04(a: number, b: number): number {
  return a * b;
}
console.log(100 - t04(5, 5));

// Процедура: void - функція, яка нічого не повертає
function t05(a: number, b: number): void {
  console.log(a * b);
}
t05(5, 6);

// Кількість аргументів
function t06(a: number, b?: number): number {
  console.log(b);
  if (b) return a * b;
  return a;
}
console.log(t06(10));

// Декілька типів даних
function checkEmail(email): string | boolean {
  // @
  if (email.indexOf("@") !== -1) return email.toLowerCase();
  return false;
}
console.log(checkEmail("harry@Potter.ua"));

if (checkEmail("harry@Potter.ua")) {
  console.log("good");
} */
// 29.11.2023 ================================================================================================================
// Як створити масив
const arr1 = [4, 5];
arr1.push(44);
arr1[3] = 66;
arr1[1] = 77;
console.log(arr1);
// Очищення масиву
arr1.length = 0;
console.log(arr1);
// Створення readonly масиву
const arr2 = [22, 33, 44, 55];
// arr2.push(88)
// arr2[0] = 55;
console.log("arr2: ", arr2);
// Aвтовизначення типу
const arr3 = ["hello", "ts"];
arr3.push("typescript");
// arr3.push(4);
console.log("arr3: ", arr3);
// декомпозиція масиву в TS
const arr4 = [222, 333, 444, 555];
const [, a, b, ...c] = arr4;
console.log(a, b, c);
// Двухмірний масив
// const arr5: number[][] = [[222, 333], [444, 555]];
const arr5 = [];
arr5[0] = [11, 12];
arr5.push([11, 12]);
console.log("arr5: ", arr5);
console.log("arr5: ", arr5[0][1]);
// Змішані по типу масиви
const arr6 = [2, 3, false];
console.log("arr6: ", arr6);
const arr7 = [33, 44, "hello"];
console.log("arr7: ", arr7);
// Кортежи
const cort1 = ["Mike", 55];
cort1.push(88);
cort1.push("data");
// cort1.push(false);
console.log("cort1: ", cort1);
// Необов'язковий елемент в кортежі
const cort2 = ["Mike", 55];
console.log("cort2: ", cort2);
console.log("cort2: ", cort2[0]);
cort2[0] = "Nil";
console.log("cort2: ", cort2);
// Якщо кількість елементів в кортежі не встановлено
// const cort4: readonly [number, ...string[]] = [555, 'Hi', 'How are you?']
const cort4 = [555, "Hi", "How are you?"];
console.log("cort4: ", cort4);
//# sourceMappingURL=script.js.map