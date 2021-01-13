import React from 'react';
import ReactDOM from 'react-dom'
import CounterApp from './ConunterApp';
//import FirstApp from './FirstApp';


import './index.css';

const root = document.querySelector('#root');

ReactDOM.render(<CounterApp value='Hola'  />, root);

//document.body.append(title);