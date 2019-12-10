import React from "react";
import PropTypes from 'prop-types'
import './Pizza.css';

class Pizza extends React.Component {
    constructor(props){
        super(props)
    }

render() {
    const { image, name, description, price } = this.props
    return (
        <div className="product-tile">
        <img className="product-image" src={image} alt={name} />
        <div>
          <span className="product-name">{name}</span>
          <span className="product-description">{description}</span>
          <p className="product-price">
            Price:
            <span>
              {price}$
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
