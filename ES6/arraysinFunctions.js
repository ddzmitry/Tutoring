var x = 1;
function foo8(x = 2 , f =function(){return x; }){
      var x = 5; 
      
    console.log(f());
}
foo8()
////////////////////////////////////////////////////////
//IMPERATIVE puts the args into an array 
// gathering arguments in array
 function foo(...args){
     args.push(...args)
     args.unshift(...['a'])
     console.log(args)
 }
foo(1,2,3,4,5,6)

// concating arrays
var x = [1,2,3,4,5]
var y = [6,7,8,9]
var z = [0,...x,...y,6]

// function foo3(x,y,...rest){
//     return [...rest,...x,...y];
// }
// console.log(foo3(x,y))
let string = "hello"
let stringArr = [...string].reverse().join('')
stringArr



function foo4(x,y,z,...rest) { 
// x y z will be an elements of array z>0[2] y>1[4] z>2[6]  
	console.log(x)
	console.log(y)
	console.log(z)
	return ([x,...rest])
}

function bar() {
	var a1 = [ 2, 4 ];
	var a2 = [ 6, 8, 10, 12 ];

	return foo4(...a1,...a2);
}

console.log(
	bar().join("") === "281012"
);

const random = () => (
	new Array(3)
	.fill(0)
	.map(
		(_,i) =>({
			tag:'Hello',
			count: Math.random()
		})
	)
)
console.log(random())
// filtering on numbers
let str = '12sdawdfwerfaew'
let str2 = '1sdfgserdjawd'
let str3 = '222dsfwesg'
console.log([...str].filter(el=>parseInt(el)? el : '').join(''))
console.log([...str2].filter(el=>parseInt(el)? el : '').join(''))
console.log()
const companyId = [...req.body.company_name].filter(el=>parseInt(el)? el : '').join('')

newStuff = (bool) => {
    return new Promise((resolve,reject)=>{
        bool ? resolve('Hello') : reject('404')
    })
}
newStuff(true).then(data => {
    console.log(data)
}).catch(err=>console.log(err))