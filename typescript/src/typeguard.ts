type valueType = string | number | boolean;

let value: valueType;

const random = Math.random();
value = random < 0.33 ? 'Hello' : random < 0.66 ? 123.345 : true;

function checkValue(value: valueType): valueType {
  if (typeof value === 'string') {
    return value.toUpperCase();
  }
  if (typeof value === 'number') {
    return value.toFixed(2);
  }
  if (typeof value === 'boolean') {
    return value;
  }
  return value;
}

let result = checkValue(value);
console.log(result);

//? type narrowing and type guard are used to check the type of a variable before using it

//* === type guard
type Dog = { type: 'dog'; name: string; bark: () => void };
type Cat = { type: 'cat'; name: string; meow: () => void };
type Animal = Dog | Cat;

function makeSound(animal: Animal) {
  if (animal.type === 'dog') {
    animal.bark();
  } else {
    animal.meow();
  }
}
function makeSound2(animal: Animal) {
  if ('bark' in animal) {
    animal.bark();
  }
  if ('meow' in animal) {
    animal.meow();
  }
}

makeSound({
  type: 'dog',
  name: 'Fido',
  bark() {
    console.log('woof');
  },
});

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  move(): void {
    console.log('move');
  }
}

class Employee {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  work(): void {
    console.log('work');
  }
}

//?iife
(function (x: Person | Employee) {
  if (x instanceof Person) {
    x.move();
  }
  if (x instanceof Employee) {
    x.work();
  }
})(new Person('shakeandbake'));
