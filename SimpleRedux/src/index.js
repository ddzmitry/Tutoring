import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//  Provider will provide us with state throughout all Application
import { Provider } from 'react-redux'
//  this functon will create us a store
import {createStore} from 'redux';
// combine reducer will return us RootReducer that we use to create a store
import RootReducer from './reducers'
const store = createStore(RootReducer)
ReactDOM.render(
//   and we pass the store throgh Provider
    <Provider store={store} >

        <App />

    </Provider>  
  
  , document.getElementById('root'));
registerServiceWorker();
