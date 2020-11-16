
// #### 1. Array Destructuring

const destructingArray = ["banana", "cucumber", "bread", "cakes", "pizza"];

const [fruit, vegetable, ...food] = destructingArray;
console.log(fruit);  // 'banana'
console.log(vegetable); // 'cucumber'
console.log(food);  // ['bread', 'cakes', 'pizza']

// ===================================================

// #### 2.Object Destructuring

// I did not git the question!

// =========================================================

// #### 3. Parameters: Object Destructuring 

const band =
{
    name: 'John Doffer',
    age: 33,
    country: 
        { 
            state: 'California',
            city: 'Metshigin'
        },
    genre: 'pop',
    instrument: 'Guitar'
};

function printMusician(singer)
{
    console.log(`Mr ${singer.name} ${singer.age} years old is a famous singer and ${singer.instrument} player from US, ${singer.country.state}, in ${singer.country.city} city`);
}

printMusician(band);



