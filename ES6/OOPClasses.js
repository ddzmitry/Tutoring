
// // This is your database s
// const data = ['bread','milk','butter']
// const data2 = ['paper','tape','printer'] 
// const allList = [...data,...data2]
// // This is you orm 
// function query(table,cb){
//     //this is callback
//     cb(table.length)
// }
// // This is you orm 
// function returnpecific(table,index,cb){
//     //this is callback
//     cb(table[index])
// }
// function findAll(table,cb){
//     cb(table)
// }

// // this wy you will call it at the server level
// query(data,function(result){
//     // this is what you will return tp the user 
//     console.log(result)
// })

// returnpecific(data2,2,function(result){
//     console.log(result)
// })

// findAll(allList,function(result){
//     console.log(result)
// })


// const person = {
//     name:'Mona',
//     job:'Doctor',
//     futureJob:'Developer'
// }
// //this is destructuring
// const {name,job,futureJob} = person
// console.log(name)
// console.log(job)
// console.log(futureJob)
// const person2 = {name,job,futureJob}
// person2

// const Luke = {
// 	"name": "Luke Skywalker",
// 	"height": "172",
// 	"mass": "77",
// 	"hair_color": "blond",
// 	"skin_color": "fair",
// 	"eye_color": "blue",
// 	"birth_year": "19BBY",
// 	"gender": "male",
// 	"homeworld": "https://swapi.co/api/planets/1/",
// 	"films": [
// 		"https://swapi.co/api/films/2/",
// 		"https://swapi.co/api/films/6/",
// 		"https://swapi.co/api/films/3/",
// 		"https://swapi.co/api/films/1/",
// 		"https://swapi.co/api/films/7/"
// 	]
// }
// const {name, gender,birth_year, films  } = Luke
// const [x,y,z,s] = films


// console.log(Luke.name)
// console.log(name)
// console.log(gender)
// console.log(birth_year)

class Hangman {
    constructor(word) {
      this.word = word;
      this.updatedWord = []
    }
   display() {
        //console.log(`${this.name} is singing `)
        console.log(this.word + " is word")
   }
   codeword(){
       let temp = ''
       for (var i = 0; i < this.word.length; i++) {
        temp+= '_'
           
       }
       //console.log(temp)
       return temp
   }
   letterCheck(letter){
       console.log(this.updatedWord)
       let wordInarray = this.word.split('')
       let indexes = []
       wordInarray.forEach(function(wordLetter,i) {
           if(wordLetter == letter){
            indexes.push(i)
               //console.log('letter matched at position ' + i)
           }
       });
    if(indexes.length >=1){
        // console.log(indexes)
        console.log('Letter is Matchng !')
        indexes.forEach(function(element) {
            this.updatedWord[element] = letter

            //binding 
        }, this);
        this.runifWin()
    }else{
        console.log('Nope Ypu were wrong')
    }

   }
   runifWin(){
       console.log(this.updatedWord.join(''))

       console.log(this.word )
    if(this.updatedWord.length == this.word.length)
        console.log('Ypu WON')
    

   }

  }
const hangnamgame = new Hangman('pinapple')
hangnamgame.display()
console.log(hangnamgame.codeword())
hangnamgame.letterCheck('z')
hangnamgame.letterCheck('p')
hangnamgame.letterCheck('i')
hangnamgame.letterCheck('n')
hangnamgame.letterCheck('a')
hangnamgame.letterCheck('l')
hangnamgame.letterCheck('e')
// let test = hangnamgame.letterCheck('p')
// let test2 = hangnamgame.letterCheck('l')
// let test3= hangnamgame.letterCheck('b')

// hangnamgame.letterCheck('a')
// hangnamgame.letterCheck('n')
