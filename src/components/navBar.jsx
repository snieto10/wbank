import React, { Component } from "react";
import menuMobile from "../images/menu-mobile.svg";
import logo from "../images/WolfBank.png";
import { ReactComponent as Search } from "../images/searchnav.svg";

class NavBar extends Component {
  state = {
    mobileMenu: false,
    checkingMenu: false,
  };

  handleMenuClick = () => {
    let mobileMenu = !this.state.mobileMenu;
    this.setState({ mobileMenu });
  };

  handleCheckingMenu = () => {
    let checkingMenu = !this.state.checkingMenu;
    this.setState({ checkingMenu });
  };

  render() {
    let popMenu = this.state.mobileMenu
      ? "nav__options nav__options-active"
      : "nav__options";

    let checkingMenu = this.state.checkingMenu ? "aabox1 aaClose" : "aabox1";

    return (
      <>
        <div className="container">
          <nav className="nav-top">
            <div>
              <ul className="nav-top__list1">
                <li className="nav-top__listli1">Personal</li>
                <li className="nav-top__listli1">Business</li>
                <li className="nav-top__listli1">Commercial</li>
              </ul>
            </div>
            <div>
              <ul className="nav-top__list1">
                <li className="nav-top__listli2">Schedule a Meeting</li>
                <li className="nav-top__listli2">Customer Service</li>
                <li className="nav-top__listli2">Espa&ntilde;ol</li>
                <li className="nav-top__listli2">
                  <Search />
                </li>
              </ul>
            </div>
          </nav>
          <nav className="nav">
            <img
              onClick={this.handleMenuClick}
              className="icon"
              src={menuMobile}
              alt="Mobile Menu"
            ></img>
            <img className="nav__image" src={logo} alt="WolfBank Logo"></img>
            <a href="#" className="btn btn-SignInMobile">
              Sign In
            </a>
          </nav>
          <div className="nav__menu-mobile">
            <ul className={popMenu}>
              <li>
                <a className="nav__link" href="#">
                  Checking Account
                </a>
              </li>
              <li>
                <a className="nav__link" href="#">
                  Credits Cards
                </a>
              </li>
              <li>
                <a className="nav__link" href="#">
                  Home Loans
                </a>
              </li>
              <li>
                <a className="nav__link" href="#">
                  Auto
                </a>
              </li>
              <li>
                <a className="nav__link" href="#">
                  Education & Goals
                </a>
              </li>
            </ul>
          </div>
          <div className="aaBox">
            <ul className="aaList">
              <li
                className="aaLine"
                onMouseEnter={this.handleCheckingMenu}
                onClick={this.handleCheckingMenu}
              >
                Checking & Savings
              </li>
              <li className="aaLine">Credit Cards</li>
              <li className="aaLine">Home Loans</li>
              <li className="aaLine">Auto</li>
              <li className="aaLine">Financial Education</li>
            </ul>
            <div
              className={checkingMenu}
              onMouseLeave={this.handleCheckingMenu}
            >
              <ul className="aaul">
                <li className="aali">Online Savings</li>
                <li className="aali">Money Market</li>
                <li className="aali">Interest Checking</li>
                <li className="aali">High Yield CD</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default NavBar;
