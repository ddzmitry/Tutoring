import { renderComponent, expect } from '../test_helper';
import Comment_box from '../../src/components/comment_box';


describe('Comment_box', () => {
    
        let component;
    beforeEach(() => {
         component = renderComponent(Comment_box)
    });
    
    
    it('cas comment class', () => {
      
        expect(component).to.have.class('coment-box');      
    });
    
  
    it('should have a text area', () => {

        expect(component.find('textarea')).to.exist;

    });

    
    it('has a button', () => {
        expect(component.find('button')).to.exist;
    });
    
            describe('entering some text',()=>{
                
                beforeEach(() => {
                    component.find('textarea').simulate('change', 'new comment')
                });
                
                it('shows text that entered', () => {
                    expect(component.find('textarea')).to.have.value('new comment')
                });
                
                it('when submited clears input', () => {
                    //submit  form here 
                    
                    component.simulate('submit')
                    expect(component.find('textarea')).to.have.value('')
                });
            })

    
    
});
