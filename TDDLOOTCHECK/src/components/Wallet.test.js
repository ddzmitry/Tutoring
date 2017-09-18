import React from 'react';
import {shallow} from 'enzyme';
import {Wallet} from './Wallet';


describe('Wallet', () => {
    const props = {balance:20}
    const wallet = shallow(<Wallet {...props}/>)
    
    it('should render propperly', () => {
        expect(wallet).toMatchSnapshot();
    });
    
    it('should show the balance', () => {
        expect(wallet.find('.balance').text()).toEqual('Wallet Ballance 20')
    });
    
    
});
