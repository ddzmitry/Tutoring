import {combineReducers} from 'redux'
import balance from './balance';
import bitcoin from './bitcoin';

// combine all reducers all in one 
export default combineReducers({
    balance,
    bitcoin
})