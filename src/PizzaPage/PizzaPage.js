import React, { Fragment } from "react";
import {withRouter} from 'react-router-dom';
import Header from "../Header/Header";
import "./PizzaPage.css";
import PizzaContainer from "./PizzaContainer";

const PizzaPage = props => {

  return (
    <Fragment>
      <Header />
      <PizzaContainer {...props}/>
    </Fragment>
  );
};

export default withRouter(PizzaPage);
