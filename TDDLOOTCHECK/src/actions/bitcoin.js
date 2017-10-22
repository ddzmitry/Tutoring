import {FETCH_BITCOIN} from './constants';

export const fetchBitcoin = () => {

    // returning dispatch with async way
    // this is thunk 
    return dispatch => {
        // wil return promise
        return fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        // turn it to JSON
        .then(res => res.json())
        // and apply JSON to be send to reducerx
        //  this is final dispatch to redux store
        .then(json => dispatch({type:FETCH_BITCOIN, bitcoin: json}))
    }

};