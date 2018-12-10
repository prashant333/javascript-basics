// // normal function
// const sayHello = function(name){
//     return "Hello there "+ name +" you lost ur match today"
// }

// console.log(sayHello('Pat Cummins'))

// arrow function
// method 1
// const sayHello= (name)=>{
//     return "Hello there "+ name +" you lost ur match today"
// }
// Method 2
// const sayHello = (name)=>`hello there ${name} you lost ur match today`
// console.log(sayHello('Pat Cummins'))

const todos=[{
    title:'Buy Bread',
    isDone:true,
},{
    title:'Go to Gym',
    isDone:true,
},{
    title:'study javascript',
    isDone:false,
},{
    title:'complete sketch',
    isDone:false
}]

const thingsToDo = todos.filter((todo)=>{
    if (todo.isDone==true) {
        console.log(todo.title)
    }
    else
    console.log('left for the day:'+todo.title)
    
})
