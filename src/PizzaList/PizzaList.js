import React, { Fragment } from 'react';
import PropTypes from 'prop-types'
import Pizza from '../Pizza/Pizza';
import Header from '../Header/Header';
import './PizzaList.css';

const renderPizzas = (products) => {
  return products.map(product => {
    return (<Pizza key={product.id} {...product} />)
  })
}

const PizzaList = ({products}) => {

  return (
    <Fragment>
      <Header />
      <div className="container">
        {renderPizzas(products)}
      </div>
    </Fragment>
  )
}

PizzaList.defaultProps = {
  products: []
}

PizzaList.propTypes = {
  products: PropTypes.array.isRequired
}   

export default PizzaList;
