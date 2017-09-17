

function expandedForm(num) {
        let tempStr = ''
       
    function inner(partial){
        // console.log(partial)
        if(partial.length > 1 ){
            // console.log(partial.length )
            let temp=[];
            for (var i = 0; i < partial.length; i++) {
        
                temp.push(0)
            }
            partial = partial.toString()
            temp[0] = partial.charAt(0)
            // console.log(parseInt(temp.join('')))
            let newNum = partial - parseInt(temp.join(''))
            tempStr += `${temp.join('').toString()} + `
            newNum = newNum.toString()
            inner(newNum)
            // return parseInt(temp.join(''))
        } else{
            tempStr += partial
        }
      }
      inner(num)
      return tempStr
    }


//   expandedForm('42')
let variable3 = expandedForm('564641687465') 
let variable = expandedForm('96259568') 
let variable2 = expandedForm('42') 
console.log(variable)
console.log(variable)
console.log(variable2)
