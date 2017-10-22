import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// connect function will connect this component with redux store
import {connect} from 'react-redux'
// we have to pull funcitons from action creators that will be avaliable as props on this component
import {addNumber, subNumber,setColor} from './actions'
class App extends Component {
  constructor() {
    super();
    this.state = {
    
    }
  }

  ChangeColor(){
    // we are calling our funciton from actioncreators
    this.props.setColor(this.props.color)
  }
  render() {
    const styles = {
      button: {
        color: this.props.color
      }
    }
    console.log(styles)
      return (

      <div>
            <h3>Super Duper Fancy App </h3>
        <h2>
        {/* this is our number  */}
        {this.props.number}
          
        </h2>
           <button
           onClick={()=>this.props.addNumber(this.props.number)}
           >
           Add Me!
           </button>
           <button
           onClick={()=>this.props.subNumber(this.props.number)}
           >
           Subtract Me!
           </button>
          <button style={styles.button} onClick={()=>this.ChangeColor()}>
             Change Color Here!
          </button>
      </div>
      )

      
  }

}
const mapStateToProps = (state) => {
// this is comming from redux as props
//  so in our props we will have number and color as props
//  by default from reducers it is going to be '0' and 'black'
  return {
      number: state.number,
      color : state.color
  }
}



//  here we are connecting with redux
// redux itself returns a funciton that accept mapStateToProps and actionCreators
// all will be avaliable as props
export default connect(mapStateToProps,{addNumber, subNumber,setColor})(App);


