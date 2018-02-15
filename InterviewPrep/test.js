var questions = require('./constructors')

var fs = require ("fs")
let html = questions.map((q)=>{

    return `<h3> ${q.question} </h3>
                <pre> ${q.answer} </pre>
            `
})

console.log(html)

fs.writeFile('output.html',html)

