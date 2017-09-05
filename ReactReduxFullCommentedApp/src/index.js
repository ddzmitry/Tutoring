import React from 'react';
import './index.css'
import { BrowserRouter , Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
// create store function
import {createStore} from 'redux';
// but to create store we need a reducer
import rootReducer from './reducers';
// and we import our action creators function
import { setStack } from './actions';
// we need Provider to provide store to the app 
import { Provider } from 'react-redux'

import App from './components/App';
import Stack from './components/Stack';
import StackForm from './components/StackForm';

const store = createStore(rootReducer);
;
// logger 
store.subscribe(()=> console.log('Store', store.getState() ))

//test 
//store.dispatch(setStack({id:0,title:'example',cards:[]}))

//exact will use EXACR compmonent to render 
ReactDOM.render(

    <Provider store={store}>
<BrowserRouter>
    <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/stack' component={Stack}/>
        <Route path='/stack_form' component={StackForm}/>
    </Switch>
</BrowserRouter>
    </Provider>
, document.getElementById('root')


)
