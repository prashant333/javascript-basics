// let calculator = {
//     read(){
//         this.a = +prompt('a',0);
//         this.b = +prompt('b',0);
//     },
//     sum(){
//         return this.a + this.b;
//     },
//     mul(){
//         return this.a * this.b;
//     }
// }
// calculator.read();
// alert(calculator.sum())
// alert(calculator.mul())

function Calulator() {
    this.read= function(){
        this.a = +prompt('a',0);
        this.b = +prompt('b',0);
    };
    this.sum = function() {
        return this.a + this.b;
    };
    this.mul = function() {
        return this.a * this.b;
    };
}

let calc = new Calulator()
calc.read();
alert(calc.sum());
alert(calc.mul());

