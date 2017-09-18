import React from 'react';
import { shallow } from 'enzyme';
import RecatDOM from 'react-dom';
import App from './App';


describe('Name of the group', () => {
    
    const app = shallow (<App/>);
    it('should renders correctly', () => {
        expect(app).toMatchSnapshot()
    });
    
    it('inisilaze `state` eith an empty list of gifts', () => {
        expect((app).state().gifts).toEqual([])
    });

       
       describe('button click scenario ', () => {
           
           beforeEach(() => {
            app.find('.btn-add').simulate('click')
           });
           
           afterEach(() => {
            (app).state().gifts = []
           });
           
        it('adds a new gidt to `state` when clicking `add gift` button', () =>{        
            
             expect((app).state().gifts).toEqual([{id:1}]);    
         })
     
         it('adds new gift when clicking a add gift button', ()=>{
           
             expect( app.find('.gift-list').children().length ).toEqual(1)
         })
         
         it('should create a gigt component', () => {
            expect( app.find('Gift').exists()).toBe(true)
         });
         
           
           describe('user wants to remove the gift', () => {
               
               beforeEach(() => {
                   // instance will allow to use functions from component
                   app.instance().removeGift(1)
               });
               
               it('should remove gift from the state', () => {
                   expect(app.state().gifts).toEqual([])
               });
               
           });
           
       });
        


});
