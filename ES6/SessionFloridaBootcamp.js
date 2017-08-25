

// let data = {
//     name : "Student",
//     age  : 25

// }
// data

// function foo() {
//     return [1,2,3,4,5,6,7,8,9]
// }

// let data = foo()

var [a=12,b=42,c=12,d='Helllo',...z] = [];
// temp var or default values you can create your own eerorr messages 

a
b
c
d
z

// doing that will prevent you from making errors in you code .

// function speak(word = "Hello") {

//         console.log(word)
// }
// speak()

//spread into function 
// function doSmth (...args){
 
    // i expect JSON or Object be returned 
//     let data ={
//        name : args[0],
//        job : args[1],
//        age : args[2]
//     }

//     return data

// }
// let objectToDb = doSmth('Dzmitry','student',25);
// let objectToDb2 = doSmth('Tom','Developer',40);

// let strin = "student"
// strin = [...strin]
// strin.length

let name = "Californication"
let artist = "RHCP"
let year =  1998 
console.log(`
    <h1>The name of the somg is ${name} </h1>
    <p>and the artst is ${artist}</p>
    the year is ${year}
`)



// var url = "http://gppgle/" + name  + "/search";
// let url2 = `http://gppgle/${name}/search`;

var obj2 = {
    id: 42,
    foo: function foo() {
        // binding wiill reassign scope to the particuar object you are in! 

        setTimeout( () => {
            console.log(this.id);
        }, 100)
    }
}
obj2.foo()

let data = [1, 2, 3, 4, 5];

let data2 = [6, 7, 8, 9];

let data3 = [
    ...data,
    ...data
]

data3

var person = 'Dzmitry';

let reversed = [...person].reverse().join('')
reversed