import React, { Component } from 'react';
// import {bindActionCreators } from 'redux';
//cionnect 
import {connect} from 'react-redux';
import stacks from '../data/stacks.json'
import { Link } from 'react-router-dom';

//importing action creator
import {setStack , loadStacks} from '../actions';


class Stacklist extends Component {
  constructor() {
    super();

  }

  render() {
     // console.log('props', this.props)
    return (
        <div>
            {this.props.stacks.map((stack)=>{
                return (
                <Link 
                key={stack.id}  
                to="/stack"
                onClick = {()=> this.props.setStack(stack) }
                >
                    <h4 >{stack.title}</h4>
                </Link>
                )
            })}
        </div>
    );
  }

  componentDidMount() {
     // console.log("PROPS",this.props)
     if(this.props.stacks.length == 0){
         //to make it being loaded only once 
        this.props.loadStacks(stacks)
     }
  }
}

// is function /action creator is second parameter in connect function 
// function mapDispatchToProps (dispatch) {
//     // binding here with action creators function
//     // return bindActionCreators({ setStack }, dispatch);
// }



//redux state comes from here here we have acces to our REDUCER

const mapStateToProps = (state) => {
    // console.log("STATE", state)
    //state will have all reducers 

    // and here we return props from the redux store
    return {
        stacks: state.stacks
    }
}

// we are passing both functions from action amd mapStateToProps to return props
// and we connect our REDUCERS with action creators! 
export default connect(mapStateToProps,{ setStack,loadStacks })(Stacklist);
