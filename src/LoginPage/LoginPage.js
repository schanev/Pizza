import React, { Fragment } from 'react'
import Header from '../Header/Header';  
import LoginContainer from '../LoginForm/LoginContainer';


const LoginPage = () => {
    return(
        <Fragment>
            <Header />
            <LoginContainer />
        </Fragment>
    )
}

export default LoginPage;