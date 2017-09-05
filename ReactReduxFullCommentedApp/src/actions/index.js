
export const  SET_STACK = 'SET_STACK'
export const LOAD_STACKS = 'LOAD_STACKS'
export const ADD_STACK = 'ADD_STACK'
// sending data action creator
export function setStack(stack){
    return {
        type: SET_STACK,
        //payload stack 
        stack
    };
}

// loading data
export function loadStacks(stacks){
    return {
        type: LOAD_STACKS,
        //payload stack 
        stacks
    };
}

//here we will pass  our state/Stack from StackForm.js 
export function addStack(stack){
    console.log('AddStack funciton was called!')
    return {
        type: ADD_STACK,
        //payload stack 
        stack
    };
}

