import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/balance';
export class Wallet extends React.Component {
  constructor() {
    super();
   
  }

  render() {
      window.props = this.props
      
    return (
        <div>
        <h3 className="balance">Wallet Ballance {this.props.balance}</h3>
        </div>
    )
  }

  componentDidMount() {
  }
}
const mapStateToProps = (state) => {
    return {
        // on;u one reducer 
        balance: state
    }
}

export default connect(mapStateToProps,actions)(Wallet);

