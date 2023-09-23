// Accessing values from array or objects using destructuring method.


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

let first = "Ram";
let second = "Shyam";

[second, first] = [first, second]

console.log(first, second)
