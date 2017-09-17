//Comments reducer

import {SAVE_COMMENT,REMOVE_COMMENT} from '../actions/types';


export default function(state=[],action){

    switch (action.type) {
        case SAVE_COMMENT:
            
            return [...state,action.payload];

        case REMOVE_COMMENT:       
           //removing element at index 
            return state.filter(function(word){
                return word !== state[action.payload]
              });
    }
    return state
   
}