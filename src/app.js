// Import modules using ES2015
import React from 'react';
import ReactDOM from 'react-dom';
import ReactComp from './includes/ReactComp';
import $ from 'jquery';
import {Person} from './includes/Person';
import * as test from './includes/test';

//also possible to use require syntax
require('browsernizr/test/fullscreen-api');
require('browsernizr/test/css/columns');
let Modernizr = require('browsernizr');

ReactDOM.render(<ReactComp name="Lord Vader"/>,  document.querySelector('.react-root')); 
$('body').css('background', 'red');
global.app = function main() {
  let person = new Person('Jerry Lee', 'Lewis');
  console.log(person.fullName);
  console.log(Modernizr);
};
