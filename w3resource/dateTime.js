/* Write a JavaScript program to display the current day and time in the following format.
Today is : Tuesday.
Current time is : 10 PM : 30 : 38 */

todayDate = new Date()

//console.log("Today is :", todayDate.getDay())
console.log(todayDate.toString().slice(0,3))
console.log(todayDate.toLocaleString())
