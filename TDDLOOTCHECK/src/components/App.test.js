import React from 'react';
import {shallow} from 'enzyme';
import App from './App';


describe('App', () => {
    const app = shallow(<App/>);
    
    it('should render the app', () => {
        expect(app).toMatchSnapshot();
    });
    
    
    it('should contain a wallet component', () => {
        expect(app.find('Connect(Wallet)').exists()).toBe(true)
    });
    
});
