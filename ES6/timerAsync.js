var fetch = require('node-fetch');
// function z, y
let hardjob = (a,b) => a*b 
let testig = (hardjob,a,b) => hardjob(a,b)
try{ let number = testig(hardjob,5,6)}
catch(err){
console.log(err)
}

//ceating custom timer using 
function timeout(ms,x) {
  return new Promise(resolve => setTimeout(resolve(x), ms));
}

async function tester () {
  
   let data1 =  await timeout(2000,hardjob(5,5))
   let data2 = await  timeout(3000,hardjob(6,5))
    let data3 = await  timeout(10000,hardjob(6,5))
   return [data1,data2,data3]
  }

tester().then((data)=>{
  
  console.log(data)
})

async function foo() {
  let arr = []
  let x = await fetch('https://swapi.co/api/people/1')
  let y = await fetch('https://swapi.co/api/people/2')
  arr.push(x,y)
  Promise.all(arr)
  .then(data => console.log(data))
}
// Another Way! 
const response = await (await fetch('http://api.icndb.com/jokes/random'));

const FetchAll = (urls = []) => Promise.all(
  urls.map(url=> fetch(url)
    .then(r => r.json()
      )
    )
)


   FetchAll(['https://swapi.co/api/people/1','https://swapi.co/api/people/2'])
   .then(data=>console.log(data))
    

    //  another good way of showing student how async works
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default (async function showResults(values) {
  await sleep(500); // simulate server latency
  window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
});