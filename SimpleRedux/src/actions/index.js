
// Actions 
export const INCREASE_THE_NUMBER = 'INCREASE_THE_NUMBER'
export const DECREASE_THE_NUMBER = 'DECREASE_THE_NUMBER'
export const CHANGE_COLOR = 'CHANGE_COLOR'

// Action Creators
export function addNumber(number){
    console.log('ACTION WAS CALLED',number)
    console.log(INCREASE_THE_NUMBER)
    return{
        
        type:INCREASE_THE_NUMBER,
        number
    
    } 
}

export function subNumber(number){
    console.log('ACTION WAS CALLED',number)
    console.log(DECREASE_THE_NUMBER)
    return{
        
        type:DECREASE_THE_NUMBER,
        number
    
    } 
}

export function setColor(color){
        console.log('CHANGE_COLOR')
        var colors= ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 
        'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 
        'silver', 'teal', 'white', 'yellow']; 
        let RandomColor = colors[Math.floor(Math.random() * colors.length)]   
        console.log('RandomColor', RandomColor)
        return {
            type: CHANGE_COLOR,
            color: RandomColor
        }
}