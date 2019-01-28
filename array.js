// const superHeroes=['batman','iron man','spiderman','Thor']
// console.log(superHeroes)
// console.log(superHeroes[0])
// console.log(superHeroes[2])
// console.log(superHeroes[superHeroes.length-1])
// console.log(`we have ${superHeroes.length} super heroes`)

// passing arguments in array

console.log(max(1,-3,10,20))
function max(...numbers) {
    let result = -Infinity
    for(let number of numbers){
        if (number > result) {
            result = number
        }
    }
    return result
}

