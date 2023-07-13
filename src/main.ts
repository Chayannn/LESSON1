// type mathFunction = (a: number, b: number) => number;
// // interface mathFunction {
// //   (a: number, b: number): number;
// // }

// let multiply: mathFunction = function (c, d) {
//   return c * d;
// };

// // console.log(multiply(5, 5));

// // Optional Parameters
// const addAll = (a: number, b: number, c?: number): number => {
//   if (typeof c !== "undefined") {
//     return a + b + c;
//   }
//   return a + b;
// };
// const sumAll = (a: number, b: number, c: number = 2): number => {
//   return a + b + c;
// };

// console.log(sumAll(5, 5, 7));
// console.log(sumAll(5, 7));

// // Rest Parameters
// const total = (a: number, ...nums: number[]): number => {
//   return nums.reduce((prev, curr) => prev + curr);
// };

// console.log(total(1, 2, 3, 4));

// const createError = (errMsg: string): never => {
//   throw new Error(errMsg);
// };

// const infinite = () => {
//   let i: number = 1;
//   while (true) {
//     i++;
//     if (i > 100) break;
//   }
// };

// // Custom Type Guard
// const isNumber = (value: any): boolean => {
//   return typeof value === "number" ? true : false;
// };

// // Use of the never type
// const numberOrString = (value: number | string): string => {
//   if (typeof value === "string") return "string";
//   if (isNumber(value)) return "number";
//   return createError("This should never happen");
// };

type One = string;
type Two = string | number;
type Three = "hello";

// Convert to more or less specific
let a: One = "hello";
let b = a as Two; // Less specific

let c = a as Three; //More specific

let d = <One>"world";
let e = <string | number>"world";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

let myVal: string = addOrConcat(2, 2, "concat") as string;

// Be careful! TS sees no problem - but a string is returned
let nextVal: number = addOrConcat(2, 2, "concat") as number;

// 10 as string;
// Over ruling typescript
10 as unknown as string;

// The Dom
const img = document.querySelector("img")!;
const myImg = document.getElementById("#img") as HTMLImageElement;
const nextImg = <HTMLImageElement>document.getElementById("#img");

img.src;
myImg.src;
