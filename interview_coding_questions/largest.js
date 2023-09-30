// find the largest number in a nested array. 

let numbers= [2,3,[4,7,[32,9]]];

// Method 1.

// flat(), method of array is used to flatten the nested array.
// flat takes depth level as an argument and returns a new array.

let new_number = numbers.flat(2)

console.log(Math.max(...new_number))

// Method 2.  

function largestNumber(arr){
    return arr.reduce((largest, current) =>{  // use of {} makes a difference in output of the result,
    // if we use () instead of {}, we get a proper result.
        (current> largest? current:largest)
}, [])
}

console.log(largestNumber(new_number))

// GeeksforGeeks example

function largestElement(arr) {
    return arr.reduce((largest, current) =>
        (current > largest ? current : largest), arr[0]);
}
  
let num1 = [10, 15, 38, 20, 13];
console.log(largestElement(num1));

// Method 3. 

function largest_3(arr){
    return Math.max(...arr)
}

console.log(largest_3(new_number))