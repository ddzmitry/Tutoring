

import { combineReducers }  from 'redux';
// importing our constants  
import {SET_STACK, LOAD_STACKS, ADD_STACK } from '../actions'


// Reducers ->  compose an object how we should update the state 

//return stack that was clicked
function stack(state ={},action) {
    switch (action.type) {
        case SET_STACK :
        // return action.payload 
            return action.stack
            break;   
        default:
        return state;
    }
  

}

//loading stacks when page is loaded
function stacks(state= [] ,action){
    switch(action.type){
        case LOAD_STACKS :
        // return action.payload 
            return action.stacks
        case ADD_STACK:
        console.log('Reduxer ADD_STACK was called')
        //[...state,...action.payload] and adding a unique id
        console.log([...state,{ ...action.stack,id: state.length }]   )
            return [...state,{ ...action.stack,id: state.length }]           
            default:
        return state;
    }

}


// exporing reducer ! 

export default combineReducers({
    stack,
    stacks
});
