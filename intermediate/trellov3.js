let myTodos =['5 YouTube videos','Documentation: Array,Maths','Python program']

console.log(myTodos.indexOf('Documentation: Array,Maths'))

let newTodos=[{
    title:'5 YouTube videos',
    isDone:false,
},{
    title:'Documentation: Array,Maths',
    isDone:false,
},{
    title:'Python program',
    isDone:false,
}]

const index = newTodos.findIndex(function(to,index){
    console.log(to)
    return to.title==='Documentation: Array,Maths'
})
console.log(index)

// Method 1 gives the index of passed value

const findTodo = function(myTodos,title){
    const result= myTodos.findIndex(function(todo, index){
        return todo.title.toLowerCase()=== title.toLowerCase()
    })
    return myTodos[result] //findIndex function returns the index of given value.
}

let printMe= findTodo(newTodos,'Python program')
console.log(printMe)

// //  Method 2 gives the value itself.
const findTodos = function(myTodo, title){
    const titleReturned = myTodo.find(function(todo,index){
        return todo.title.toLowerCase() === title.toLowerCase()
    })
    return titleReturned // find function directly returns the value 
}

let print = findTodos(newTodos,'5 youTube videos')
console.log(print)