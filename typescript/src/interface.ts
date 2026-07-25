interface Book {
  readonly id: number;
  title: string;
  author: string;
  genre?: string;
  printAuthor(): void;
  printMessage(message: string): string;

  printSomething: (value: number) => number;
}

let book1: Book = {
  id: 1,
  title: 'Deep work',
  author: 'Cal newport',
  genre: 'Self-help',
  printAuthor() {
    console.log(`Name is ${this.author}`);
  },
  printMessage(message) {
    return `${this.title}${message}`;
  },

  //   //?1 method
  //   printSomething: function (someValue) {
  //     return someValue;
  //   },
  //   //?2 mehthod
  //   printSomething:(someValue)=>{
  //     return someValue;
  //   }
  printSomething(someValue) {
    return someValue;
  },
};
console.log(book1);
book1.printAuthor();
const result = book1.printMessage('Login');
console.log(result);

interface Computer {
  readonly id: number;
  brand: string;
  ram: number;
  storage?: number;
  upgradeRam(ram: number): number;
}

let computer1: Computer = {
  id: 1,
  brand: 'Dell',
  ram: 16,
  storage: 500,
  upgradeRam(ram: number) {
    this.ram = ram;
    return this.ram;
  },
};
console.log(computer1);
computer1.upgradeRam(32);
console.log(computer1);

interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}
interface Employee extends Person {
  id: number;
  printId(id:number):void
}

let emp: Employee = {
  name: 'shakeandbake',
  age: 30,
  id: 1,
  greet(phrase: string) {
    console.log(phrase);
  },
  printId(id:number){
    console.log(id);
  }
};

console.log(emp);
emp.greet('hello');
emp.printId(10);
console.log(emp.greet('hello'));

