var Letter = require("./Letter");

var Word = function (word) {
    this.word = word,
    // this.letters should be an array
    this.letters = this.word.split('').map((letter)=>{

        // that will loop over and create an arry of cunstructors of letter
        return new Letter(letter)
    })

    this.GetValues = function(){
        return this.letters.map( (letterObj)=>{

                return letterObj.ReturnValue()
        })
    }

    this.GuessLetterMain= function(userInput) {

        this.letters.forEach(letter => {
            console.log(userInput)
            letter.UserGuess(userInput)
        });
        
        // return this.GetValues()
    }

    // this.letters = new Letter;
    // this.getWord = function () {
    //     var strWord;
    //     for (let i = 0; i < letters.value.length; i++) {
    //         strWord += letters[i].displayValue();
    //         return strWord;
    //     }
    // }
    // this.guess = function (letterGuess) {
    //     for (let j = 0; j < this.letters.length; j++) {
    //         this.letters[j].value.checkGuess(letterGuess);
    //         this.getWord();
    //     }
    // }
}

// var Edwin = new Word('edwin')
// console.log(Edwin.GetValues().join(''))
// Edwin.letters[0].UserGuess('e')
// console.log(Edwin.GetValues().join(''))
// Edwin.letters[4].UserGuess('n')
// console.log(Edwin.GetValues().join(''))

// console.log(Edwin.letters[0].ReturnValue())
// console.log(Edwin.letters[1].ReturnValue())
// console.log(Edwin.letters[2].ReturnValue())
// console.log(Edwin.letters[3].ReturnValue())
// console.log(Edwin.letters[4].ReturnValue())


// wordInArray = Edwin.letters.map(element => {
//     return element.ReturnValue()
// });
// console.log(wordInArray)

module.exports = Word

// var myGuess = new Word;
// strWord = "era"
// console.log(myGuess.guess('e'));
// console.log(myGuess.letters.check);
