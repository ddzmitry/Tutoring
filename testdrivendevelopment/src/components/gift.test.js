import React from 'react';
import { shallow } from 'enzyme';
import RecatDOM from 'react-dom';
import Gift from './Gift';

describe('Gift', () => {
       
    
    const mockRemove = jest.fn();
    const id = 1;
    const props = {gift: {id}, removeGift: mockRemove}
    // passing props to the component
    const gift = shallow(<Gift {...props}/>);
    // match th snapshot
    it('should be rendered', () => {
        console.log(gift.debug())
        expect(gift).toMatchSnapshot()
    });
    
    
    it('inisilaze a persom and present in `state`' , () => {
        expect((gift.state())).toEqual({person:'',present:''})
    });
    
    
    describe('when typing in fields', () => {
        let props;

        beforeEach(()=>{
            props = {
                person: 'Dzmitry',
                present:'MacBook'
            }

            gift.find('.input-person').simulate('change',{target:{ value: props.person}})
            gift.find('.input-present').simulate('change',{target:{ value: props.present}})

        
        })

        
        it('should update person in state', () => {
            expect(gift.state()).toEqual(props)
        });
            
            describe('When Clicking the remove button', () => {
                
                beforeEach(() => {
                    gift.find('.btn-remove').simulate('click')
                });
                
                it('should remove gift', () => {
                    // MOCK FUNCTIONS
                    expect(mockRemove).toHaveBeenCalledWith(id)
                });
                
            });
            
        
    });
    
});
