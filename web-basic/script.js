// alert("file is attached")
// console.log(document)
// const myparagraph= document.querySelector('p')
// myparagraph.textContent="changed using javaScript"

const myPElement = document.querySelectorAll('p')
myPElement.forEach(function(p) {
    p.textContent='changed using javaScript'
})