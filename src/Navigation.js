import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PizzaList from "./PizzaList/PizzaList";
import PizzaPage from "./PizzaPage/PizzaPage";
import CheckoutPage from "./CheckoutPage/CheckoutPage";
import ErrorPage from "./ErrorPage/ErrorPage";

const Navigation = () => {
  return (
    <Fragment>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={PizzaList} />
        <Route path="/pizza/:id" component={PizzaPage} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
    </Fragment>
  );
};

export default Navigation;
