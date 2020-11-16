let log = console.log;

// Declare the variables fruit, vegetable, food. Assign the following values to the variables respectively: "banana", "cucumber", "bread", "cakes", "pizza" (assign the "bread", "cakes" and "pizza" to food). Use array destructuring assignment to complete this task
let fruit;
let vegetable;
let food;
const goods = ['banana','cucumber','bread','cakes','pizza']
let [first,second,...rest] = goods
fruit = first
vegetable = second
food = rest
log(`fruit: ${fruit}, vegetable: ${vegetable} and some other food: ${food}`)

// Create an object which contains key pair values of names and the respective halloween costume e.g. fran: "witch". Assign each key pair value to corresponding variable. Print out the object values
const {Fran,Billy} = {Fran: 'witch', Billy: 'necromancer'}
log(Fran,Billy)

// Create an object with band/musician details e.g. name of the band/musician, greatest hit, nationality, genre etc.
// Then, create a function to display all of the band/musician's data
const band = {
    bandName: 'Dinosaur Jr.',
    greatest_hit: 'Wagon',
    nationality: 'U.S.',
    genre: 'ear-bleeding country',
}
let{bandName, greatest_hit, nationality, genre} = band
function printBandsData(obj) {
    return `${bandName} is a ${nationality} band playing ${genre}. Their greatest hit could be ${greatest_hit}.`
}
log(printBandsData(band))