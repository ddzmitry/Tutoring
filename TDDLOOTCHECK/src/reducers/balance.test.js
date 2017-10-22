
// test reducers 
// import reducer function 
import balanceReducer from './balance';
import balanceReducer2 from './balance';
import * as constants from '../actions/constants';

describe('balanceReducer', ()=> {

    
    describe('when initializing ', () => {
        
        const balance = 10;
        it('sets a balance ' , () =>{
            
            //  the first parameter is previous state 
            // and the second parametr is RESULT from action creator 
            expect(balanceReducer(undefined,{ type:constants.SET_BALANCE,balance})).toEqual(balance)
        })
            
            describe('then re-initializing', () => {
                
                it('should read the balance from cookies', () => {
    
                    expect(balanceReducer2(undefined,{})).toEqual(balance)
                });
                
            });
            
    });
    

        
    
    it('should deposit into the balance', () => {
        
        const deposit = 10;
        const initState = 5;
        expect(balanceReducer(initState,{type:constants.DEPOSIT,deposit})).toEqual(deposit+initState);

    });
    
    it('should withdraw from balance', () => {
        const withdraw = 5;
        const initState = 10;
        expect(balanceReducer(initState,{type:constants.WITHDRAW,withdraw})).toEqual(initState - withdraw)
    });
    
    
});