var fetch = require('node-fetch');

function Hello(name,job){
    console.log(`Hello ${name} and I am a ${job}`)
    console.log('Hello ' + name + ' and I am a ' + job)
}

function Intro(object,func){
    // here we can do watever we waun 
    func(object.name,object.job)

}

var person = {
    name:'Edwin',
    job:'Developer'
}
// Intro(person,Hello)
// ================================

function Hello(name,job){
    console.log(`Hello ${name} and I am a ${job}`)
    console.log('Hello ' + name + ' and I am a ' + job)
}

function Intro(object,func){
    // here we can do watever we waun 
    func(object.name,object.job)

}

var url = 'https://swapi.co/api/people/1'

function getMeMyHero(url){
fetch(url)
.then(function(data){

    return data.json()
})
.then(function(apiData){
    var hero ={}

    hero['name'] = apiData.name
    hero['height'] = apiData.height
    hero['hair_color'] = apiData.hair_color
    hero['skin_color'] = apiData.skin_color
    hero['job'] = 'Jedi'
    
    Intro(hero,Hello)

})

}
getMeMyHero(url)
getMeMyHero('https://swapi.co/api/people/2')
getMeMyHero('https://swapi.co/api/people/2')
getMeMyHero('https://swapi.co/api/people/3')
getMeMyHero('https://swapi.co/api/people/4')


hello=name=>`Hello ${name}`
console.log(hello('Edwin'))

// Some Advanced shit here....
let data = ['Edwin','Dzmitry','emma','Orlando','Diana','Florida','Fun']

Enames = data.filter(name => name.charAt(0).toLocaleLowerCase()=='e'? name :'')
// Look Into THIS 
// reduce / map / filter

var nameStoFind = []
for (var i = 0; i < data.length; i++) {
    console.log(data[i])
    console.log(data[i][0])
    console.log(data[i].split('')[0])
    if([...data[i]][0].toLocaleLowerCase() == 'e'){
        nameStoFind.push(data[i])
        
    }
    
}
nameStoFind
