// action creators is funciton that returns data with action
import * as constants from './constants';
import * as actions from './balance';


it('creates ana ction to set the balance', () => {
    
    const balance = 0;
    const expectedAction = {type:constants.SET_BALANCE, balance};
    // now we describe how action creator will work
    expect(actions.setBalance(balance)).toEqual(expectedAction);
    
});


it('creates an action to deposit into balance', () => {
    const deposit = 10;
    const expectedAction = { type: constants.DEPOSIT,deposit }
    // checking the deposite function
    expect(actions.deposit(deposit)).toEqual(expectedAction)
});

it('creates an action to deposit into balance', () => {
    const withdraw = 5;
    const expectedAction = { type: constants.WITHDRAW,withdraw }
    // checking the withdraw function
    expect(actions.withdraw(withdraw)).toEqual(expectedAction)
});

