// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 4000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Star Wars Characters (DATA)
// =============================================================
var characters = [
  {
    routeName: "yoda",
    name: "Yoda",
    role: "Jedi Master",
    age: 900,
    forcePoints: 2000
  },
  {
    routeName: "darthmaul",
    name: "Darth Maul",
    role: "Sith Lord",
    age: 200,
    forcePoints: 1200
  },
  {
    routeName: "obiwankenobi",
    name: "Obi Wan Kenobi",
    role: "Jedi Master",
    age: 55,
    forcePoints: 1350
  }
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  // res.send("Welcome to the Star Wars Page!")
  // server calls ! !!!!

  console.log(req.body)
 res.json(characters)
});
app.get('/test/:id',(req,res)=>{

  if(req.params.id === 'Edwin'){
    res.json({hey:req.params.id })
  } else{
    res.json({bad:req.params.id })
    
  }


})

let db = [
  {name: "Edwin",
  password: '11111',
  faworiteFood: ['pasta','pizza','steak','salad']},
  {name: "Dzmitry",
  password: '22222',
  faworiteFood: ['salad','cottage cheese','steak']
}
]


app.post('/test/:username/:password',(req,res)=>{
  console.log(req.params.username)
  console.log(req.params.password)
  
  let user = db.filter((user)=>user.name == req.params.username)
  if(user[0]){
    console.log(user)
     if(user[0].password === req.params.password){
         res.json(user[0])
     } else{
      res.json({bad: 'Access Denied' })
     }
  } else{
    res.json({bad: 'User Does not Exists' })
  }

})


app.get("/login", function(req, res) {

 res.jsonp(characters)
});


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
