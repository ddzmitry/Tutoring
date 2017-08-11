
/// ARRAY DISTRUCTURING

function foo() {
    return [1,2,3,4,5,6,7,8,9]
}
// Pattern matching
// you can also set the default values in array returns 
//a = 'blah' etc !
var [a=12,b=42,c=12,...z] = foo() || [];

console.log(a,b,c,z)
let o = {a,b,c,z};
// o 

// SWAPPING VARIBLES WITH DESTRUCTURING
var x = 10 , y = 20;
[x,y] = [y,x]
// x
//y

// fumping data with empty spaces 
var a = [1,2,3];
[ , , ...a] = [0, ...a , 4]
//////////////////////////////////////////////////

// NESTED ARRAY DISTRUCTURING 
function foo2() {
  return [1,2,3,[5,6,7,8,9] ]
}

var a,b,c,args;
// if you assigin it as variable it will be returned array which is whole return ! 
[
    a,
    b = 42,
    c,
    // [...args]
    // or
      [
          d,
          e,
          f,
        
      ],
        
    
] = foo2() || []
console.log(a,b,c,d,e,f)
////////////////////////////////////////
function foo4(){
    return {z:'Object', x:'Will' ,v:'Destruct'}
}
//can set default as well 
var { z = 10,x = 42 ,v} = foo4() || {} // and set default if there is nothing to be returned
console.log(z,x,v)

//////////////////////////////////////funciton destructure
function foo6([a,b,c] = [] ){
        console.log(a,b,c)
}
    // foo6(1,2,3) => Not going to work
    foo6([1,2,3])
////////////////////////Object function destructuring
// you can also set a default value inside of object destructuring
function foo7({a,b =10,c} = {} ){
        console.log(a,b,c)
}
    foo7({
        a:1,
        c:3
    })

 /////________________________________MIXING OBJECTS_______________________________________
/////////////////////////////////////////////////////
var defaults = {
    method : "POST",
    callback: function(){

    },
    headers: {
    contenttype : "text/plain"
    }
}
var config = {
    url: "someurl",
    callback : foo,
    headers: {
        request : "bar"
    }
}
///////////////////destructuring and mixing at the same time 
{
    let {
        method = defaults.method,
        url,callback = defaults.callback,  
        headers: {
            "content-type": ContentType = defaults.headers["contenttype"] ,
            "x-requested":xRequestedWidth = "REQUEST"
        }
    } = config;
/////////////////////////////////////RESTRUCTURING OBJECT 
    config = {
        method,
        url,
        callback,
        headers : {
            contenttype : ContentType,
            xRequest : xRequestedWidth
        }
    }
}
////behavior of prototype cchaining
var {A} = Object.create( {A:"Created"})
console.log(A)