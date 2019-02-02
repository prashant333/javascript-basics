// Multipling rhe numeric entries.
let salary = {
    ramesh : 400,
    sukesh : 400,
    malesh : 200,
    admin : "suresh"
} 
function sumSalary(obj) {
    let sum = 0;
    for (let key in obj) {
        if(!isNaN(obj[key])){
            sum += 2* (obj[key]);
        }
    }return sum
}
console.log(sumSalary(salary))