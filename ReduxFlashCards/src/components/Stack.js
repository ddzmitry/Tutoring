import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Card from './Card';

class Stack extends Component {
  constructor() {
    super();

  }

  render() {
      console.log('stack props', this.props)
      const {title, cards} = this.props.stack
    return (
        <div>
            <Link to="/"  className='link-home' >  <h4> Home </h4>   </Link>
        <h3> {title} </h3>
        <br/>
        {
            cards.map((card)=>{

                return(

                    <Card key={card.id} card = {card} />
                );
            })
        }
        </div>
    )
  }

  componentDidMount() {

  }
}
// connect will set props for the component 
const mapStateToProps = (state) => {
    return {
        stack: state.stack
    }
}

//connect return the function that we woll pass in the stack 
export default connect(mapStateToProps,null)(Stack);
