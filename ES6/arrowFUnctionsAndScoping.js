foo = () => 2;

// let bar = foo(); console.log(bar)
function foo() {
    return 2;
}

let data = [1, 2, 3, 4, 5];

let data2 = [6, 7, 8, 9];

let data3 = [
    ...data,
    ...data2
]

// to return objet
x => ({x: y});

var foo = x => 3 + x;
console.log(foo.name)
console.log(foo(30))

// let p = () => fetch('https://google.com'); /////// p.then(function
// extractId(v){return v.id}) p.then( v => v.id) old way

// var obj2 = {
//     id: 42,
//     foo: function foo() {
//         setTimeout(function () {
//             console.log(this.id);
//         }, 100)
//     }
// }
// obj2.foo()

function search(username,cb){
 
    setTimeout(() => cb("Found User " + username) , 2000)
}
search('Dzmitry', function(data){

    console.log(data)
})


var obj2 = {
    id: 42,
    foo: function foo() {
        setTimeout(function () {
            console.log(this.id);
        }.bind(this), 100)
    }
}
//undefined
obj2.foo()

var obj3 = {
    id: 42,
    foo: function foo() {
        // taking of bind!!! with arrow function
        setTimeout(() => console.log(this.id) , 100)
    }
}
obj3.foo()

function ifStatement(x) {

    if(x > 5 ) return x;
    else return 1;

}
console.log(ifStatement(6))

let ifStatementArr = (x) => x>5 ? x : 1;

console.log(ifStatementArr(7))

// Declare parameter value inside of the function 
// is amazing hahah! 
let declarativeFunciton = (x, y = x * 5) => x + y;
console.log(declarativeFunciton(5))


// you can use call,apply,bind only ob FUNCTION WORD!! !!
function hello(data = 1) {

    console.log('hey ' + data)
}

hello.call()
hello.apply()

// call function
// var animals = [
//   { species: 'Lion', name: 'King' },
//   { species: 'Whale', name: 'Fail' }
// ];

// for (var i = 0; i < animals.length; i++) {
//   (function(i) {
//     this.print = function() {
//       console.log('#' + i + ' ' + this.species
//                   + ': ' + this.name);
//     }
//     this.print();
//   }).call(animals[i], i);
// }

// TDZ - Temporaty Dead zone 
function foo5 (x,y){
            if(x > y){
                    { let x = 2
                            console.log(x)
                    }

            }
}
// CONST can be changed if it is an array or object
const y = [1,2,3,4,5]
y[0] = 42
// Can not change! 
const f = Object.freeze([1,2,3,4,5])
f[3] = 5
f

// falsy thruthy

function truthy(x){
    x = x !== undefined ? x : 42;
    console.log(x)
}

 truthy.apply(null,[,])
  truthy()
// imperitive form  // lazy expression 
////////////////////////////////////////////////////////////
// Will call funciton if there is no value! 
function caller(){
    console.log('!')
    throw "Parameter Reauired"
}
function tester(x = caller()){
    console.log(x)
}
tester()
tester(5)
///////////////////////////////////////////////////////////////
var x = 1;
function foo8(x = 2 , f =function(){return x; }){
    // x = 5; WILL RETURN 5
    console.log(f());
}
foo8()