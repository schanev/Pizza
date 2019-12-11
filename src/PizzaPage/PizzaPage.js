import React, { Fragment } from "react";
import Header from "../Header/Header";
import {Link} from 'react-router-dom';
import data from "../data";

const PizzaPage = (props) => {
    console.log(props)
    const product = data[props.match.params.id];
    // if(!this.props.auth){
    // return LOGINPAGE
    //}else
  return (
    <Fragment>
      <Header />
      <div>Pizza Page - {product.name}</div>
      <Link to="/">Home</Link>
    </Fragment>
  );
};

export default PizzaPage;
