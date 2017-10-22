import React,{Component}from 'react';
//  connect component to store 
import {connect} from 'react-redux';
// binding our action creators 
import {fetchBitcoin} from '../actions/bitcoin'
import {deposit,withdraw} from '../actions/balance'
export class Wallet extends Component {
  constructor() {
    super();
    this.state = {
      balance: undefined
    }
  }

  updateBalance = event => {
    
    // update the state
    this.setState({
      balance: parseInt(event.target.value)
    })
  }
  deposit = () => this.props.deposit(this.state.balance)
  withdraw = () => this.props.withdraw(this.state.balance)
  render() {
            return (
            <div>
                <h3 className="balance"> Wallet balance: {this.props.balance}</h3>
              <br/>
              <input className="input-walet"  onChange={this.updateBalance} type="text"/>
              
            <button className='btn-deposit' onClick={this.deposit}> Deposit</button>
              <button className='btn-withdraw' onClick={this.withdraw} > Withdraw</button>
            </div>
            )
  }

  componentDidMount() {
      
  }
}

const mapStateToProps = (state) => {
    // this is comming from redux as props
    //  so in our props we will have number and color as props
    //  by default from reducers it is going to be '0' and 'black'
      return {
          balance: state.balance,
          bitcoin: state.bitcoin
      }
    }
// connect itself returns a function 
// mapStateToProps
export default connect( mapStateToProps, { deposit,withdraw,fetchBitcoin })(Wallet);
