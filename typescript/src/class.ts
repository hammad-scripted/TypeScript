class Book {
  id: number;
  name: string;
  rating?: number; // Optional property moved after required ones
  price: number;

  constructor(
    id: number,
    name: string,           // Required parameter
    rating?: number,        // Optional parameter
    price: number = 10     // Default parameter (optional when instantiating)
  ) {
    this.id = id;
    this.name = name;
    this.rating = rating;
    this.price = price;
  }

  printBook(): void {
    console.log(`ID: ${this.id}`);
    console.log(`Name: ${this.name}`);
    console.log(`Rating: ${this.rating ?? 'N/A'}`);
    console.log(`Price: $${this.price}`);
  }
}

// Works: All parameters provided
const book1 = new Book(1, 'The Alchemist', 4, 14);
console.log(book1);
book1.printBook();

// Works: Rating is omitted, price defaults to 10
const book2 = new Book(2, 'C++');
console.log(book2);
book2.printBook();