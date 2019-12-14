import React, { Fragment, useState, useEffect } from "react";
import { withRouter, useHistory } from "react-router-dom";
import axios from "axios";
import LoginForm from "./LoginForm";
function LoginContainer() {
  const [error, setError] = useState("");
  const history = useHistory();

  useEffect(()=>{
    if(localStorage.getItem('user')){
      history.push('/')
    }
  },[history])

  function login({ username, password }) {
    axios
      .post(
        "http://localhost:9999/api/user/login",
        { username, password },
        {
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "Access-Control-Allow-Origin": "*"
          }
        }
      )
      .then(({data}) => {
      
        localStorage.setItem(
          "user",
          JSON.stringify({
            id: data._id,
            username:data.username
          })
        );

        history.push("/");
      })
      .catch(e => {
        console.error(e);
        setError("Whoops something went wrong!");
      });
  }

  function onSubmit(values) {
    login(values);
  }

  return (
    <Fragment>
      {
        <p
          style={{
            color: "red",
            textAlign: "center",
            fontSize: 30,
            fontWeight: "bold"
          }}
        >
          {error}
        </p>
      }
      <LoginForm onSubmit={onSubmit} />
    </Fragment>
  );
}

export default withRouter(LoginContainer);
