import React from 'react';
import Pizza from '../Pizza/Pizza';
import './PizzaList.css';

class PizzaList extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      product: props.product
    }
  }
  render(){    
    const {product} = this.props;

      return (
       <div className="container">
         <Pizza product={product} />
         <button>Order</button>
       </div>
    );
  }
}


export default PizzaList;
