import React, { Fragment } from 'react';
import Pizza from '../Pizza/Pizza';
import Header from '../Header/Header';
import './PizzaList.css';
import data from '../data';

const renderPizzas = (products) => {
  return products.map(product => {
    return (<Pizza key={product.id} {...product} />)
  })
}

class PizzaList extends React.Component{
 
  render(){
    return (
      <Fragment>
        <Header />
        <div className="container">
          {renderPizzas(data)}
        </div>
      </Fragment>
    )
  }
 
}

export default PizzaList;
