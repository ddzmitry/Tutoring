// action creators is funciton that returns data with action
import * as constants from './constants';
import * as actions from './balance';


it('creates ana ction to set the balance', () => {
    
    const balance = 0;
    const expectedAction = {type:constants.SET_BALANCE, balance};
    // now we describe how action creator will work
    expect(actions.setBalance(balance)).toEqual(expectedAction);
    
});
