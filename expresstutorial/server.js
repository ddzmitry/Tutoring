
//Boiler Plate 
const express = require('express');
const path = require('path')
const bodyparser = require('body-parser')
require('es6-promise').polyfill();
require('isomorphic-fetch');
const app = express();
const PORT = 4000;
// bodyparser 
app.use(bodyparser.json()) // body parser will take JSON
app.use(bodyparser.urlencoded({extended:true})) // be able to send from front end to back end 
app.use(bodyparser.text())// send ext from fromt end to backend
app.use(bodyparser.json({type: "application/vnd.ai+json"})) // make a stream happened 

//defining our app


// Routes
app.get('/', (req,res)=>{
/*
 req  - THAT WHAT user makes
 res - THAT what server returns 
 */
// test.html 

// here we send file to the front end 
res.sendFile(path.join(__dirname + '/test.html'))
})

app.get('/user/:name', (req,res)=>{
    /*
     req  - THAT WHAT user makes
     res - THAT what server returns 
     */
// console.log()   
const username = req.params.name;
res.send(`
<h1> Hello dear ${username}</h1>

`) })

app.get('/joke', (req,res)=>{
 // http://api.icndb.com/jokes/random
 //fetch without any params will go get
 fetch('http://api.icndb.com/jokes/random')
 // then we return a promise 
 .then(function(response) {
     //if there is an arror 404 or 403 or 500 or whatever  
     if (response.status >= 400) {
         throw new Error("Bad response from server");
     }
     //if there is no error I wan to encode the promise into JSON
     return response.json();
 })
 // and once I am done collecting data I want it to be sended 
 .then(function(stories) {
     res.json(stories)
 });

})
   ////// POSR 

app.post('/aplication', (req,res)=>{
        //our code will be here 

        // here we will get pur data from form 
        console.log(req.body)
        //we will user username to redirect to another route 
        res.redirect(`/user/${req.body.name}`)



    //    let dataBack = {
    //        key : 'sended'
    //    }

    //    res.json(dataBack)

    

})

app.listen(PORT, () => {
    console.log(`Hey I am running on port ${PORT}`)
})
