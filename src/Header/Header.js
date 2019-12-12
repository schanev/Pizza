import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <span><h1><Link className="header-container" to="/">Pizza Place</Link></h1></span>
        <span><h2><Link className="header-container" to="/login">Login</Link></h2></span>
        <span><h2><Link className="header-container" to="/register">Register</Link></h2></span>
      </div>
    )
  }

}

export default Header