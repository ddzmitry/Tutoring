import React, {Component } from 'react';

class Card extends Component {
  constructor() {
    super();

    this.state = {
        reveal : false
    }

  }

  render() {
      console.log(this.state)
      const {prompt,answer } = this.props.card;

      //defining the class of the element by applying ternary operator
      const classCard = this.state.reveal ? ' card-answer text-revealed' : ' card-answer text-hidden';

    return (
        <div className='card' onClick={()=> { this.setState({reveal: !this.state.reveal })} }>
            <div className='card-prompt'><h4>{prompt}</h4></div>
            <div className={classCard} ><h4>{answer}</h4></div>
        </div>
    );
  }

  componentDidMount() {

  }
}

export default Card;
