import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';



describe('CommentList', () => {
    let component;
    beforeEach(() => {
        const props = {comments: ['New Comment','Other Comment']};

        component= renderComponent(CommentList,null,props)
    });
    
    it('render component', () => {
        expect(component).to.have.class('coment-list')
    });
    it('shows an li for each comment', () => {
        expect(component.find('li').length).to.equal(2)
    });
    it('shows comment for eact provided', () => {
        expect(component).to.contain('New Comment')
        expect(component).to.contain('Other Comment')
    });
    
});
