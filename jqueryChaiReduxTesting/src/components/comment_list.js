import React , { Component} from 'react';
import {connect} from 'react-redux';
import {removeComment} from '../actions/index';


class CommentList extends React.Component {
  constructor() {
    super();

  }

  removeComment(id){
      this.props.removeComment(id)
  }

  render() {
      
    const list = this.props.comments.map((comment,id) => <li key={id} >{comment} <span onClick={()=>{this.removeComment(id)}}>❌</span></li>)
    return (
        <div className="coment-list" >
             <ul>
             {list} 
            
             </ul>
        </div>
    );
  }

  componentDidMount() {
  }
}

const mapStateToProps = (state) => {
    return {
       comments : state.comments
    }
}
export default connect(mapStateToProps,{removeComment})(CommentList);
