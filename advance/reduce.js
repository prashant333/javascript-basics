// reduce function reduces an array to a single value - number, array, object

const staff = [
    { name: 'bob', age: 20, position: 'developer', salary: 100 },
    { name: 'peter', age: 25, position: 'designer', salary: 300 },
    { name: 'susy', age: 30, position: 'the boss', salary: 400 },
    { name: 'anna', age: 35, position: 'intern', salary: 10 },
];

// first parameter is always to what we want the array to reduce to, second 
// parameter is to access items from the object, and last parameter is default
// value that will be added each iteration in this case it is "0"
const dailyTotal = staff.reduce((position, person) =>{
    position.push(person.position)
    // it is important to always return the reduced value 
    return position
},[])

console.log(dailyTotal)