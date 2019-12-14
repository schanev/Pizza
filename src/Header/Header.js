/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

class Header extends React.Component {

  logout = () =>{
    window.location.reload()
    localStorage.removeItem('user');  
  };
  render() {
    const user = localStorage.getItem("user");

    if (user) {
      return (
        <div className="header-container">
          <span>
            <h1>
              <Link className="header-container" to="/">
                Pizza Place
              </Link>
            </h1>
          </span>
          <li>
            <span>
              <h2>
                Hello, { JSON.parse(user).username}
              </h2>
            </span>
            <span>
              <h2 onClick={()=>this.logout()}>
                <p style={{borderRadius:20,margin:5, borderColor:'red', border:'3px'}}>Logout !</p>
              </h2>
            </span>
          </li>
        </div>
      );
    }

    return (
      <div className="header-container">
        <span>
          <h1>
            <Link className="header-container" to="/">
              Pizza Place
            </Link>
          </h1>
        </span>
        <li>
          <span>
            <h2>
              <Link className="header-container" to="/users/login">
                Login
              </Link>
            </h2>
          </span>
          <span>
            <h2>
              <Link className="header-container" to="/users/register">
                Register
              </Link>
            </h2>
          </span>
        </li>
      </div>
    );
  }
}

export default Header;
