
//Boiler Plate 
const express = require('express');
const path = require('path')
require('es6-promise').polyfill();
require('isomorphic-fetch');
//defining our app
const app = express();
const PORT = 4000;

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
<h1> Hello ${username}</h1>

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
   

app.listen(PORT, () => {
    console.log(`Hey I am running on port ${PORT}`)
})
