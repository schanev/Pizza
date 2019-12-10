import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Pizza from './PizzaList/PizzaList';
import data from './data'


ReactDOM.render(<Pizza product={data[0]} />, document.getElementById('root'));

