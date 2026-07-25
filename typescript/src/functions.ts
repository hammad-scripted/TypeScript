function sayHi(name: string): void {
  console.log(`hello ${name}`);
}
sayHi('shakeandbake');

function add(a: number, b: number): number {
  return a + b;
}
let result: number = add(1, 2);
console.log(result);

//? function with optional parameters

function multiply(a: number, b: number, c?: number): number {
  if (c) {
    return a * b * c;
  }
  return a * b;
}
console.log(multiply(1, 2));
console.log(multiply(1, 2, 3));

//? function with default parameters
function divide(a: number, b: number, c: number = 10): number {
  return a / b / c;
}

console.log(divide(10, 2));
console.log(Math.round(divide(10, 2, 3)));

// ? rest parameter in function

function sum(message: string, ...numbers: number[]): void {
  const result = numbers.reduce((a, b) => a + b, 10);
  console.log(`${message} ${result}`);
}

console.log(sum('hello', 1, 2, 3, 4));

function processInput(message: string | number): string | number {
  if (typeof message === 'string') {
    return message.toUpperCase();
  } else {
    return message * 2;
  }
}

console.log(processInput('hello'));
console.log(processInput(10));

type User = {
  name: string;
  age: number;
};
function createUser(user: User): User {
  return user;
}

console.log(createUser({ name: 'shakeandbake', age: 30 }));

for (let k in createUser({ name: 'shakeandbake', age: 30 })) {
  console.log(k);
}

// type alias

type someValue = number | boolean;
let someObj: someValue = 10;
console.log(someObj);
someObj = true;
console.log(someObj);

//* intersection

type Book = {
  id: number;
  name: string;
  price: number;
};

const book1: Book = {
  id: 1,
  name: 'The Alchemist',
  price: 14,
};

const discountedBook: Book & { discount: number } = {
  id: 2,
  name: 'C++',
  price: 39,
  discount: 20,
};

// ? computed properties
const propName='age';
let tiger={[propName]:5}
console.log(tiger)