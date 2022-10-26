import React, { Component } from "react";
import menuMobile from "../images/menu-mobile.svg";
import logo from "../images/WolfBank.png";
import { ReactComponent as Search } from "../images/searchnav.svg";

class NavBar extends Component {
  state = {
    mobileMenu: false,
    checkingMenu: false,
    creditMenu: false,
    homeMenu: false,
  };

  handleMenuClick = () => {
    let mobileMenu = !this.state.mobileMenu;
    this.setState({ mobileMenu });
  };

  handleCheckingMenu = () => {
    let checkingMenu = !this.state.checkingMenu;
    this.setState({ checkingMenu, creditMenu: false, homeMenu: false });
  };

  handleCreditMenu = () => {
    let creditMenu = !this.state.creditMenu;
    this.setState({ creditMenu, checkingMenu: false, homeMenu: false });
  };

  handleHomeMenu = () => {
    let homeMenu = !this.state.homeMenu;
    this.setState({ homeMenu, checkingMenu: false, creditMenu: false });
  };

  render() {
    let popMenu = this.state.mobileMenu
      ? "nav__options nav__options-active"
      : "nav__options";

    let checkingMenu = this.state.checkingMenu ? "aabox1" : "aabox1 aaClose";

    let creditMenu = this.state.creditMenu ? "aabox2" : "aabox2 aaClose";

    let homeMenu = this.state.homeMenu ? "aabox3" : "aabox3 aaClose";

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
              <li className="aaLine" onClick={this.handleCheckingMenu}>
                Checking & Savings
              </li>
              <li className="aaLine" onClick={this.handleCreditMenu}>
                Credit Cards
              </li>
              <li className="aaLine" onClick={this.handleHomeMenu}>
                Home Loans
              </li>
              <li className="aaLine">Auto</li>
              <li className="aaLine">Financial Education</li>
            </ul>
            <div className={checkingMenu}>
              <ul className="aaul">
                <li className="aali">Online Savings</li>
                <li className="aali">Money Market</li>
                <li className="aali">Interest Checking</li>
                <li className="aali">High Yield CD</li>
              </ul>
            </div>
            <div className={creditMenu}>
              <ul className="aaul">
                <li className="aali">Explore Credit Cards</li>
                <li className="aali">Personal Credit Cards</li>
                <li className="aali">Sign in for Offers</li>
              </ul>
            </div>
            <div className={homeMenu}>
              <ul className="aaul">
                <li className="aali">Buy a Home</li>
                <li className="aali">Apply for a mortgage</li>
                <li className="aali">See current rates</li>
                <li className="aali">Homebuying 101</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default NavBar;
