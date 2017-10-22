// https://api.coindesk.com/v1/bpi/currentprice.json

// mock store
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { FETCH_BITCOIN } from './constants';
import {fetchBitcoin } from './bitcoin';

const createMockStore = configureMockStore([thunk]);

const store = createMockStore({ bitcoin:{}  });
const mockResponce = {
    body : {
        bpi: "bitcoin price index"
    }
}
// mocking fetch
fetchMock.get(
    'https://api.coindesk.com/v1/bpi/currentprice.json',
    mockResponce
)


it('It creates an async action to fetch bitcoin value', () => {
    // our expectation
    const expectedActions = [ { bitcoin:mockResponce.body, type: FETCH_BITCOIN}]

    store.dispatch(fetchBitcoin()).then(()=> {
        // store has getActions() method
      expect(store.getActions()).toEqual(expectedActions)
       
    })
});
