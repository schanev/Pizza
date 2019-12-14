import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import RegisterPage from "./RegisterPage/RegisterPage";
import PizzaList from "./PizzaList/PizzaList";
import PizzaPage from "./PizzaPage/PizzaPage";
import CheckoutPage from "./CheckoutPage/CheckoutPage";
import ErrorPage from "./ErrorPage/ErrorPage";
import LoginPage from "./LoginPage/LoginPage";
import SuccessPage from './Success/Success'

const Navigation = () => {
  return (
    <Fragment>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={PizzaList} />
        <Route path="/users/login" component={LoginPage} />
        <Route path="/users/register" component={RegisterPage} />
        <Route path="/pizza/:id" component={PizzaPage} />
        <Route path="/success" component={SuccessPage} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
    </Fragment>
  );
};

export default Navigation;
