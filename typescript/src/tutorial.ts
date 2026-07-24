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

console.log(awesomeName);