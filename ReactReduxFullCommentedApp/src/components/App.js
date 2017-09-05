import React, {Component } from 'react';
import Stacklist from './Stacklist';
import {Link} from 'react-router-dom'
class App extends Component {
  constructor() {
    super();

  }

  render() {
    return (
        <div>
           <h2> Cards Pro </h2> 
            <hr/>
             <Stacklist/>
             <hr/>
             <Link to="stack_form">
              <h4> Create a New Stack </h4>
             </Link>
        </div>

    );
  }

  componentDidMount() {

  }
}

export default App;
