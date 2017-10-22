import rootReducer from './index';


describe('root reducer test', () => {
    
    it('initialize default state', () => {
        // testing root reducer on no data being pushed
        expect(rootReducer({},{})).toEqual({balance:0, bitcoin:{}})
    });
    
});
