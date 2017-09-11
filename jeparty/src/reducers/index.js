import {SET_CATEGORIES, PICK_CATEGORY ,SET_CLUES} from '../actions'
import {combineReducers} from 'redux';

function categories(state=[],action){
    
    switch (action.type) {
        case SET_CATEGORIES:
            return action.categories

        default:
          return  state 
            
    }
}
function category(state={},action){

            switch (action.type) {
                case PICK_CATEGORY:
                    return action.category;
                    break;
            
                default:
                return state;
                    break;
            }
}

function clues(state=[],action){
    switch (action.type) {
        case SET_CLUES:
        // returning array of clues
            return action.clues
            break;
    
        default:
        return state
            break;
    }
}

export default combineReducers({categories,category,clues});
