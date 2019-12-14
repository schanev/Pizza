import React from 'react'
import PropTypes from 'prop-types';
import Styles from './Styles'
import { Form, Field } from 'react-final-form'

const RegisterForm = ({onSubmit}) => (
  <Styles>
    <h1>Register</h1>
    <Form
      onSubmit={onSubmit}
      validate={values => {
        const errors = {}
        if (!values.username) {
          errors.username = 'Required'
        }
        if (!values.password) {
          errors.password = 'Required'
        }
        if (!values.confirm) {
          errors.confirm = 'Required'
        } else if (values.confirm !== values.password) {
          errors.confirm = 'Must match'
        }
        if(!values.terms){
          errors.terms = 'Required'
        }
        return errors
      }}
      render={({ handleSubmit, values }) => (
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
                <input {...input}   type="password" placeholder="Password" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="confirm">
            {({ input, meta }) => (
              <div>
                <label>Confirm</label>
                <input {...input}  type="password" placeholder="Confirm" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="terms" type='checkbox'>
            {({ input, meta }) => (
              <div>
                <label>Terms</label>
                <input {...input}  type="checkbox" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <div className="buttons">
            <button type="submit" value="Register">
              Submit
            </button>
          </div>
        </form>
      )}
    />
  </Styles>
)

RegisterForm.propTypes = {
  onSubmit:PropTypes.func.isRequired
}

export default RegisterForm;

