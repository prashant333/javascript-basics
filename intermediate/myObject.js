// let myYouTubeVideo={
//     title:'javaScript course',
//     price:1000,
//     author:'Prashant Mani'
// }
// console.log(`New YouTube video on javaScript named ${myYouTubeVideo.title} by ${myYouTubeVideo.author}`)

// will work in browser.
// let fruit = prompt("Which fruit to buy?", "apple");

// let bag = {
//   [fruit]: 5, // the name of the property is taken from the variable fruit
// };

// alert( bag.apple ); // 5 if fruit="apple"

// aceesing object

// let user = {
//     age :30,
// }
// console.log("name" in user)

// using for in loop to access the object values

let user = {
    name : "John",
    age : 30,
    profession : "teaching" 
}
for (const key in user) {
    console.log(key)
    console.log(user[key])
        
    }