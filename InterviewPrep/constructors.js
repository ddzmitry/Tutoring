
var question = function(question,answer){
        this.question = question;
        this.answer = answer;
}

question.prototype.disPlayQuestion = function(){
    return this.question
}

question.prototype.checkAnswer= function(userAnswer){
    if(this.answer === userAnswer){
        return true
    }
    return false
}


let firstQ = new question('Who was first president of the US?','Washington')
console.log(firstQ)

console.log(firstQ.disPlayQuestion())
console.log(firstQ.checkAnswer('Obama'))
console.log(firstQ.checkAnswer('Washington'))
let secondQ = new question('What is your name?','Edgar')
console.log(secondQ.disPlayQuestion())
console.log(secondQ.checkAnswer('Edgar'))
console.log(secondQ.checkAnswer('Dzmitry'))
let thirdQ = new question('What is your puppy name?','Bowie')
console.log(thirdQ.disPlayQuestion())
console.log(thirdQ.checkAnswer('Phill'))
console.log(thirdQ.checkAnswer('Bowie'))
let forthQ = new question('Hello?','World')
// firstQ
// secondQ
// thirdQ
var dataBaseOfquestions = [firstQ,secondQ,thirdQ,forthQ]
module.exports = dataBaseOfquestions

