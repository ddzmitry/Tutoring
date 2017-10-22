import { combineReducers }  from 'redux';
import  {INCREASE_NUMBER,CHANGE_COLOR,CHANGE_PICTURE} from '../actions'

function number(state=0,action){
    console.log('REDUCER WAS CALLED')
    switch (action.type) {
        case INCREASE_NUMBER:
            let newNumber = action.number+=1
            return newNumber 
            break;   
        default:
            return state
    }
}

function color(state="black",action){
    let colors= ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 
    'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 
    'silver', 'teal', 'white', 'yellow'];

    switch (action.type) {
        case CHANGE_COLOR:
            let RandColor = colors[Math.floor(Math.random() * colors.length)]
            return RandColor
            break;   
        default:
            return state
    }
}

function picture(state="",action){
    // http://api.giphy.com/v1/gifs/search?q=cats&api_key=dc6zaTOxFJmzC&limit=5
    let arr = ['kittens','dogs','toys','trump']
    let dude = arr[Math.floor(Math.random() * arr.length)]
    switch (action.type) {
        
        case CHANGE_PICTURE:
            let pics = fetch(`http://api.giphy.com/v1/gifs/search?q=${dude}&api_key=dc6zaTOxFJmzC&limit=5`)
            return pics
            break;   
        default:
            return state
    }

}

export default combineReducers({
    number,
    color,
    picture
});
