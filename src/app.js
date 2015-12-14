// Import modules using ES2015
import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './includes/Commentbox';
import {data} from './includes/data';

window.React = require('React');

ReactDOM.render(<CommentBox data={data} />,  document.querySelector('.react-root')); 

