import * as actions from './index';
import { categories,clues } from '../data/fixtures';


describe('testing actions', () => {
    
    
    it('should return categories on setCategories', () => {
        // testing an action funciton 
        expect(actions.setCategories(categories)).toEqual({categories, type: actions.SET_CATEGORIES})
    });

    it('should return categories on setClues', () => {
        // testing an action funciton 
        expect(actions.setClues(clues)).toEqual({clues, type: actions.SET_CLUES})
    });
    
});
