// 1. Array Destructuring
let fruit = "banana";
let vegetables = "cucumber";
let food = ["bread", "cakes", "pizza"];
let [food1, food2, food3] = food;

console.log(`food1 = ${food1} food2= ${food2} food3= ${food3}`);

// 2 .Object Destructuring

let halloweenCostume = {
  fran: "witch",
  alex: "policeman",
  tommy: "doctor",
};

let { fran, alex, tommy } = halloweenCostume;
console.log("costums=", fran, alex, tommy);

// 3  Parameters: Object Destructuring
let musician = {
  band: "LRB",
  vocal: "Baccu",
  nationality: "Bangladeshi",
};

let { band, vocal, nationality } = musician;

let musiciansDetail = ` musiciansDetail = ${band} is a popular band in BD. The vocalist is ${vocal}.He is ${nationality}`;
console.log(musiciansDetail);
