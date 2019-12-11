import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PizzaList from "./PizzaList/PizzaList";
import PizzaPage from "./PizzaPage/PizzaPage";
import ErrorPage from "./ErrorPage/ErrorPage";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={PizzaList} />
        <Route path="/pizza/:id" component={PizzaPage} />
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Navigation;
