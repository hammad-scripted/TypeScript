//? In TypeScript, a tuple is a typed array with a pre-defined length and specific types for each index.
let person: [string, number, boolean] = ['shakeandbake', 30, true];

let date:readonly [month:number, day:number, year:number] = [1, 2, 2023];

console.log(date);

// date.push(10);
// date.push(10);
// date.push(10);
// date.push(10);
// date.push(10);

console.log(date);
