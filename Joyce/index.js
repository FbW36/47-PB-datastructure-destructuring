// 1. Array Destructuring
// Declare the variables fruit, vegetable, food. Assign the following values to the variables respectively: "banana", "cucumber", "bread", "cakes", "pizza" (assign the "bread", "cakes" and "pizza" to food). Use array destructuring assignment to complete this task.
let [fruit, vegatable, ...food] = [
  "banana",
  "cucumber",
  "bread",
  "cakes",
  "pizza",
];
console.log(fruit, vegatable, ...food);

// 2.Object Destructuring
// Create an object which contains key pair values of names and the respective halloween costume e.g. fran: "witch". Assign each key pair value to corresponding variable. Print out the object values.
const { Fran, Tom, Lucy, Quinn } = {
  Fran: "witch",
  Tom: "Superman",
  Lucy: "Catwoman",
  Quinn: "Harry Potter",
};

console.log(Fran, Tom, Lucy, Quinn);

// 3. Parameters: Object Destructuring
// Create an object with band/musician details e.g. name of the band/musician, greatest hit, nationality, genre etc.
// Then, create a function to display all of the band/musician's data.
const objectBand = {
  name: "Queen",
  greatesthHit: "Flash",
  nationality: "UK",
  genre: "Rock",
};

const checkoutBand = (obj) => {
  let { name, greatesthHit, nationality, genre } = objectBand;
  return `${name} is a ${nationality} ${genre} band. The greatest hits is ${greatesthHit}.`;
};
console.log(checkoutBand(objectBand));
