
import jsdom from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';
import chaiJquery from 'chai-jquery';
// Set up testing enviroment to like a browser in command line
//defines fake browser

/*
SETTING UP THE WINDOW 
*/ 
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
//asign 'junky' version of jquery that will use console as a DOM
const $ = jquery(global.window); //it is jQuery for terminal

/*
RENDERING THE ELEMENT HERE 
*/ 
// Build Render Component helper thta should render given react component 

function renderComponent(ComponentClass, props, state) {
  //creating a component witth renderIntoDocument method that will use our Window obj
  const componentInstance = TestUtils.renderIntoDocument(
    // pushing reducers ,state to the create store redux function 
    <Provider store={createStore(reducers, state)}>
    {/* and passing props to the component from reducer  */}
      <ComponentClass {...props} />
    </Provider>
  );

  return $(ReactDOM.findDOMNode(componentInstance));  // THIS IS PODUCES HTML + we add jQuery to it L
}


// Build helper for simulating events
$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
}

// Set up chai-jquery
chaiJquery(chai, chai.util, $);

export { renderComponent, expect };