import React from "react";
import Styles from "./Styles";
import { Form, Field } from "react-final-form";


const LoginForm = ({onSubmit}) => (
  <Styles>
    <h1>Login</h1>
    <Form
      onSubmit={onSubmit}
      validate={values => {
        const errors = {};
        if (!values.username) {
          errors.username = "Required";
        }
        if (!values.password) {
          errors.password = "Required";
        }
        return errors;
      }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <Field name="username">
            {({ input, meta }) => (
              <div>
                <label>Username</label>
                <input {...input} type="text" placeholder="Username" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="password">
            {({ input, meta }) => (
              <div>
                <label>Password</label>
                <input {...input} type="password" placeholder="Password" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>

          <div className="buttons">
            <button type="submit" disabled={submitting}>
              Login
            </button>
          </div>
        </form>
      )}
    />
  </Styles>
);

export default LoginForm;
