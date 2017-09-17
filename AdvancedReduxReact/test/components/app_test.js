import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

//use describe to similate test 
describe('App', () =>{

  // it('shows the correct text', () => {
  //   const component = renderComponent(App)
  //   expect(component).to.contain('React simple starter')
  // });
    let component;
    
    beforeEach(() => {
     component = renderComponent(App)
    });
    
    it('should have Comment_box', () => {
        expect(component.find('.coment-box')).to.exist
      //Comment_box

    });

    it('should have commentlist', () => {
      expect(component.find('.coment-list')).to.exist

  });

    
})