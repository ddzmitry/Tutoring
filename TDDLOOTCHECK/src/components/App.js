import React, {Component} from 'react';
import Wallet from './Wallet';


class App extends Component {
  constructor() {
    super();
  
  }

  render() {
    return(
        <div>
        <h2> Loot Check</h2>
        <hr/>
          <Wallet />
        </div>
    ) 
  }

  componentDidMount() {

  }
}

export default App;
