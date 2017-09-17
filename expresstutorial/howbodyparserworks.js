

// howbodyparser wotrks 

let obj = {
    name : "David",
    job : "developer",
    password : "hello1234",
    age : 18,
    isuser: true
}

// server can not actualy take that data like this 
// bodyparser will encode the content in the string 

obj = JSON.stringify(obj) // => now it is ready to go to backend 
// since  it is a astring you can not change the data 
// so it will safley get to server side 

var req = {body:''}
req.body = JSON.parse(obj)
