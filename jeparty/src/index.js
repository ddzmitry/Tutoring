import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import rootReducer from './reducers';
import App from './components/App';
import Category from './components/Category';

import {Provider} from 'react-redux';
import {BrowserRouter , Route , Switch} from 'react-router-dom'
import './index.css'
const Store = createStore(rootReducer);

// passing the store 
ReactDOM.render(

<Provider store={Store}>
<BrowserRouter >
    <Switch>
        <Route exact path='/' component={App} />
        <Route  path='/category' component={Category} />
    </Switch>    
</BrowserRouter>
</Provider>


,document.getElementById('root'))