import rootRediucer from './index';
import * as actions from '../actions';
import {categories, category} from '../data/fixtures';


describe('root reducer', () => {
        // firing all reducers at the same time to see  all state componentsw
        it('should return an initial state of the app ', () => {
            expect(rootRediucer({},{})).toEqual({"categories":  [], "category": {}, "clues": []})
        });

        it('sets categories',()=>{
            expect(rootRediucer({},{type:actions.SET_CATEGORIES , categories})).toEqual({categories,category:{},clues:[]})
        })
        
        it('should pick a category', () => {
            expect(rootRediucer({},{type:actions.PICK_CATEGORY , category})).toEqual({categories:[],category,clues:[]})
            
        });
        
});
