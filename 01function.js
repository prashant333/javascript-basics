let myMultiplier = function(num1, num2){ 
    return num1*num2
}
console.log(myMultiplier(2,3))

let guestUser =function(name = 'Raj',courseCount= 0){ //default parameters are the fallback values.
    console.log('hello '+name +' and your course count is: '+courseCount)
}
guestUser() // when no parameters are passed default values takes over.
guestUser('Ram',3)