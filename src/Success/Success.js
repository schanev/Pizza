import React, { Fragment, useEffect } from "react";
import { withRouter,useHistory } from "react-router-dom";
import Header from "../Header/Header";

function SuccessPage(params) {
    const history = useHistory();
  useEffect(() => {
    setTimeout(function() {
        history.push("/");
    }, 3000);
  }, [history]);
  return (
    <Fragment>
      <Header />
      <h1 style={{height:"100%",
      width:"100%",
       display:"flex",
        position:'fixed',
        alignItems:"center",
         justifyContent:"center",
          fontSize:"40px"
          }}>Your pizza will arrive soon!</h1>
    </Fragment>
  );
}

export default withRouter(SuccessPage);
