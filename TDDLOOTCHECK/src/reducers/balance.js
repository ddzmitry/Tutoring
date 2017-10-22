import * as constants from '../actions/constants';
import {read_cookie, bake_cookie} from 'sfcookies'

const BALANCE_COOKIE = 'BALANCE_COOKIE'
// prev state + action
 const balance  = (state=0,action) => {
        let balance;
    switch (action.type) {
        // set baalnce reducer
        case constants.SET_BALANCE:
        balance = action.balance;
        break;
            // deposit reducer
        case constants.DEPOSIT:
        balance = state + action.deposit
        break;
        case constants.WITHDRAW:
        balance = state - action.withdraw
        break;
        default:
        balance = parseInt(read_cookie(BALANCE_COOKIE),10) || state;
  
    }
    bake_cookie(BALANCE_COOKIE,balance);

    return balance
}

// and now we can export our reducer 
export default balance