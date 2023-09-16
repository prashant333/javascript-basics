var john={
    name:'I am john',
    age:24,
    isActive:true
}
var marry={
    name:'I am marry',
    age:23,
    isActive:true
}
var sam={
    name:'I am sam',
    age:29,
    isActive:false
}
let user= new Map()

user.set('Prashant', john)
user.set('Marry', marry)
user.set('sam', sam)

// console.log(user)
// console.log(user.size)
// console.log(user.get('marry'))
// console.log(user.keys())
// for (const key of user.keys()) {
//     console.log(key)
    
// }
// for (const value of user.values()) {
//     console.log(value.age)
    
// }
// for accessing more than one element 

for (const [key,value] of user.entries()) {
    console.log(key+ '='+ value.name)
    
}

