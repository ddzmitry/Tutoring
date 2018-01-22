// this is relative to this object
var _this = ''
var Edgar = {
    // That mean Edgar is THIS
    name: 'Edgar',
    age: '24',
    job: 'Developer',
    pets: [
        {
            type: 'puppy',
            name: 'Bowie'
        }, {
            type: 'cat',
            name: 'Fluff'
        }
    ],
    intro: function () {
        console.log("Hello my name is " + this.name + ' I have ' + this.pets.length + ' pets')
    },
    displayAge: function () {
        console.log(this.age)
        console.log(Edgar.age)
        _this = this
        this.intro()
    }
}

console.log(Edgar.name)
console.log(Edgar.age)
console.log(Edgar.job)
console.log(Edgar.pets[0].name)
console.log(Edgar.pets[0].type)
console.log(Edgar.pets[1].type)
console.log(Edgar.pets[1].name)
// Edgar.intro()
Edgar.displayAge()
// console.log(_this.pets)
Edgar.name = 'Dzmitry'

var person = function (name, age, job, pets = [], healthPoints) {
    this.name = name
    this.age = age
    this.job = job
    this.pets = pets
    this.intro = function () {
        console.log("Hello my name is " + this.name + ' I have ' + this.pets.length + ' pets')
    },
    this.displayAge = function () {
        console.log(this.age)
    }
    this.healthPoints = healthPoints
    this.hit = Math.random() * 10
    this.fight = function (enemy) {
        enemy.healthPoints = enemy.healthPoints - this.hit
        return `${this.name} hit ${enemy.name} by ${this.hit} and ${enemy.name} health is ${enemy.healthPoints}`
    }
}

var EdgarOOP = new person('Edgar', 24, 'Developer', [
    {
        type: 'puppy',
        name: 'Bowie'
    }, {
        type: 'cat',
        name: 'Fluff'
    }
], 100)
console.log(EdgarOOP.name)
// EdgarOOP.intro()
var Dzmitry = new person('Dzmitry', 25, 'Developer', [
    {
        type: 'cat',
        name: 'Odyssey'
    }, {
        type: 'cat',
        name: 'Marusya'
    }
], 100)
EdgarOOP.fight(Dzmitry)
// console.log(Dzmitry.healthPoints)
Dzmitry.fight(EdgarOOP)

// Dzmitry.otherFunction = function(){     console.log('This is an additional
// function') } console.log(EdgarOOP.healthPoints) Dzmitry.otherFunction()

while (EdgarOOP.healthPoints >= 0 || Dzmitry.healthPoints >= 0) {

    console.log(EdgarOOP.fight(Dzmitry))
    console.log(Dzmitry.fight(EdgarOOP))

}
console.log(Dzmitry.healthPoints)
console.log(EdgarOOP.healthPoints)


// var giphy = function(name){
//     this.name = name,
//     this.searchForPictures = function(){
//         fetch(`https://api.giphy.com/v1/gifs/search?q=${this.name}/&api_key=dc6zaTOxFJmzC&limit=10`)
//         .then(function(data){ return data.json()})
//         .then(data=>console.log(data))

//         // return []
//     }
// }