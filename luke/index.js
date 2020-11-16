// #### 1. Array Destructuring
let fruit;
let vegetables;
let food;
const toAssign = ["banana", "cucumber", "bread", "cakes", "pizza"];
const [item1, item2, ...restOfItems] = toAssign;
fruit = item1;
vegetables = item2;
food = restOfItems;
console.log(fruit, vegetables, food);

// #### 2.Object Destructuring
const halloween = {
  luke: "zombie",
  jess: "scarecrow",
  jack: "monster",
};

const { luke } = halloween;
console.log(luke);
const { jess } = halloween;
console.log(jess);
const { jack } = halloween;
console.log(jack);

// #### 3. Parameters: Object Destructuring
const musician = {
  name: "John",
  instrument: "Piano",
  nationality: "German",
  genre: "Jazz-Funk",
  bandName: "Funky-Junkers",
};

const { name } = musician;
const { instrument } = musician;
const { nationality } = musician;
const { genre } = musician;
const { bandName } = musician;

console.log(`
${name} is a ${nationality} singer, who plays the ${instrument} in the ${genre} band, ${bandName}
`);
