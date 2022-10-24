import React, { Component } from "react";
import menuMobile from "../images/menu-mobile.svg";
import logo from "../images/WolfBank.png";

class NavBar extends Component {
  render() {
    return (
      <>
        <nav className="nav">
          <img className="icon" src={menuMobile} alt="Mobile Menu"></img>
          <img className="nav__image" src={logo} alt="WolfBank Logo"></img>
          <a href="#" className="btn btn-SignInMobile">
            Sign In
          </a>
        </nav>
      </>
    );
  }
}

export default NavBar;
