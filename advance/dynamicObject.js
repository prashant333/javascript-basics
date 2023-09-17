// dynamic object key insertion

let people = {
    name: 'Prashant',
    age: 27,
    position: "Project delivery"
}

function updatePeople(key, value){
    people[key] = value; 
}

updatePeople('name', 'Sachin')

console.log(people)
