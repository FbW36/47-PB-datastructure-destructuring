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

const {l, j, k} = reformation;

console.log (`${Bill.l}, ${reformation.j} and ${reformation.k} where three of the great reformers in the Reformation.`)