var Letter = function (letterGuess){
    this.value = letterGuess;
    this.hidden = true

    this.ReturnValue = function(){
        // if letter is not hidden
        if(!this.hidden){
            // return the value
            return this.value
        } else{
            // but if it is return the letter
            return  "_"
        }
    }

    this.openLetter = function(){
        return this.value
    }

    this.UserGuess = function(userGuessLetter){
        // and if user coorrect we can open the letter
         if(this.value == userGuessLetter){
             this.hidden = false
             return true
         } else{

             return false
         }
    }


    // this.wasGuessed = false;
    // this.displayValue = function () {
    //     if (this.wasGuessed == true){
    //         return this.value;
    //     }else {
    //         return '_';
    //     }
    // }
    // this.checkGuess = function (letterGuess) {
    //     if (letterGuess = this.value){
    //         this.wasGuessed = true;
    //         // may need to remove this array push and add to work constructor
    //         l.push(this.value);
    //     }
    // }
}

// var lettera = new Letter('a')
// lettera.UserGuess('b')
// console.log(lettera.ReturnValue())
// lettera.UserGuess('a')
// console.log(lettera.ReturnValue())





module.exports = Letter;

// var l = [];
// var g = process.argv[2];

// var word = new Letter (g);

// console.log(word.checkGuess(g));
// console.log(word.displayValue());
// console.log(word);
// console.log(l);