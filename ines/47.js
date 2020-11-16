//1
let fruit, vegetable, food;
[fruit, vegetable, ...food] = ["banana","cucumber","bread","cakes","pizza"]

console.log("1==>",fruit, vegetable, food);

//2
const costumes = {fran:"witch", costa:"hanuka", zeddy:"giraffe" }
const {fran, costa, zeddy} = costumes;
console.log("2---------------------------");
console.log(fran);
console.log(costa);
console.log(zeddy);

//3
const shakira = {
    name: "Shakira Isabel",
    greatest_hit: "Hips don't lie",
    nationality: "Colombian",
    genre: "pop/latino"
}
const {name,greatest_hit,nationality,genre} = shakira

function data (object) {
return `${name} is a ${nationality} singer. She sings ${genre} music and her greatest hit is ${greatest_hit}`;
}

console.log(data(shakira));