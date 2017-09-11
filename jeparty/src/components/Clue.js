import React, {Component} from 'react';

export class Clue extends Component {
  constructor() {
    super();
    this.state = ({
        revealed : false
    })
  }
  changeRevealed(){
      this.setState({
        revealed: !this.state.revealed
      })
  }

  render() {
      const {answer,question,value } = this.props.clue;
      const classClue = this.state.revealed ? "text-revealed" : "text-hidden";

    return (
        <div className="clue" onClick={()=>this.changeRevealed()}>
            <h4>{value || 'unknown' }</h4>
            <hr/>
            <h5>{question}</h5>
            <hr/>
            <h5 className={classClue}>{answer}</h5>
        </div>
    );
  }

  componentDidMount() {
  
  }
}

export default Clue;
