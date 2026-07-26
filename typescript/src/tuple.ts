//? In TypeScript, a tuple is a typed array with a pre-defined length and specific types for each index.
let person: [string, number, boolean] = ['shakeandbake', 30, true];

let date: readonly [month: number, day: number, year: number] = [1, 2, 2023];

console.log(date);

// date.push(10);
// date.push(10);
// date.push(10);
// date.push(10);
// date.push(10);

console.log(date);

enum Server {
  OFFLINE,
  ONLINE,
  PENDING,
}

let status: [string, Server] = ['offline', Server.OFFLINE];

console.log(status);

enum Direction {
  North = 1,
  South,
  East,
  West,
}

const dir: Direction = Direction.North;
console.log(dir);

enum DbStatus {
  ONLINE = 'online',
  OFFLINE = 'offline',
  PENDING = 'pending',
}
type User = {
  name: string;
  status: DbStatus;
};
let someValue: string = 'pending';
const user: User = {
  name: 'shakeandbake',
  status: someValue as DbStatus,
};

let unknownValue: unknown;
unknownValue = 10;
unknownValue = 'hello';
unknownValue = true;
unknownValue = {};

if (typeof unknownValue === 'string') {
  console.log(unknownValue.toLowerCase());
}
//? unknown can be anything but we need to check the type before using it

function someCode() {
  const random = Math.random();
  if (random > 0.5) {
    {
      throw new Error('There was some erorr.....');
    }
  } else {
    throw 'some error';
  }
}

try {
  someCode();
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  } else {
    console.log(error);
  }
}

function greetSwitch(name: string) {
  const random = Math.random();
  if (random > 0.5) {
    return `hello ${name}`;
  } else {
    return `hi ${name}`;
  }
}

console.log(greetSwitch('shakeandbake')); 