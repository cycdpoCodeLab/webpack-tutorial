/**
 * Created by cyc on 16/10/20.
 */

import React, {Component} from 'react';
import config from './config.json';

import style from './Greeter.css';       //导入css

class Greeter extends Component {
  render() {
    return (
      <div className={style.root}>
        {config.greetText}
      </div>
    );
  }
}

export default Greeter


/*
 const config = require('./config.json');

 module.exports = function() {
 var greet = document.createElement('div');
 //greet.textContent = "Hi there and greetings!";
 greet.textContent = config.greetText;
 return greet;
 };
 */