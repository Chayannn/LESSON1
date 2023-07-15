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

// class Bands {
//   private dataState: string[];

//   constructor() {
//     this.dataState = [];
//   }

//   public get data(): string[] {
//     return this.dataState;
//   }
//   public set data(value: string[]) {
//     if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
//       this.dataState = value;
//       return;
//     } else throw new Error("Param is not an Array of strings");
//   }
// }

// const MyBands = new Bands();

// MyBands.data = ["Neil Young", "Led Zep"];
// console.log(MyBands.data);

// MyBands.data = [...MyBands.data, "ZZ Top"];
// console.log(MyBands.data);

////////////////////////////////////////////////////////////////////
// Index Signatures

// interface TransactionObj {
//  readonly [index: string]: number;
// }
// interface TransactionObj {
//   readonly [index: string]: number;
//   Pizza: number;
//   Books: number;
//   Job: number;
// }

// const todaysTransactions: TransactionObj = {
//   Pizza: -10,
//   Books: -5,
//   Job: 50,
// };

// console.log(todaysTransactions.Pizza);
// console.log(todaysTransactions["Pizza"]);

// let prop: string = "Pizza";

// const todaysNet = (transactions: TransactionObj): number => {
//   let total = 0;
//   for (const transaction in transactions) {
//     total += transactions[transaction];
//   }
//   return total;
// };

// console.log(todaysTransactions[prop]);
// // todaysTransactions.Pizza = 40
// console.log(todaysTransactions["Dave"]);

// interface Student {
//   //   [key: string]: string | number | number[] | undefined;
//   name: string;
//   GPA: number;
//   classes?: number[];
// }

// const student: Student = {
//   name: "Doug",
//   GPA: 3.5,
//   classes: [100, 200],
// };
// // console.log(student.test);

// for (const key in student) {
//   console.log(`${key}: ${student[key as keyof Student]}`);
// }

// Object.keys(student).map((key) => {
//   console.log(student[key as keyof typeof student]);
// });

// const logStudentKey = (chatro: Student, key: keyof Student): void => {
//   console.log(`Student ${key}: ${chatro[key]}`);
// };

// logStudentKey(student, "GPA");
// logStudentKey(student, "name");
//////////////////////////////////////////////////////////////////

// interface Incomes {
//   [key: string | number]: number;
// }
// type Streams = "salary" | "bonus" | "sidehustle";

// type Incomes = Record<Streams, number>;

// const monthlyIncomes: Incomes = {
//   salary: 500,
//   bonus: 100,
//   sidehustle: 250,
// };

// for (const revenue in monthlyIncomes) {
//   console.log(monthlyIncomes[revenue as keyof Incomes]);
// }
//////////////////////////////////////////////////

// Generic Types

// const echo = <T>(arg: T): T => arg;

const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

// console.log(isObj(true));
// console.log(isObj("John"));
// console.log(isObj([1, 2, 3]));
// console.log(isObj({ name: "John" }));
// console.log(isObj(null));

// const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
//   if (Array.isArray(arg) && !arg.length) {
//     return { arg, is: false };
//   }
//   if (isObj(arg) && !Object.keys(arg as keyof T)) {
//     return { arg, is: false };
//   }
//   return { arg, is: !!arg };
// };

// console.log(isTrue(false));
// console.log(isTrue(0));
// console.log(isTrue(true));
// console.log(isTrue(1));
// console.log(isTrue("Dave"));
// console.log(isTrue(""));
// console.log(isTrue(null));
// console.log(isTrue(undefined));
// console.log(isTrue({ name: "Dave" }));
// console.log(isTrue([]));
// console.log(isTrue([1, 2, 3]));
// console.log(isTrue(NaN));
// console.log(isTrue(-0));

interface BoolCheck<T> {
  value: T;
  is: boolean;
}

const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
  if (Array.isArray(arg) && !arg.length) {
    return { value: arg, is: false };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T)) {
    return { value: arg, is: false };
  }
  return { value: arg, is: !!arg };
};

interface HasID {
  id: number;
}

const processUser = <T extends HasID>(user: T): T => {
  // Process the user logic here
  return user;
};
console.log(processUser({ id: 1, name: "Dave" }));
// console.log(processUser({ name: "Dave" }));

const getUsersProperty = <T extends HasID, K extends keyof T>(
  users: T[],
  key: K
): T[K][] => {
  return users.map((user) => user[key]);
};

const usersArray = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
];

console.log(getUsersProperty(usersArray, "email"));
console.log(getUsersProperty(usersArray, "username"));

///////////////////////////////////////

class StateObject<T> {
  private data: T;

  constructor(value: T) {
    this.data = value;
  }

  get state(): T {
    return this.data;
  }

  set state(value: T) {
    this.data = value;
  }
}

const store = new StateObject("John");
console.log(store.state);
store.state = "Dave";
//store.state = 12

const myState = new StateObject<(string | number | boolean)[]>([15]);
myState.state = ["Dave", 42, true];
console.log(myState.state);
