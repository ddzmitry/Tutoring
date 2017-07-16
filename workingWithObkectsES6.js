
var lighter = 1;
var matches = 20;
var pocket = {}
pocket['lighter'] = lighter;
pocket['matches'] = matches;
var arryOfpockets = []

arryOfpockets.push(pocket,pocket,pocket)

arryOfpockets
arryOfpockets[1].matches = 40
arryOfpockets 
//pocket.push(lighter,matches)

class hrushevka {
    constructor(roof,doors,floor){

        this.roof = roof
        this.doors = doors
        this.floor = floor
    }

    build(){

        console.log(`Этот дом с ${this.roof} крышец и двери ${this.doors} цвета и здесь ${this.floor} Этажей`)
    }
    

}

var newhouse = new hrushevka('green','brown',5)

var newhouse2 = new hrushevka('pink','red',6)
    //newhouse2
    //newhouse.build()
    newhouse2.build()
// var  david = {

//     name : "David",
//     age : 32,
//     job: "Used to bank"
// }
// function returnName(object){
  
//     console.log(object);
//      console.log(this)
//     return object.name
// }

// returnName(david)