import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';

import './index.css'; // de manera opcional

//1RO: crear la referencia al archivo index.html( al div con id=counter en este caso)
const divCounter = document.querySelector('#counter');


//2DO: renderizar el componete utilizando  ReactDOM
ReactDOM.render(<CounterApp value={10} />, divCounter); 
