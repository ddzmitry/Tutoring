import React, {Component } from 'react';
import {Link} from 'react-router-dom';
import {Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import {connect} from 'react-redux';
//add actions 
import { addStack } from '../actions';

class StackForm extends Component {
  constructor() {
    super();
    //the state will be pushed to ReduX
    this.state = {
        title : '',
        cards: []
    }
  }
  addStack(){
    // console.log(this.state)
    // wire up the redux here 
    // console.log("STATE", this.state)
    this.props.addStack(this.state)

  }

    updateCardPart (event,index,part){

        const {  cards } = this.state;

         cards[index][part] = event.target.value;

        this.setState({cards})
        console.log(this.state)
    }
  addCard(){

      const { cards } = this.state;
    cards.push({ id: cards.length , prompt:'',answer:''})

    this.setState({ cards })
  }
  render() {

    return ( <div>

            <Link to='/' className="link-home"> <h4> Home </h4> </Link>

            <h4>Create A New Stack </h4>
            <br/>

            <Form inline>
                <FormGroup>
                    <ControlLabel> Title:</ControlLabel>
                    {' '}
                    <FormControl onChange={ event => this.setState({title: event.target.value })} />
                    
                 </FormGroup>
                    {

                        this.state.cards.map((card,index)=>{

                            return(
                                <div id={index} key ={card.id}> 
                                    <br/>
                                <FormGroup>
                                <ControlLabel> Prompt:</ControlLabel>
                                    {' '}
                                    <FormControl 
                                    onChange={(event)=>{this.updateCardPart(event,index,'prompt')}}/>
                                    <ControlLabel> Answer:</ControlLabel>
                                    {' '}
                                    <FormControl
                                     onChange={(event)=>{this.updateCardPart(event,index,'answer')}}/>
                                    
                                
                                 </FormGroup>
                                </div>
                            )
                        })
                    }
             </Form> 
                            <br/>
            <Button onClick={ ()=> this.addCard() }> Add Card </Button> 
            {' '}
            <Button onClick={ ()=> this.addStack() }> Save and add Stack </Button> 
    </div>  );
  }

  componentDidMount() {

  }
}

// pass the connedct with function 
export default connect(null,{ addStack })(StackForm);
