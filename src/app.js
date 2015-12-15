// Import modules using ES2015
import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './includes/Commentbox';

window.React = require('React');

ReactDOM.render(
	<CommentBox url="src/includes/data.json" interval={2000} />,  
	document.querySelector('.react-root')
); 

