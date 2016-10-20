/**
 * Created by cyc on 16/10/20.
 */


import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';

import './main.css'; //使用require导入css文件

render(<Greeter />, document.getElementById('root'));

/*
const greeter = require('./Greeter.js');

document.getElementById('root').appendChild(greeter());
*/