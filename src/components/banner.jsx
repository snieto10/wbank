import React, { Component } from "react";
import finance from "../images/finance.jpeg";

class Banner extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="banner">
          <div className="container">
            <main className="banner-column">
              <div className="banner1">
                <h1 style={{ fontSize: "4rem", margin: "10px" }}>
                  You don't have to be glued to the market to invest.
                </h1>
                <p className="banner-text" style={{ fontWeight: "bold" }}>
                  Thanks to Wolf Invest’s human + machine dream team, you can
                  now sit back while we do the hard work. Get started with as
                  little as $100.
                </p>
                <div className="flex">
                  <button className="btnBanner ">Create your plan</button>
                </div>
              </div>
              <div className="banner2">
                <img className="finance" src={finance} alt="Ipad"></img>
              </div>
            </main>
          </div>
        </div>
      </>
    );
  }
}

export default Banner;
