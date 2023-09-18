let people = [
    {
        name:"Prashant",
        age: 27,
        position: "Project delivery",
        company: "kazam"
    },
    {
        name:"Nikshit",
        age: 27,
        position: "Project delivery",
        company:"Kazam"
    },
    {
        name: "Monish",
        age: 26,
        position: "Project Delivery",
        company: "Kazam"
    },
    {
        name: "Apurva",
        age: 24,
        position: "Project Delivery",
        company: "Kazam"
    }
]

let new_MapPeople = people.map((person)=>{
    return {
        firstName:person.name.toUpperCase(),
        position:person.position,
        company:person.company
    }
})

console.log("Type of returned data is:",typeof(new_MapPeople))
console.log(new_MapPeople)

console.log("*****************************new concept********************")
people.forEach((element)=>{
    delete element.value // to delete a property from object
})
console.log(people)