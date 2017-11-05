import React, { Component } from 'react';

import { setColor,increaseNumber,decreaseNumber,Chuck} from './actions';

// we have to connect out compnent
import {connect} from 'react-redux'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  render() {
    console.log(this.props)
    const styles = {
      button : {
        color : this.props.color
      }
    }

    return (
      <div className="App">
          <h2>
          {this.props.joke}
          </h2>
          <h1>{this.props.number}</h1>

          <button

          onClick = {()=> this.props.Chuck(this.props.joke)}
          
          >
          GENERATE A JOKE
          </button>

          <button
          onClick={()=>this.props.increaseNumber(this.props.number)}
          >
          Increase Me!
          </button>
          <button
          onClick={()=>this.props.decreaseNumber(this.props.number)}
          >
          Decrease Me!
          </button>
          <button 
            onClick= {()=>this.props.setColor(this.props.color)}
            style = {styles.button}
            
            >
            Hello Redux!
          </button>
      </div>
    );
  }
}
 const mapStateToProps = (state) => {
  return {
    color: state.color,
    number : state.number,
    joke: state.joke
  }
}
export default connect(mapStateToProps,{setColor,increaseNumber,decreaseNumber,Chuck})(App);
