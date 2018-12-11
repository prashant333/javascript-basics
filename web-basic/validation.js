// alert("file connected")
// function myValidation(){
//     let mynumber= document.getElementById("mynum").value
//     if (isNaN(mynumber)) {
//         document.getElementById('mynum').value= 'enter a valid number'
//     }
// }

// function myform(){
//     document.getElementById('uname','password').value=""
// }
document.querySelector('.myform').addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log(event.target.uname.value)
    console.log(event.target.password.value)
    event.target.uname.value=''
    event.target.password.value=''
    

})