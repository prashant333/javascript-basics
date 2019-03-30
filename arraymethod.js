let numbers =['one','two','three','four','five','six']

// shift and unshift methods
console.log("number deleted is:"+ numbers.shift())
console.log(numbers)

console.log("number inserted is:"+ numbers.unshift("zero")) //numbers.unshift() returns total count of array.
console.log(numbers)

// push pop operations

numbers.pop()
console.log(numbers)
 numbers.push('seven')
 console.log(numbers)

//  splice method

numbers.splice(2, 2,'something','more')
console.log(numbers)

numbers.splice(1,2,'something')
console.log(numbers)

// split and join a given string (camelCasing)
let str = 'hello how are you'
let name = str.split(' '); //creates an array of string
let x = name.map((item, index)=> index ==0 ? item:item[0].toUpperCase()+item.slice(1))
console.log(x.join(''))