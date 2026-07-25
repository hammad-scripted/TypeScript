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
