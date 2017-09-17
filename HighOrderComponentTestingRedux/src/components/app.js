import React, { Component } from 'react';
import Header from './header'


 class App extends Component {
  
  render() {
    return (
      <div>
        <Header />
        {/* to be able to render secret  */}
        {this.props.children}
      </div>
    );
  }
}


export default App