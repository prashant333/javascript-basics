// forEach method
const myTodo =[]
myTodo.push("complete 10 programs for web lab")
myTodo.push("get your report ready")
myTodo.push("dont forget hall ticket")

myTodo.forEach(function(todo, i){
    console.log(`Things to be done today ${i+1}: ${todo}`)
})

// fro loop method
const myTodo =[]
myTodo.unshift("complete assignment")
myTodo.unshift("complete report")
myTodo.unshift("complete record book")

for (let i = 0; i < myTodo.length; i++) {
    const element = myTodo[i];
    console.log(element)
    
}