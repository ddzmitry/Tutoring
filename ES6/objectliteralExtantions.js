var a = 1
let hello = () => {
    console.log("I am a lttle teapot!")
}
var c = "Good"

var obj = {
    a,
    hello,
    b() {
        console.log("I am a function as well")
    },
    "hello World" () {
        console.log('welll')
    },
    // will create a key name good
    [c]: 42,
    [c + "Funciton"]() {
        console.log("I can be a funciton as well ! ")
    }
};
/// that will work // consies method!
obj["hello World"]() // => calls funciton
obj[c + "Funciton"]() //calls funciton
console.log(obj["Good"]) // display 42
obj

/// backticks template  standard method


var name = "Dzmitry"
var orderNumber = "123"
var total = 319.7
// can assign as a function litteral string! tag function ! 
function foo(strings,...values){
    var str = ""
        for(var i = 0 ; i< strings.length; i++){
            if (i>0) str += values[i-1];
            str += strings[i]
        }
    console.log(strings) // [" "]
     console.log(values) // ['Dzmitry', '123' , 319.7]
     return str;
}
var message = foo` ${name} your order ${orderNumber} and your total is $${total} `
console.log(message)


