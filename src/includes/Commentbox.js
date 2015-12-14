import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

export default class Commentbox extends React.Component {
  render() {
    return (
      <div className="commentbox">
      	<h1>Comments</h1>
      	<CommentList/>
      	<CommentForm/>
      </div>
    );
  }
}

