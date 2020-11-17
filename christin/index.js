/*1. Array Destructuring
Declare the variables fruit, vegetable, food.Assign the following values to the variables respectively: "banana", "cucumber", "bread", "cakes", "pizza"(assign the "bread", "cakes" and "pizza" to food).Use array destructuring assignment to complete this task.*/

let [fruit, vegetable, ...food] = [
  "banana",
  "cucumber",
  "bread",
  "cakes",
  "pizza",
];

console.log(fruit, vegetable, food); // banana cucumber [ 'bread', 'cakes', 'pizza' ]

/**2.Object Destructuring
Create an object which contains key pair values of names and the respective halloween costume e.g. fran: "witch". Assign each key pair value to corresponding variable. Print out the object values. */

const { fran, edgar, mario } = {
  fran: "witch",
  edgar: "frankenstein",
  mario: "ghost",
};

console.log({ fran, edgar, mario }); // { fran: 'witch', edgar: 'frankenstein', mario: 'ghost' }

/**3. Parameters: Object Destructuring
Create an object with band/musician details e.g. name of the band/musician, greatest hit, nationality, genre etc.
Then, create a function to display all of the band/musician's data.
Example :
`Regina Spektor is a American-Russian singer/songwriter and pianist. The musician sings indie-pop and their greatest hit is "Us"`.*/

let data = {
  band: "Nirvana",
  country: "US",
  hit: "come as you are",
  genre: "Rock",
  overview: function () {
    return `${this.band} , a music act from ${this.country} plays music in the genre ${this.genre} and the greatest hit is ${this.hit}.`;
  },
};

console.log(data.overview()); // Nirvana , a music act from US plays music in the genre Rock and the greatest hit is come as you are.

// solution 2

let data2 = {
  band: "Nirvana",
  country: "US",
  hit: "come as you are",
  genre: "Rock",
};

function getBand(data) {
  return `${data2.band} , a music act from ${data2.country} plays music in the genre ${data2.genre} and the greatest hit is ${data2.hit}.`;
}

console.log(getBand(data2));
