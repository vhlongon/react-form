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
      dataType: 'json',
      success: data => {
        this.setState({data: data});
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }
    });
  }
  componentDidMount() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer.bind(this), this.props.pollInterval);
  }
  render() {
    return (
      <div className="commentbox">
      	<h1>Comments</h1>
      	<CommentList data={this.state.data} />
      	<CommentForm/>
      </div>
    );
  }
}
