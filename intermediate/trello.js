let myTodo = {
    day:'Monday',
    meeting: 0,
    meetingDone: 0,
}

let addMeeting =function(todo, meet=0){
    todo.meeting= todo.meeting+ meet
    return `number of meetings ${todo.meeting}`
}

let meetDone = function(todo , meet=0){
    todo.meetingDone= todo.meeting -meet
    return `number of meeting done is ${todo.meetingDone}`
}
let daySummary = function(todo){
    let meetingLeft = todo.meeting - todo.meetingDone
    return `number of meeitng left ${meetingLeft}`

}
let resetTodo = function(todo){
    todo.day='Tuesday'
    todo.meeting ='0'
    todo.meetingDone ='0'

}
console.log(addMeeting(myTodo, 4))
console.log(meetDone(myTodo, 2))
console.log(daySummary(myTodo))
console.log(myTodo.day)