import React, {Component} from 'react';
import {FormGroup, Form, FormControl, ControlLabel,Button} from 'react-bootstrap';
class Gift extends Component {
  constructor() {
    super();
    this.state=({
        person: '',
        present:''
    })
  }

  render() {
    return(
        <div className="gift">
            <Form>
            <FormGroup>
            <ControlLabel>Person</ControlLabel>
                <FormControl
                onChange = {event => this.setState({person:event.target.value })} 
                className="input-person"/>
                </FormGroup>
                <FormGroup>
            <ControlLabel>Person</ControlLabel>
                <FormControl
                onChange = {event => this.setState({present:event.target.value })} 
                className="input-present"/>
                </FormGroup>
            </Form>
            <Button 
            
            onClick={()=>this.props.removeGift(this.props.gift.id)}
            className="btn-remove"> Remove Gift </Button>
        </div>
    )
  }

  componentDidMount() {

  }
}

export default Gift;
