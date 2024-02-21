// example of a curry function
// example 1
function add(a){
    return function (b){
        return function(){
            return a+b
        }
    }
}

let total = add(3)(2)()
console.log(total)

// example 2
function add1(a){
    return function(b){
        if (b) return add1(a+b);
            return a;
    }
}

let new_total = add1(5)(3)(3)();
console.log(new_total)