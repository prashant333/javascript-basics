// Accessing values from array or objects using destructuring method.
// Order of destructuring matters in array, ie - elements are fetched in the same order as they are present in an arry.


const fruits = ['orange', 'banana', 'lemon'];
const friends = ['Ram', 'Shyam', 'Radha', 'Shita', 'Lakhan'];

// 1. Normal value retrieval 

const fruit1= fruits[0]
const fruit2 = fruits[1]
const fruit3 = fruits[2]

console.log(fruit1, fruit2, fruit3)

//2.1 Using destructuring method, using the same keyword.

const[ram, shayam, radha, shita, lakhan] = friends
console.log(ram, shayam, radha, shita, lakhan)

// 2.2 Using different variable names

const[hi, hello, bye, good, nice] = friends
console.log(hi, hello, bye, good, nice)

// 2.3 Skipping items from array.

const[Ram, ,Radha, ,Lakhan] = friends
console.log(Ram, Radha, Lakhan)

// swapping variables in javascript without using temp variable. 

// let first = "Ram";
// let second = "Shyam";

// [second, first] = [first, second]

// console.log(first, second)


console.log("************ Object Destructuring ***************")

// order of properties fetched dosen't matter in case of Object destructuring. 

const bob = {
    first: 'bob',
    last: 'sanders',
    city: 'chicago',
    siblings: {
      sister: 'jane',
    },
};

// 1. accessing values by property name.
// const {first, last,city} = bob
// console.log(first, last, city)

// 2. accessing values by property name using alias.

const{first:firstName, last, city} = bob
console.log(firstName, last, city)