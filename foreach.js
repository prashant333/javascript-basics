const months=['January','February','March','Aprail','May','June','July','August','September','October','November','December']

console.log("first month is"+ months[0])
months.forEach(function (month, index){
    console.log(`Months name are ${index+1} ${month}`);
})