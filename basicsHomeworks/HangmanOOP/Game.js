

var words = require('./words')
var Word = require('./Word')
function MainGame(){

    this.startGame = function(){
        this.guesses = 10;
        this.nextWord()
    }

    this.nextWord = function(){
        var newWordRandom = words[Math.floor(Math.random() * words.length)]
            console.log(newWordRandom)
        this.word =  new Word(newWordRandom)
    }
}

var DzmitrysGame = new MainGame()
DzmitrysGame.startGame()
console.log(DzmitrysGame.word.GetValues())

console.log(DzmitrysGame.word.GuessLetterMain('e'))
console.log(DzmitrysGame.word.GuessLetterMain('a'))
console.log(DzmitrysGame.word.GetValues())

console.log(DzmitrysGame.word.GuessLetterMain('n'))

console.log(DzmitrysGame.word.GetValues())

console.log(DzmitrysGame.word.GuessLetterMain('i'))
console.log(DzmitrysGame.word.GetValues())

console.log(DzmitrysGame.word.GuessLetterMain('m'))
console.log(DzmitrysGame.word.GetValues())

console.log(DzmitrysGame.word.GuessLetterMain('l'))
console.log(DzmitrysGame.word.GetValues())

