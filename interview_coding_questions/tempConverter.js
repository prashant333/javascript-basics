//Challenge 1

//Create a function called getCelsius() that takes a temperature in 
// Fahrenheit as an argument and returns the temperature in celsius.

// For bonus points, write it as a one line arrow function


// Method 1
/*
function getCelsius(num){
    return (num - 32) * 5 / 9
}

console.log(getCelsius(32))
*/

// Method 2

const getCelsius = (num) => ((num - 32) * 5 / 9)

console.log(`The temperature is ${getCelsius(32)} \xB0C`)


// Challenge 2

// Create an arrow function called minMax() that takes in an array of numbers 
//and returns an object with the minimum and maximum numbers in the array.


minMax = (array) =>({
    min: Math.min(...array),
    max: Math.max(...array)
})

console.log(minMax([1, 2, 3, 4, 5]));