import React from 'react';
import { shallow } from 'enzyme';

//  we need to separetly export Wallet component so we are testin pure component instead of 
// testing redux connected component
import {Wallet} from './Wallet';
describe('Wallet', () => {

    // now we can mock the props 
    const props = {balance: 20 }

    const wallet = shallow(<Wallet {...props} />)
    
    it('renders properly', () => {
        expect(wallet).toMatchSnapshot()
        // now we can see what balance is inside of the wallet and match it with our mock data
    });
    
    
    it('dislays the balance from props', () => {
        expect(wallet.find('.balance').text()).toEqual(` Wallet balance: ${props.balance}`)
    });
    
});
