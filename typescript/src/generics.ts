let array1: string[] = ['Apple', 'Banana', 'Cherry'];
let array2: number[] = [1, 2, 3, 4, 5];
let array3: boolean[] = [true, false];

console.log(array1);
console.log(array2);
console.log(array3);

//? generic array

let array4: Array<string> = ['Apple', 'Banana', 'Cherry'];
let array5: Array<number> = [1, 2, 3, 4, 5];
let array6: Array<boolean> = [true, false];

//? generic function allows us to create a function that can work with any type of data basically promoting reusability
function identity<T>(value: T): T {
  return value;
}

const a = identity('hello');
const b = identity(123);
const c = identity(true);

console.log(a);
console.log(b);
console.log(c);

function firstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

const nums = firstElement([1, 2, 3]);
console.log(nums);
const strs = firstElement(['apple', 'banana', 'cherry']);
console.log(strs);

interface Box<T> {
  value: T;
}

const stringBox: Box<string> = {
  value: 'hello',
};
const numbox: Box<number> = {
  value: 123,
};
console.log(stringBox);
console.log(numbox);

interface GenereicInterface<T> {
  value: T;
  //   getValue(): T;
  //   getValue2(value: T): T;
  getValue3: () => T;
}

const s: GenereicInterface<string> = {
  value: 'Hello',
  getValue3() {
    return 'hello';
  },
};

// ? async function returns a promise by default so we need to specify the return type as Promise<>

async function hh(): Promise<string> {
  return 'This is a string';
}
hh().then((result) => console.log(result));

async function someFunction<T>(val: T): Promise<T> {
  return val;
}

someFunction('hammad').then((result) => {
  console.log(result);
});

function createArray<T>(len: number, arr: T): T[] {
  const newArr: T[] = []

  for (let i = 0; i < len; i++) {
    newArr.push(arr);
  }
  return newArr;
}


const result: number[] = createArray(5, 10);

console.log(result)
for(let k of result){
  console.log(k);
}

const ans:string[] = createArray(5, 'hello');
console.log(ans);