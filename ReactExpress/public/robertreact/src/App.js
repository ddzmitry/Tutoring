import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

 constructor(){

  super()
  this.state = {
    userName : '2323',
    job: '23232'
  }

 } 

doFetch() {

fetch('http://localhost:4000/data',{
  credentials: 'no-cors'
})
  .then(data => data.json())
  .then(dataDefiner => {

      const { userName , job} = this.state;
      console.log(userName , job )
  })

  }
  render() {
   
    return (
        <div>
          Hello React

          <button onClick={()=>{  this.doFetch() }}> Click Me</button>
        </div>
    );
  }
}

export default App;
