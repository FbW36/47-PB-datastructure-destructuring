// 1. Array Destructuring
let fruit = "banana";
let veggie = "cucumber";
let food = ["bread", "cake", "pizza"];

const [b, c, p] = food;

console.log (`I like to eat ${b} with ${c} and ${p}!`)

// 2 Object Destructuring
const reformation = {
    Bill: "Martin Luther",
    John: "John Calvin",
    Anton: "John Knox" 
}

const {Bill, John, Anton} = reformation;

console.log (`${Bill}, ${John} and ${Anton} where three of the great reformers in the Reformation.`)

// 3. Parameters: Object Destructuring
const bandDetail = {
    band: "Sovereign Grace",
    nationality: "USA",
    genre: "Christian",
}

const {band, nationality, genre} = bandDetail;

console.log(`${band} is a ${genre} band from the ${nationality}!`);