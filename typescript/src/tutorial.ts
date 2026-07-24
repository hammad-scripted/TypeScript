console.log('Hello TS');

interface someValue {
  name: string;
  id: number;
}

let someObj: someValue = {
  name: 'hello',
  id: 1,
};

console.log(someObj);

// ? basic type annotations
let awesomeName: string = 'shakeAndBake';
console.log(awesomeName.toLowerCase());

let isAwesome: boolean = true;
console.log(isAwesome);

let list: number[] = [1, 2, 3];
console.log(list);

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(1, 2));

let greeting: string = 'hello';
console.log(greeting.toUpperCase());
let age: number = 30;
age += 4;
let isAdult: boolean = age >= 18;

console.log(isAdult);
// greeting=10;
// isAdult=10;

//* union type
let mixed: string | number = 'hello';
mixed = 10;
console.log(mixed);

let tax: (number | string | boolean)[] = [1, 'hello', true];
console.log(tax);

//? type any which is used to ignore the type checking
let randomValue: any = 10;
randomValue = 'hello';
randomValue = true;
console.log(randomValue);

const books = [
  'Brave New World',
  'The Book Thief',
  'The Alchemist',
  '1985',
  'true',
];
let foundBook: string | undefined;
for (let k of books) {
  if (k === '1985') {
    foundBook = k;
    console.log('This book was published in 1985');
    break;
  }
}
foundBook?.length;

//! arrays

let prices: number[] = new Array(10);
prices.push(120);
prices.push(300);
console.log(prices);
for (let x of prices) {
  console.log(x);
}

//* empty array
let randomValues: [] = [];

//? Objects Fundamentals

// let car={
//     make:"Honda",
//     model:"Civic",
//     year:2022,
//     isAutomatic:true,
//     move(){
//         console.log("move");
//     }
// }

//* this is also a syntax
let car: {
  make: string;
  model: string;
  year: number;
  isAutomatic: boolean;
  move: () => void;
} = {
  make: 'Honda',
  model: 'Civic',
  year: 2022,
  isAutomatic: true,
  move() {
    console.log('move');
  },
};

console.log(car);
car.move();

//? array of object

let book = { title: 'book', cost: 23 };
let pen = { title: 'pen', cost: 12 };
let pencil = { title: 'pencil', cost: 10 };

let items: { title: string; cost: number }[] = [book, pen, pencil];

for (let item of items){
  
    console.log(Object.values(item));
}
