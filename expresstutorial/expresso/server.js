// Dependencies
// ===========================================================
var express = require("express");
var app = express(); // instance of express
var PORT = 4000; // that were we weill run our server
var path = require('path'); // its used for cincating directories 
var bodyParser = require("body-parser");
// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// all servers have 
/*
    REQ = request that what user clls 
    RES = respon that what we will abswer from the server
    http://localhost:4000 "/" - the path
*/ 

    app.get('/',function(req,res){
        //console.log('req',req)
        res.sendFile(path.join(__dirname, "test.html"));
        // req will call DB -> res with JSON
    //     var user = {
    //         name: 'Mona',
    //         job: 'Developer',
    //         age: 15
    //     }
    //     res.json(user)
     })

     app.get('/:user',function(req,res){

        res.sendFile(path.join(__dirname, "welcomePage.html"));
        
    //      console.log(req.params.user)
    //         // res.send('HELLO')
    //     // req will call DB -> res with JSON
    //     var user = {
    //         name: req.params.user,
    //         job: 'Developer',
    //         age: 15
    //     }
    //      res.json(user)
     })

     app.post('/servey',function(req,res){
//{ firstname: 'Mickey', lastname: 'Mouse' }
        console.log(req.body.firstname)
        console.log(req.body.lastname)

        // you will be storing data here somwhere <div className=""></div>
        // connection to my sql ......send it o sql 
        res.sendFile(path.join(__dirname, "welcomePage.html"));
        //res.json(name: req.body.firstname)
    })



// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
