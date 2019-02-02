// // Multipling rhe numeric entries. Method - 1
// let salary = {
//     ramesh : 400,
//     sukesh : 400,
//     malesh : 200,
//     admin : "suresh"
// } 
// function sumSalary(obj) {
//     let sum = 0;
//     for (let key in obj) {
//         if(!isNaN(obj[key])){
//             sum += 2* (obj[key]);
//         }
//     }return sum
// }
// console.log(sumSalary(salary))

// Multipling rhe numeric entries. Method - 2
let salary = {
    ramesh : 400,
    sukesh : 400,
    malesh : 200,
    admin : "suresh"
}
function sum(obj) {
    let sum = 0;
    for (const key in obj) {
        if (obj.hasOwnProperty(key)&& typeof obj[key]=='number') {
            sum += obj[key]  
        }
        else{
            return 'No Numeric entries'
        }
    }return sum
}
console.log(sum(salary))