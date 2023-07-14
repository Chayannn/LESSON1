"use strict";
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
// type One = string;
// type Two = string | number;
// type Three = "hello";
// // Convert to more or less specific
// let a: One = "hello";
// let b = a as Two; // Less specific
// let c = a as Three; //More specific
// let d = <One>"world";
// let e = <string | number>"world";
// const addOrConcat = (
//   a: number,
//   b: number,
//   c: "add" | "concat"
// ): number | string => {
//   if (c === "add") return a + b;
//   return "" + a + b;
// };
// let myVal: string = addOrConcat(2, 2, "concat") as string;
// // Be careful! TS sees no problem - but a string is returned
// let nextVal: number = addOrConcat(2, 2, "concat") as number;
// // 10 as string;
// // Over ruling typescript
// 10 as unknown as string;
// // The Dom
// const img = document.querySelector("img")!;
// const myImg = document.getElementById("#img") as HTMLImageElement;
// const nextImg = <HTMLImageElement>document.getElementById("#img");
// img.src;
// myImg.src;
// Chapter 6 Classes
// class Coder {
//   name: string;
//   music: string;
//   age: number;
//   lang: string;
//   constructor(name: string, music: string, age: number, lang: string) {
//     this.name = name;
//     this.music = music;
//     this.age = age;
//     this.lang = lang;
//   }
// }
// class Coder {
//   constructor(
//     public readonly name: string,
//     public music: string,
//     private age: number,
//     protected lang: string = "Typescript"
//   ) {}
//   public getAge() {
//     return `Hello, I'm ${this.age}`;
//   }
// }
// // const Dave = new Coder("Chayan", "R&B", 21, "English");
// const Chayan = new Coder("Chayan", "R&B", 21);
// console.log(Chayan.getAge());
// // Valid JavaScript but not Typescript
// // console.log(Chayan.age);
// // console.log(Chayan.lang);
// class WebDev extends Coder {
//   constructor(
//     public computer: string,
//     name: string,
//     music: string,
//     age: number
//   ) {
//     super(name, music, age);
//     this.computer = computer;
//   }
//   public getLang() {
//     return `I write ${this.lang}`;
//   }
// }
// const Sara = new WebDev("Linux", "Sara", "Lofi", 25);
// console.log(Sara.getLang());
// // console.log(Sara.age);
// // console.log(Sara.lang);
////////////////////////////////////////////
// interface Musician {
//   name: string;
//   instrument: string;
//   play(action: string): string;
// }
// class Guitarist implements Musician {
//   name: string;
//   instrument: string;
//   constructor(name: string, instrument: string) {
//     this.name = name;
//     this.instrument = instrument;
//   }
//   play(action: string): string {
//     return `${this.name} ${action} the ${this.instrument}`;
//   }
// }
// const Page = new Guitarist("Jimmy", "Guitar");
// console.log(Page.play("strums"));
//////////////////////////////////////////////////////
// class Peeps {
//   static count: number = 0;
//   static getCount(): number {
//     return Peeps.count;
//   }
//   public id: number;
//   constructor(public name: string) {
//     this.name = name;
//     this.id = ++Peeps.count;
//   }
// }
// const John = new Peeps("John");
// const Steve = new Peeps("Steve");
// const Amy = new Peeps("Amy");
// console.log(Peeps.count);
// console.log(Steve.id);
////////////////////////////////////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
            this.dataState = value;
            return;
        }
        else
            throw new Error("Param is not an Array of strings");
    }
}
const MyBands = new Bands();
MyBands.data = ["Neil Young", "Led Zep"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "ZZ Top"];
console.log(MyBands.data);
