import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchBitcoin } from '../actions/bitcoin'
export class Loot extends Component {
  constructor() {
    super();

  }

  render() {
    return (
        <h3>
          Bitcoin balance:{this.computeBitcoin()}
        </h3>
    )
  }

  componentDidMount() {
    this.props.fetchBitcoin()
  }

  computeBitcoin(){
    const { bitcoin } = this.props;
    if(Object.keys(bitcoin).length === 0) return '';
    console.log(bitcoin.bpi.USD.rate)
    return this.props.balance / parseInt(bitcoin.bpi.USD.rate.replace(',',''), 10);
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
// binding here 
export default connect(mapStateToProps,{fetchBitcoin})(Loot);
