import React, { Fragment } from "react";
import {withRouter} from 'react-router-dom'
import Header from "../Header/Header";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

class CheckoutPage extends React.Component{
 
  componentDidMount(){
    if(!localStorage.getItem('user')){
      this.props.history.push('/users/login')
    }
  }
  
  render(){
    return (
      <Fragment>
        <Header />
        <CheckoutForm />
      </Fragment>
    );
  }
};

export default withRouter(CheckoutPage);
