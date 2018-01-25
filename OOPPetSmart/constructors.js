// constructor
var Pet = require('./Pet')
var Person = require('./Person')
var fs = require('fs')


let Edwin = new Person('Edwin', 'developer', 36)
let Dzmitry = new Person('Dzmitry', 'developer', 25)

let Ruby = new Pet('dog','Ruby',10,Edwin)
let Fluffy = new Pet('cat','Fluffy',10,Edwin)


let Script = new Pet('cat','Ruby',10,Dzmitry)
let Myrussia = new Pet('cat','Fluffy',10,Dzmitry)


var animalDb = [Ruby,Fluffy,Script,Myrussia]
console.log(Edwin.myPets(animalDb))
console.log(Dzmitry.myPets(animalDb))

report = ''
console.log(Edwin.myPets(animalDb)[0].voice())
console.log(Edwin.myPets(animalDb)[1].voice())
console.log(Edwin.myPets(animalDb)[1].info())
report += Edwin.myPets(animalDb)[1].info()
report += '\n'
report += Edwin.myPets(animalDb)[0].info()
report += Dzmitry.myPets(animalDb)[0].info()
report += '\n'


report += `
    <script>
    
    </script>
`

console.log(Edwin.myPets(animalDb)[0].info())

fs.writeFile('log.html', report, (err) => {  
    // throws an error, you could also catch it here
    if (err) throw err;
    // success case, the file was saved
    console.log('report saved!');
});






