import * as constants from '../actions/constants';
import balanceReducer from './balance';


describe('balanceReducer', () => {
    
    it('should set a balance', () => {
        const balance = 10;
        expect(balanceReducer(undefined,{type:constants.SET_BALANCE,balance})).toEqual(balance)
    });
    
    it('should add values',()=>{
        const initialBalance = 10;
        const deposit = 5;
        const action = {
            type : constants.DEPOSIT,
            deposit
        }
        expect(balanceReducer(initialBalance,action)).toEqual(initialBalance+deposit)
    })

    
    it('should substract te value', () => {
        const initialBalance = 10;
        const withdraw = 5;
        const action = {
            type : constants.WITHDRAW,
            withdraw
        }
        expect(balanceReducer(initialBalance,action)).toEqual(initialBalance - withdraw)
    });
    
    
    
});
