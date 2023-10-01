// Fibonacci sequence till given number

function Fibonacci(num){
    
    if (num <=0){
        return []
    }
    let sequence = [0,1]

    while(sequence.length < num){
        let NextNumber = sequence[sequence.length-1] + sequence[sequence.length-2]
        sequence.push(NextNumber)
    }
    return sequence
}

console.log(Fibonacci(10))