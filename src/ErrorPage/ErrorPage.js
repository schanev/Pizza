import React, { Fragment } from "react";
import "./ErrorPage.css";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Fragment>
      <Link to="/">
        <button>Home</button>
      </Link>
      <img
        className="fit"
        src="https://cdn.pixabay.com/photo/2016/04/24/13/24/error-1349562_960_720.png"
        alt="new"
      />
      <div></div>
    </Fragment>
  );
};

export default ErrorPage;
