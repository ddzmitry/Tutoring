
// test reducers 
// import reducer function 
import balanceReducer from './balance';
import * as constants from '../actions/constants';

describe('balanceReducer', ()=> {

    it('sets a balance ' , () =>{
        const balance = 10;
        //  the first parameter is previous state 
        // and the second parametr is RESULT from action creator 
        expect(balanceReducer(undefined,{ type:constants.SET_BALANCE,balance})).toEqual(balance)
    })
});