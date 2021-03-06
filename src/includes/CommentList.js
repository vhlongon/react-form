import React from 'react';
import Comment from './Comment';

export default class CommentList extends React.Component {
  render() {
    console.log(this.props.data);
    let commentNodes = this.props.data.map(function loopComments(comment) {
      return (
      	<Comment author={comment.author} key={comment.id}>
      		{comment.text}
      	</Comment>
  		);
    });
    return (
  		<div className="CommentList">
    		{commentNodes}
    	</div>
  	);
  }
}
