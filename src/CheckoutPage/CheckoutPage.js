import React, { Fragment } from "react";
import Header from "../Header/Header";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

class CheckoutPage extends React.Component{
 
  
  render(){
    return (
      <Fragment>
        <Header />
        <CheckoutForm />
      </Fragment>
    );
  }
};

export default CheckoutPage;
