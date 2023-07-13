type mathFunction = (a: number, b: number) => number;
// interface mathFunction {
//   (a: number, b: number): number;
// }

let multiply: mathFunction = function (c, d) {
  return c * d;
};

// console.log(multiply(5, 5));

// Optional Parameters
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};
const sumAll = (a: number, b: number, c: number = 2): number => {
  return a + b + c;
};

console.log(sumAll(5, 5, 7));
console.log(sumAll(5, 7));

// Rest Parameters
const total = (a: number, ...nums: number[]): number => {
  return nums.reduce((prev, curr) => prev + curr);
};

console.log(total(1, 2, 3, 4));

const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) break;
  }
};

const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (typeof value === "number") return "number";
  return createError("This should never happen");
};
