// Convert a string a to title case(capitalize the first letter of each word)

givenString = "how has been your day"

function capitalize(string){
    tempArray = string.split(" ")
    for (let i= 0; i<tempArray.length; i++){
            tempArray[i] = tempArray[i][0].toUpperCase() + tempArray[i].substr(1)
    
    }
        return tempArray.join(" ")
}

console.log(capitalize(givenString))

// Method 2.
// Using map function

words = givenString.split(" ")

console.log(words.map((word)=>{
    return word[0].toUpperCase() + word.substring(1);
}).join(" "))

