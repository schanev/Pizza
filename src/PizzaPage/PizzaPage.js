import React, { Fragment } from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import data from "../data";
import "./PizzaPage.css";

const PizzaPage = props => {
  console.log(props);
  const product = data[props.match.params.id];
  // if(!this.props.auth){
  // return LOGINPAGE
  //}else
  return (
    <Fragment>
      <Header />
      <div className="containers">
        <img
          className="product-images"
          src={product.image}
          alt={product.name}
        />
        <span className="product-names">{product.name}</span>
        <span className="product-descriptions">{product.description}</span>


        <div className="pizza">
          <label htmlFor="Size">SIZE</label>
          <select>
            <option value="Medium">Medium (6 Slices)</option>
            <option value="Large">Large (8 Slices)</option>
            <option value="Jumbo">Jumbo (12 Slices)</option>
          </select>
        
          <label htmlFor="Crust" >CRUST</label>
          <select>
            <option value="Hand">Hand Tossed</option>
            <option value="Italian">Italian Style</option>
            <option value="Thin">Thin Crust </option>
          </select>
        </div>
      
        <div>
        <p className="product-prices">
          Price:
          <span>{product.price}$</span>
       
        
          <Link className="buttons" to="/checkout">
            <button>Place Order</button>
          </Link>
        
          <Link className="buttons" to="/">
            <button>Go Back</button>
          </Link>
          </p>
          </div>
        
        </div>
    </Fragment>
  );
};

export default PizzaPage;
