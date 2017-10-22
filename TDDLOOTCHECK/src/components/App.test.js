import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


describe('App', () => {
    // shallow render App
     const app = shallow(<App />);

    it('should render component', () => {
        // will match the snapshot 
        expect(app).toMatchSnapshot();
    });

    // since we will pass wallet as child component we can check for it to be exicting
    it('should containt Wallet component', () => {
        //  our wallet wwill be connected function now 
        expect(app.find('Connect(Wallet)').exists()).toBe(true)
    });
    
    
});

