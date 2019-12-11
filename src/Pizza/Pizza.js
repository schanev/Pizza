import React from "react";
import PropTypes from 'prop-types'
import './Pizza.css';
import {Link} from 'react-router-dom';

class Pizza extends React.Component {
  

render() {
    const { image, name, description, price, id } = this.props
    return (
        <div className="product-tile">
        <img className="product-image" src={image} alt={name} />
        <div>
          <span className="product-name">{name}</span>
          <span className="product-description">{description}</span>
          <p className="product-price">
            Price:
            <span>
              {price}$  <Link to={`/pizza/${id}`}><button>Order</button></Link>
            </span>
           
          </p>
        </div>
      </div>
      );
    };
}
  

Pizza.defaultProps = {
    image: '',
    name: 'Placeholder',
    description: '',
    price: 0
  }
  
  Pizza.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.number.isRequired
  }
export default Pizza;
