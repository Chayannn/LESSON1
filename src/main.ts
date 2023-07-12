type mathFunction = (a: number, b: number) => number;
// interface mathFunction {
//   (a: number, b: number): number;
// }

let multiply: mathFunction = function (c, d) {
  return c * d;
};

console.log(multiply(5, 5));

// Optional Parameters
const addAll = (a: number, b: number, c: number): number => {
  return a + b + c;
};
