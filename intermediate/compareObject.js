let ob1 = {
    x: 104,
    y: 20,
};
let ob2 = {
    w: 10,
    z: 22,
}
function compare(ob1, ob2) {
    let test = 0
    for (const key in ob1) {
        for (const key1 in ob2) {
            if (ob1[key]==ob2[key1]) {
                console.log(ob1[key])   
                test = 1;
            }
        }
    }if (test ==0) {
        console.log('no match')
    }
}
compare(ob1,ob2)