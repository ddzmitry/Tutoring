import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import provider
//  Provider is a Wrapper 
import {Provider} from 'react-redux'
// pull funciton that will create a store 
import {createStore} from 'redux'
// import Root reducers
import RootReducer from './reducers'
// this is our store
let store =  createStore(RootReducer)
ReactDOM.render(
<Provider store={store}>

        <App />

</Provider>
, document.getElementById('root'));
registerServiceWorker();
