// const myMarks = [150, 200]

const myGrade = function(marks, total){
    let percent = (marks/total)*100;
    console.log(percent)
    if (percent>=90) {
        console.log("grade: A")
    }
    else if (percent>=80) {
        console.log("grade: B")
        
    } else if (percent>=70) {
        console.log("grade: C")

    }else if (percent>=60) {
        console.log("grade: D")
        
    }else if (percent>=50){
        console.log("grade: E")
    }else {
        console.log("fail")
    }
}

myGrade(155 ,200)