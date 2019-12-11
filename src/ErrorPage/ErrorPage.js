import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';

const ErrorPage = () => {
    return (
        <Fragment>
<div>Whoops something went wrong...
    <Link to="/">Back to home</Link>
    </div>
        </Fragment>
    )
}

export default ErrorPage;
