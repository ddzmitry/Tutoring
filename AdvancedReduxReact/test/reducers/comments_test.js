import {expect} from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import {SAVE_COMMENT} from '../../src/actions/types';


describe('comments reducer',()=>{

    it('handles action with payload and  SAVE_COMMENT acrtion', ()=>{
        let action = {
            type : SAVE_COMMENT,
            payload : 'new comment'
        }

        let reducerFunction = commentReducer('',action)
        // make sure that reducer returns the proper state 
        expect(reducerFunction[0]).to.equal(action.payload)
        
         //expect(reducerFunction).to.be.instanceof(Array)
    })

    it('handle action of type SAVE_COMMENT ', ()=>{
        //checking if  array is going to be returned
         expect(commentReducer(undefined,{})).to.be.instanceof(Array)
     })
})