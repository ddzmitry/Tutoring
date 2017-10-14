
// const user = {
//     name: 'Austin',
//     job:'Developer'
// }
// user
// user.name = 'Dzmitry'
// user.job = 'Programmer'
// user
// example of ORM
var fs = require('fs');
const groceries = ['bread','milk','butter']
const toys = ['rabbit','bear','hamster']
const users = [
    {
        username: "Dzmitry",
        job: "Developer"
    },
    {
        username: "Austin",
        job: "Developer"
    },
    {
        username: "Peter",
        job: "Cook"
    },
    {
        username: "Kate",
        job: "Server"
    },
    {
        username: "Michael",
        job: "Server"
    },
    {
        username: "Aaron",
        job: "Cook"
    }
]
const animals = [
    {
        name:'Fuzzy Nose',
        type:'Domestic'
    },
    {
        name:'Little Bear',
        type:'Wild'
    },
    {
        name:'Friendly Paws',
        type:'Domestic'
    },
    {
        name:'Sharp Teeth',
        type:'Wild'
    }
]

const burgers = [
    {
        name: 'Tripple cheese Burger',
        devaured:true
    },
    {
        name: 'Fun Burger',
        devaured:false
    },
    {
        name: 'happy Burger',
        devaured:true
    },
    {
        name: 'Spwcial Burger',
        devaured:false
    }
]



// the easiest way od working with functional orm is
//  I give a request with parameters => and I will recieve something that I expect

let recieveAll = function(req,database,res){
    console.log('The funcition was called')
    if(req == 'All'){
        // SELECT * from database
        console.log('The funcition was called with parameter',req)
        // this is a claaback
        res(database)
    } 
    else {
        console.log('The funcition was called with parameter',req)
        res(database[req])
    }

}
let jobSelection = (column,value,database,res) => {

    console.log(column,value)
    let result = []
    for (var i = 0; i < database.length; i++) {
            console.log(database[i][column])

            if (database[i][column] == value){
                result.push(database[i])
            }
    }
    // parameter
    // filter function is working based of the boolean
    // and it will filter if value is true!
    // db is our users table 
    // res how we filter data
    
    // let result = database.filter(user => user.job == req)
//    var usersF =  database.filter(function(user){
//         // console.log(user.username)
//         // console.log(user.job)
//         if(user.job == req){
//             console.log(user)
//            return user
//         }
//     })
        // let results = []
        // for (var i = 0; i < database.length; i++) {
        //     if(database[i][`${specification}`] == req){
        //         console.log(database[i])
        //         results.push(database[i])
        //     }
            
        // }


     res(result)
}
// animals burgers
// jobSelection('username','Austin',users,(data)=>{
//     console.log(data)
// })
// jobSelection('type','Domestic',animals,(data)=>{
//     console.log(data)
// })
jobSelection('devaured',false,burgers,(data)=>{
    let output = `
        <H1>Hello Burgers!🍲</H1>
    <ul>`
    data.forEach(function(element) {
        let inner = `<li>${element.name}  Devaured:${element.devaured}</li>`
        output += inner
    });
    output += '</ul>'
    // data = JSON.stringify(data)
    fs.writeFile("text.html", output, function(err) {
        if(err) {
            return console.log(err);
        }
    
        console.log("The file was saved!");
    }); 
})

// recieveAll('All',groceries,function(data){
//     console.log(data)
// })
// recieveAll('All',toys,function(data){
//     console.log(data)
// })
