// let myYouTubeVideo={
//     title:'javaScript course',
//     price:1000,
//     author:'Prashant Mani'
// }
// console.log(`New YouTube video on javaScript named ${myYouTubeVideo.title} by ${myYouTubeVideo.author}`)

// will work in browser.
let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert( bag.apple ); // 5 if fruit="apple"