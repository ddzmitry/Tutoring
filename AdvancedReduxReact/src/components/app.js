import React, { Component } from 'react';
import  Comment_box from './comment_box';
import CommentList from './comment_list'
export default class App extends Component {
  render() {
    return (
      <div>
        <Comment_box/>

        <CommentList/>
      </div>
    );
  }
}
