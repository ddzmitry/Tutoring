
// actions
export const CHANGE_COLOR = "CHANGE_COLOR"
export const INCREASE_NUMBER = "INCREASE_NUMBER"
export const DECRESE_NUMBER = "DECRESE_NUMBER"
export const CHUCK_JOKE = "CHUCK_JOKE"
// action creators

export function setColor(color){
    console.log('CHANGE_COLOR')
    var colors= ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 
    'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 
    'silver', 'teal', 'white', 'yellow'];

    return {
        type:CHANGE_COLOR,
        color: colors[Math.floor(Math.random()*colors.length)]
    }
}
export function increaseNumber(number){
    console.log('INCREASE NUBER')

    return {
       type: INCREASE_NUMBER,
       number   
    }
}

export function decreaseNumber(number){
    console.log('Decrese NUBER')
    return {
       type: DECRESE_NUMBER,
       number   
    }
}

export function Chuck(joke){
    

    return {
        type: CHUCK_JOKE,
        joke
    }
}