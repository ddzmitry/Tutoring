import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
// now we need to set up the store 
//  applyMiddleware need wor reduxThunk
import {createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './reducers/index';
import {Provider} from 'react-redux';
// set up our store 
const store = createStore(rootReducer,
    // applying thunk here 
    applyMiddleware(thunk)
);

render (
    // will provide  actions as props 
    <Provider store={store}>

         <App/>

    </Provider>
    
    , document.getElementById('root') )