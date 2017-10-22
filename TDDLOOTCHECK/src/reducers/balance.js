import * as constants from '../actions/constants';

// prev state + action
 const balance  = (state=0,action) => {

    switch (action.type) {
        case constants.SET_BALANCE:
        return action.balance;
            break;
        default:
            return state
    }
}

// and now we can export our reducer 
export default balance