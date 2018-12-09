let useName = 'ravi123'
let password = '123@#121'

let userCheck = function(myString){
    if ((myString.includes(123)) && (myString.length > 6)) {
        return true
    }
     return false
}

let passwordCheck = function(myString){
    if ((myString.includes('@')) && (myString.length > 5)) {
        return true
    }
    return false
}

console.log(userCheck(useName))
console.log(passwordCheck(password))