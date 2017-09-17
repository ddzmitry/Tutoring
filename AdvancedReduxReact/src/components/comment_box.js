import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from  '../actions/index';

class Comment_box extends Component {
  constructor() {
    super();
    this.state ={
        comment: ''
    }
  }
  handleChange(e){
    
    this.setState({comment : e.target.value })
  }
  handleSubmit(event){
      event.preventDefault()
      //all actions will be avaliable as props
      this.props.saveComment(this.state.comment)
      this.setState({comment:''})
  }
  render() {
    return (
        <form onSubmit = {this.handleSubmit.bind(this)} className="coment-box">
        <h4>Add A Coment</h4>
            <textarea 
            defaultValue = ''
             onChange={this.handleChange.bind(this)}
             value = {this.state.comment}>
             </textarea>
             <div>
            <button action="submit">Submit Comment</button>    
             </div>
        </form>
    )
  }

  componentDidMount() {
  
  }
}

//mapStateToProps first element and actions is the next one 
export default connect(null,actions)(Comment_box);
