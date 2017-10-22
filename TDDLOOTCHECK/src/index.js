import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
// now we need to set up the store 
import {createStore} from 'redux';
import rootReducer from './reducers/balance';
import {Provider} from 'react-redux';
// set up our store 
const store = createStore(rootReducer,
     /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render (
    // will provide  actions as props 
    <Provider store={store}>

         <App/>

    </Provider>
    
    , document.getElementById('root') )