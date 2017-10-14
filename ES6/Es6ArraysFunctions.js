

var randomWords = require('random-words');


let hello = () => 'Hello'
let world = () => 'World'
// let strshow = (s) => console.log(s)
// let total = (a,b) => a() + b()
// total(hello,world) => data => strshow(data)
arr = [2,3,4,5,6,7]
const double = x => x * 2;
const doubled = arr.map(double);

// function that does factorials 
const factorial = (num,res=1) =>  num > 0 ? factorial(num-1,res*num) : res
console.log(factorial(8))
// sum
const sum = arr.reduce((a,b)=>a+b)
console.log(sum)
// to see if words are having all letters of the alpabete

let abc = "abcdefghijklmnopqrstuvwxyz".split('')
randomWords(10).forEach((word)=> word.split('').forEach(letter => abc=abc.filter(abclet => abclet != letter)))
console.log(abc)

//  will return an obkect of key value pairs
let objarr = [ {name:'Kevin'}, {job:'Developer'}, {age:18}]
const count = objarr.reduce((obj,el)=>{
    obj[Object.keys(el)] = el[Object.keys(el)]
    return obj
},{})



const princesses = [
    { name: "Rapunzel", age: 18 },
    { name: "Mulan", age: 16 },
    { name: "Anna", age: 18 },
    { name: "Moana", age: 16 }
  ];
  
  // log the name of each princess, follow by a colon, followed by their age
  // forEach: executes a provided function once for each array element
  princesses.forEach( princess => console.log(`${princess.name}: ${princess.age}`));
  
  // create an array of just the names from the princesses array
  // map: creates a new array with the results of calling a provided function on every element in the calling array
  const names = princesses.map(princess => princess.name);
  const mNames = names.filter( name => name.startsWith("M"));
  const sum = princesses.reduce(function(sum, princess) {
    return sum + princess.age;
  }, 0);

const getName = ({name: firstname}) => firstname
let dz = {
    name: 'Dzmitry',
    age : 18
}
console.log(getName(dz))
// arr destructuring
let names = ['Hello','World','Peter','Dzmitry','People']
let [first,second,third, ...rest] = names
 function hello(...data){
     console.log
 }
const addName = name => [...names,name]
console.log ( addName('Stephen'))

class Person {
    constructor(age,name){
        this.age =age
        this.name = name
    }
    sayHello (){
        console.log(this.name + " Saya Hello")
    }
}
let Dz = new Person('Dzmitry',25)
Dz.sayHello