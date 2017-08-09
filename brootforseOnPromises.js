const password = 'yellowbluebus';

let brootForser = (...params) => {
            console.log(params);

  return new Promise((resolve, reject) => {

                params.forEach((broot)=> broot === password ? resolve(`Your password is ${broot}`) : resolve('fail'))
                // or can be reject but if you do resolve you can visualy see what is going on ! 

}); 

}

let passwords = ['hello', 'world', 'foo', 'bar', 'yellowbluebus', 'test']
passwords.forEach((p)=>{

Promise.all([...[brootForser(p)]]).then(values => { 
values
}).catch((error)=> error);

})