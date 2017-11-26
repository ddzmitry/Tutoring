import React from 'react';
import { shallow } from 'enzyme';

//  we need to separetly export Wallet component so we are testin pure component instead of 
// testing redux connected component
import {Wallet} from './Wallet';
describe('Wallet', () => {

    // mocking functons
    const mockDeposit = jest.fn();
    const mockWithdraw = jest.fn();
    // now we can mock the props 
    const props = {balance: 20 , deposit:mockDeposit, withdraw:mockWithdraw}

    const wallet = shallow(<Wallet {...props} />)
    
    it('renders properly', () => {
        console.log(wallet.find('h3').text())
        expect(wallet.find('h3').text()).toEqual(" Wallet balance: " + props.balance)
        expect(wallet).toMatchSnapshot()
        // now we can see what balance is inside of the wallet and match it with our mock data
    });
    
    
    it('dislays the balance from props', () => {
        expect(wallet.find('.balance').text()).toEqual(` Wallet balance: ${props.balance}`)
    });
        // testing an input
    
    it('should create an input to deposite or withdrae the balance', () => {
        expect(wallet.find('.input-walet').exists()).toBe(true);

    });

    
    describe('when the user types into the walet input', () => {
        const userBalance = 25;
        beforeEach(()=>{
            wallet.find('.input-walet').simulate('change',{target: {value:userBalance }})

        })
        
        it('should update the balance and convert it to numbwr', () => {
            expect(wallet.state().balance).toEqual(parseInt(userBalance,10))
            
        });

        describe('and user wants to make a deposit',()=>{
            // simulate deposit function click
            beforeEach(()=> wallet.find('.btn-deposit').simulate('click'))

            it('should  dispatch `deposit()` with the local balance', () => {
                expect(mockDeposit).toHaveBeenCalledWith(parseInt(userBalance,10))
            });
            
        })
        describe('and user wants to make a withdraw', ()=>{
            beforeEach(()=> wallet.find('.btn-withdraw').simulate('click'))

            it('should  dispatch `withdraw()` with  the local balance', () => {

                expect(mockWithdraw).toHaveBeenCalledWith(parseInt(userBalance,10))
            });
        })
        

    });
    
    
    
});
