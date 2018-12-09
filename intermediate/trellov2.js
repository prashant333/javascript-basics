let myTodo ={
    day:'Monday',
    meeting:0,
    meetingDone:0,
    addMeeting: function(num){
        console.log(`Number of meeting today ${myTodo.meeting= myTodo.meeting+ num}`)
    },
    meetDone: function(num){
        console.log(`Number of meeting left today is ${this.meetingDone= this.meeting-num}`)
    },
    summary: function(){
        console.log(`Number of meeting done is: ${this.meeting - this.meetingDone}`)
    }
}

myTodo.addMeeting(4)
myTodo.meetDone(1)
myTodo.summary()