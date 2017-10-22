export  const INCREASE_NUMBER = 'INCREASE_NUMBER'
export const CHANGE_COLOR = 'CHANGE_COLOR'
export const CHANGE_PICTURE = 'CHANGE_PICTURE'
export function addNumber(number){
    console.log(number)
    console.log('ADD NUMBER WAS CALLED')
    return {
        type:INCREASE_NUMBER,
        number
    }
}
export function changeColor(color){
    console.log('CHANGE COLOR WAS CALLED')
    return {
        type:CHANGE_COLOR,
        color
    }
}

export function getPicture(){
    console.log('THIS IS CHANGIN PICTURE')
    return {
        type:CHANGE_PICTURE,
    }
}