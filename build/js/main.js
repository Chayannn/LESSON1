"use strict";
// type mathFunction = (a: number, b: number) => number;
// // interface mathFunction {
// //   (a: number, b: number): number;
// // }
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250,
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
