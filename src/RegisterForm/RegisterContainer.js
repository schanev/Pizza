import React, { Fragment, useState } from "react";
import { withRouter, useHistory } from "react-router-dom";
import RegisterForm from "./RegisterForm";
import axios from "axios";
function RegisterContainer() {
  const [error, setError] = useState("");
  const histroy = useHistory();

  async function register({ username, password }) {
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await axios({
        method: "POST",
        url: "http://localhost:9999/api/user/register",
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        },
        data: { username, password }
      });

      histroy.push("/users/login");
    } catch (e) {
      console.error(e);
      setError("Whoops something went wrong!");
    }
  }

  function onSubmit(values) {
    register(values);
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
      <RegisterForm onSubmit={onSubmit} />
    </Fragment>
  );
}

export default withRouter(RegisterContainer);
