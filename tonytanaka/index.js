// 1
let fruit;
let vegetable;
let food;
const shop = ["banana", "cucumber", "bread", "cakes", "pizza"]
const [shop_1, shop_2, ...otherItems] = shop
fruit = shop_1
vegetable = shop_2
food = otherItems
console.log(`fruit = ${fruit}, vegetable = ${vegetable}, food = ${food}`)

// 2
const costumes = {
    tony: 'police office',
    carol: 'astronaut',
    juliana: 'waitress'
}
const {tony, carol, juliana} = costumes
console.log(tony, carol, juliana)

// 3
const band = {
    name: "Legiao Urbana",
    nationality: "brazilian",
    genre: "rock / pop",
    greatest_hit: "sera?"
}
function report (band) {
    let {name, nationality, genre, greatest_hit} = band;
    return (`${name} is a ${nationality} band, famous for its ${genre} genre, and one of the most famous hits is ${greatest_hit}`)
}
console.log(report(band))