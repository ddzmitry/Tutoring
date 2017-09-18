import * as constans from './constants';
import * as actions from './balance';


it('creates the action to set the balance', () => {
    const balance = 0;
    const expected = {type:constans.SET_BALANCE, balance}
    expect(actions.setBalance(balance)).toEqual(expected)
});

it('creates an action to deposit into the balance', () => {
    const  deposit= 10;
    const expectedAction = {type: constans.DEPOSIT, deposit}
    expect(actions.deposit(deposit)).toEqual(expectedAction);

});

it('creates an action to withdraw from the balance', () => {
    const  withdraw= 10;
    const expectedAction = {type: constans.WITHDRAW, withdraw}
    expect(actions.withdraw(withdraw)).toEqual(expectedAction);
});


