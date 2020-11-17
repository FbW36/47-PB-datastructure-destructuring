// # 47-PB-datastructure-destructuring
// # Destructuring

// **Instructions**
// #### 1. Array Destructuring
// * Declare the variables `fruit`, `vegetable`, `food`. Assign the following values to the variables respectively:
// "banana", "cucumber", "bread", "cakes", "pizza" (assign the "bread", "cakes" and "pizza" to `food`). Use array destructuring assignment to complete this task.
let fruit, vegetable, food;
[fruit, vegetable, ...food] = ["banana", "cucumber", "bread", "cakes", "pizza"];

console.log(fruit);
console.log(vegetable);
console.log(food);

// #### 2.Object Destructuring
// * Create an object which contains key pair values of names and the respective halloween costume e.g. `fran: "witch"`.   Assign each key pair value to corresponding variable. Print out the object values.
let { fran, max } = {
  fran: "witch",
  max: "pikachu",
};

console.log(fran);
console.log(max);

// #### 3. Parameters: Object Destructuring
// * Create an object with band/musician details e.g. name of the band/musician, greatest hit, nationality, genre etc.
// * Then, create a function to display all of the band/musician's data.
// * Example
// ```javascript
// `Regina Spektor is a American-Russian singer/songwriter and pianist. The musician sings indie-pop and their greatest hit is "Us"`.
// ```

const musician = {
  name: "Regina Spektor",
  greatestHit: "Us",
  nationality: "American-Russian",
  genre: "indie-pop",
  occupation: "musician",
  skills: ["singer", "songwriter", "pianist"],
};

let { name, greatestHit, nationality, genre, occupation, skills } = musician;
function print(musician) {
  return `${name} is an ${nationality} ${skills}. The ${occupation} sings ${genre} and their greatest hit is ${greatestHit}`;
}

console.log(print(musician));

// let a, b, rest;
// [a, b] = [10, 20];
// console.log(a); // 10
// console.log(b); // 20

// [a, b, ...rest] = [10, 20, 30, 40, 50];
// console.log(a); // 10
// console.log(b); // 20
// console.log(rest); // [30, 40, 50]

// ({ a, b } = { a: 10, b: 20 });
// console.log(a); // 10
// console.log(b); // 20

// // Stage 4(finished) proposal
// ({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
// console.log(a); // 10
// console.log(b); // 20
// console.log(rest); // {c: 30, d: 40}
