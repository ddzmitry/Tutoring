import {CHANGE_COLOR , INCREASE_NUMBER,DECRESE_NUMBER,CHUCK_JOKE} from '../actions';

import {combineReducers} from 'redux';

function color(state='purple',action) {
    console.log('THE REDUCER WAS CALLED WITH STATE', state)
    console.log(action)
    switch (action.type) {
        case CHANGE_COLOR:
        console.log('The color is going to be chnaged')
            return action.color
            break;
        default:
        return state
            break;
    }
}
function number(state=0,action){
    console.log('Number reducer was called')
    console.log(action)
    switch (action.type) {
        case INCREASE_NUMBER:
            return action.number +=1
            break;
        case DECRESE_NUMBER:
        return action.number -= 1
        break;

        default:
        return state
            break;
    }
}

function joke(state='NO JOKE YET',action){
// redux thunk
    let joke = fetch('http://api.icndb.com/jokes/random')
    .then(data => data)
    let joking = joke.then(data => data.json())
    .then(data => data.value.joke)
    console.log(joking)
    switch (action.type) {
    
        case CHUCK_JOKE:
            return action.joke
            break;
    
        default:
            return state;
    }
}

// now we need to combine our reducer in function

export default combineReducers({
    color,
    number,
    joke
})