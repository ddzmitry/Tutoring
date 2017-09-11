import React from 'react';
import {shallow} from 'enzyme';
import {Clue }from './Clue';
import {categories} from '../data/fixtures';

const clue = {answer:'World',question:'Hello',value:"100"};
const props = { clue };

describe('Clue', ()=>{
    const clue = shallow(<Clue {...props} />);

    it('Sould render value',()=>{

        
        expect(clue.find('h4').text()).toEqual(props.clue.value)
    })

    it('should render question', ()=>{
        expect(clue.find('h5').at(0).text()).toEqual(props.clue.question)
    })

    it('should render answer', ()=>{
        expect(clue.find('h5').at(1).text()).toEqual(props.clue.answer)
    })
    it('should have a state of revealed false', () =>{
        expect(clue.state().revealed).toBe(false)
    })

    describe('clicking on clue ', ()=>{
        
        beforeEach(() => {
            clue.simulate('click')
        });
        
        afterEach(() => {
            clue.simulate('click')
        });

        it('should change the state', ()=>{
            expect(clue.state().revealed).toBe(true)
        })
        it('should have visible class', ()=>{
          
            expect(clue.find('h5').at(1).hasClass('text-revealed')).toBe(true)
        })
        
        
    })

})