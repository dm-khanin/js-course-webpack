import * as $ from "jquery";

import data from "./data";
import { someFunc } from "./func";
import './styles.css';
import './sass.scss';
import google from './img/image.png';

$(function() {
  const result = someFunc(data);
  $('pre').html(result);
  $('#google-image').attr('src', google);
  alert('hello from webpack and browser sync works!!!');
  console.log('hello');
});
