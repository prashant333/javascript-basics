// immediately invoked functions are called as iife.

// iife are used to safeguard a function from global scope pollution. 

// named iife


(function chai(){
    console.log(`this is named iife`)
})()

console.log('this is separator statement for testing purpose.');

// it is important to terminate the last statemnt with ";" before using iife, else it will give error.

(function aurcode(){
    console.log('this is named iife two')
})();

// normal iife 

(()=>{
    console.log("this is arrow function iife")
} )()