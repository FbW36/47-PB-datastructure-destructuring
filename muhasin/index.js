// Array Destruction 

let [fruit, vegetable, ...food]  =["banana", "cucumber", "bread", "cakes","pizza"]
console.log("fruit, vegetable, food ==>", fruit, vegetable, food); //  ==> banana cucumber [ 'bread', 'cakes', 'pizza' ]

// 2. Object Destructuring 

const {plant,fish,animal} = {
    plant: "Bonsai",
    fish: "Dorado",
    animal: "Horse "
}

console.log("plant,fish,animal ==>", {plant, fish, animal }); // ==> { plant: 'Bonsai', fish: 'Dorado', animal: 'Horse ' }

// 3. Parameters: Object Destructuring

const musician = {
    band: "Modern Talking",
    nation: "German",
    hit: "You're My Heart",
    genre: "Euro Disco"
}

function BandMusic(musician) {
    return ` ${musician.band} is a ${musician.nation} music band, they play ${musician.genre} and their hit song is ${musician.hit}.`
}

console.log("BandMusic ==>", BandMusic(musician));