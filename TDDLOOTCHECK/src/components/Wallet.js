import React,{Component}from 'react';
//  connect component to store 
import {connect} from 'react-redux';

export class Wallet extends Component {
  constructor() {
    super();

  }

  render() {
            return (
            <div>

                <h3 className="balance"> Wallet balance: {this.props.balance}</h3>

            </div>  
            )
  }

  componentDidMount() {

  }
}

// connect itself returns a function 
// mapStateToProps
export default connect( state => {return {balance:state}}, null)(Wallet);
