//1
let [fruit, vegetable, ...food] = [
  "banana",
  "cucumber",
  "bread",
  "cakes",
  "pizza",
];

//2
const object = {
  fran: "witch",
  peter: "mummy",
};
// console.log(Object.values(object));

//3
const musician = {
  name: "Regina Spektor",
  greatestHit: "Us",
  nationality: "American-Russian",
  genre: "indie-pop",
  occupation: "musician",
  skills: ["singer", "songwriter", "pianist"],
};
function displayData({
  name,
  greatestHit,
  nationality,
  genre,
  occupation,
  skills,
}) {
  return `${name} is an ${nationality} ${skills
    .slice(0, -1)
    .join(", ")} and ${skills.slice(
    -1
  )}. The ${occupation} sings ${genre} and their greatest hit is ${greatestHit}`;
}
// console.log(displayData(musician));
