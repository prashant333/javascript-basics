let nameFunction= function(name){
    console.log('hey everyone I am using function')
    console.log(`greeting message for user ${name}`)
    console.log(`name is ${name}`)
}
nameFunction("prashant")

let fullNameMaker =function(firstName,lastName){
    console.log(`full name is ${firstName} ${lastName}`)
}
fullNameMaker('Prashant','Mani')

let sum =function(num1,num2){
    let add = num1+ num2
    return add
}

let result = sum(10,20)
console.log(result)