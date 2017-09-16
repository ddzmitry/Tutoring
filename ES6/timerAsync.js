
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