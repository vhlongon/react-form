import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

import $ from 'jquery';

export default class Commentbox extends React.Component {
	constructor(props) {
		super(props);
    this.state = {data: []};
  }
  loadCommentsFromServer() {
    $.ajax({
      url: this.props.url,
      dataType: 'jsonp',
      success: (data) => {
        this.setState({data: data});
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }
    });
  }
  handleCommentSubmit(comment) {

  	let comments = this.state.data;
  	comment.id = Date.now();
  	let newComments = comments.concat([comment]);
  	this.setState({data: newComments});
		$.ajax({
			url: this.props.url,
			// dataType: 'jsonp',
			type: 'POST',
			data: comment,
			success: (data) => {
			  //this.setState({data: data});
			},
			error: (xhr, status, err) => {
				this.setState({data: comments});
			  console.error(this.props.url, status, err.toString());
			}
		});
  }
  componentDidMount() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer.bind(this), this.props.interval);
  }
  render() {
    return (
      <div className="commentbox">
      	<h1>Comments</h1>
      	<CommentList data={this.state.data} />
      	<CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)} />
      </div>
    );
  }
}
