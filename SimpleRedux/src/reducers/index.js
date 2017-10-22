import {INCREASE_THE_NUMBER, DECREASE_THE_NUMBER, CHANGE_COLOR } from '../actions';

// THIS WILL CREATE A STORE
import { combineReducers }  from 'redux';

// this will return us a state 
function number(state=0,action){
        console.log('REDUCER WAS CALLED',action)
    switch (action.type) {
        case INCREASE_THE_NUMBER:

            let newNumber = action.number+=1

            return newNumber
            break;
        case DECREASE_THE_NUMBER:

            return action.number-=1
            break;
        default:
        return state
            break;
    }
}
function color(state='black',action){
    console.log('REDUCER WITH CHANGE COLOR WAS CALLED',state)
    console.log(action)
    switch (action.type) {
        case CHANGE_COLOR:
            console.log('WE WILL BE CHANGIBG COLOR')
            return action.color
            break;
        default:
            return state
    }

}



// STORE combineReducers -> Combine all reducers in one
export default combineReducers({
    number,
    color
})