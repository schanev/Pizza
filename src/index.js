import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Pizza from './PizzaList/PizzaList';
import data from './data'


ReactDOM.render(<Pizza products={data} />, document.getElementById('root'));

