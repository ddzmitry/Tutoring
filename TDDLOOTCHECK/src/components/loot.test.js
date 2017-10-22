import React from 'react';
import {shallow,mount} from 'enzyme';
// testing loot component 
import {Loot} from './Loot';
import App from './App'

describe('Loot ', () => {
    const mockfetchBitcoin = jest.fn()
    let props = { balance:10, bitcoin:{}}
    let loot = shallow( <Loot {...props} />)
    
    it('should render properly', () => {

        expect(loot).toMatchSnapshot();

    });
    
    
    describe('When mounted', () => {
        beforeEach(() => {
            props.fetchBitcoin  = mockfetchBitcoin
            loot = mount(<Loot {...props} />)
        });

        it('dispatche the `fetchBitcoin()` that recieves from props ', () =>{
            expect(mockfetchBitcoin).toHaveBeenCalled();

        })
    });
    
    
    describe('when there are valid bitcoin props', () => {
        let app;
        beforeEach(() => {
            props = { balance:10, bitcoin: {
                bpi:{
                    USD:{
                        rate: '1,000'
                    }
                }
            }}
        app  = shallow(<App {...props} />)

        });

        
        it('should display correct bitcoin value', () => {
            // expect(app.find('h3').text()).toEqual('Bitcoin balance: 0.01');

        });
        
        
        it('should contain a connected Loot component', () => {
            expect(app.find('Connect(Loot)').exists()).toBe(true)
        });
        

        
    });
    
});
