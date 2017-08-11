var x = Symbol("description");
var y = Symbol("description"); // optional description! -> lable or name for the symbol
// Unique Global unguessable value ! 
console.log(x)
console.log(x === y) // false

var obj = {
    id:42,
    [x] : "Shhhhh"
}
obj[x] = "Shhh is secret"
console.log(obj)
console.log(Object.getOwnPropertySymbols(obj)
)

//////////////////____Well known Symbols

Symbol.iterator
// Symbol.toStringTag
// Symbol.toPrimitive
// Symbol.isConcatSpreadable
var arr = [1,2,3]
//create iterator ! x
var it = arr[Symbol.iterator]();
it.next() // {value:1 , done:false}
it.next() // {value:2 , done:false}
it.next() // {value:3 , done:false}]
it.next() // {value: undefined , done: true}
var arr2 = [1,2,3]
// loops oer any iterable! 
for (var v of arr2){

    console.log(v)
}
var str = "Hello"
for (var v of str){

    console.log(v)
}
/// Iterate string into arrau 
console.log([...str]) // ['H','e','l','l','o']

//////CREATE ITERATORS MANUALLY! 
var obj = {
    [Symbol.iterator](){
        var st = this.start, en = this.end;
        var idx = this.start;

        var it ={
                next: () => {
                    var v = this.values[idx];
                    idx++;
                    // if idx<=en true / else false !
                    return { value: v, done: (idx>en) }
                }
        }   
        return it;
    },
    values: [2,6,8,10,12,14,16,18,20,22,24,26,28],
    start : 4,
    end : 13
}

var vals = [...obj]
vals

// GENERATOR !
function *main(){
    console.log('hello')
    yield 9;
    console.log('World')
    yield 10
}
var it = main()
console.log(it.next()) // will priint out "hello" {value:undefined, done:false}
console.log(it.next()) // will print World {value:undefined, done:true}

for ( var v of main()){

    console.log(v)
    
}

function *anothergen(){
    for (var i = 0; i < 5; i++) {
            yield i;
        
    }
}
let anotherIterator = anothergen()
console.log(anotherIterator.next()) //anotherIterator.next().value() is  0 
console.log(anotherIterator.next())
console.log(anotherIterator.next())
console.log(anotherIterator.next())
console.log(anotherIterator.next())
console.log(anotherIterator.next())

// COMPUTED ITERATOR WITH GENERATOR
var obj2 = {
    // iterator that starts values array 
    *[Symbol.iterator](){
            for( var i = this.start; i<=this.end; i++){
                yield this.values[i];
            }
    },
    values: [2,6,8,10,12,14,16,18,20,22,24,26,28],
    start : 4,
    end : 13
}
var vals2 = [...obj]
vals2