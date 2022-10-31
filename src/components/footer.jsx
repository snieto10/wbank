import React from "react";
import { useState } from "react";
import chevron from "../images/chevron.png";

export default function Footer(props) {
  const [about, setAbout] = useState(false);
  const [business, setBusiness] = useState(false);
  const [learn, setLearn] = useState(false);
  const [resources, setResources] = useState(false);

  let handleClick = () => {
    about === false ? setAbout(true) : setAbout(false);
  };
  let handleClick1 = () => {
    business === false ? setBusiness(true) : setBusiness(false);
  };
  let handleClick2 = () => {
    learn === false ? setLearn(true) : setLearn(false);
  };
  let handleClick3 = () => {
    resources === false ? setResources(true) : setResources(false);
  };

  let footer1 =
    about === false
      ? "collapsible__content"
      : "collapsible__content collapsible__open";

  let footer2 =
    business === false
      ? "collapsible__content"
      : "collapsible__content collapsible__open";

  let footer3 =
    learn === false
      ? "collapsible__content"
      : "collapsible__content collapsible__open";

  let footer4 =
    resources === false
      ? "collapsible__content"
      : "collapsible__content collapsible__open";

  let footerIcon =
    about === false ? "footer__icon" : "footer__icon footer__icon2";
  let footerIcon1 =
    business === false ? "footer__icon" : "footer__icon footer__icon2";
  let footerIcon2 =
    learn === false ? "footer__icon" : "footer__icon footer__icon2";
  let footerIcon3 =
    resources === false ? "footer__icon" : "footer__icon footer__icon2";

  return (
    <>
      <div className="container">
        <div className="back-blue">
          <div className="footer" onClick={handleClick}>
            <h3
              style={{
                color: "white",
                marginTop: "6px",
                fontSize: "2rem",
                marginLeft: "1rem",
              }}
            >
              About
            </h3>
            <img src={chevron} className={footerIcon}></img>
          </div>
          <div className={footer1}>
            <ul className="listul">
              <li className="listli">Our Company</li>
              <li className="listli">Careers</li>
              <li className="listli">Investors Relations</li>
              <li className="listli">Supliers</li>
            </ul>
          </div>
          <div className="footer" onClick={handleClick1}>
            <h3
              style={{
                color: "white",
                marginTop: "6px",
                fontSize: "2rem",
                marginLeft: "1rem",
              }}
            >
              Business Solutions
            </h3>
            <img src={chevron} className={footerIcon1}></img>
          </div>
          <div className={footer2}>
            <ul className="listul">
              <li className="listli">Corporate Finance</li>
              <li className="listli">Dealer Services</li>
              <li className="listli">Wolf Ventures</li>
              <li className="listli">Wolf Lending</li>
            </ul>
          </div>
          <div className="footer" onClick={handleClick2}>
            <h3
              style={{
                color: "white",
                marginTop: "6px",
                fontSize: "2rem",
                marginLeft: "1rem",
              }}
            >
              Learn
            </h3>
            <img src={chevron} className={footerIcon2}></img>
          </div>
          <div className={footer3}>
            <ul className="listul">
              <li className="listli">Financial Life</li>
              <li className="listli">Do it Right</li>
              <li className="listli">Financial Education</li>
            </ul>
          </div>
          <div className="footer" onClick={handleClick3}>
            <h3
              style={{
                color: "white",
                marginTop: "6px",
                fontSize: "2rem",
                marginLeft: "1rem",
              }}
            >
              Resources
            </h3>
            <img src={chevron} className={footerIcon3}></img>
          </div>
          <div className={footer4}>
            <ul className="listul">
              <li className="listli">Contact</li>
              <li className="listli">Give Feedback</li>
              <li className="listli">ATM Locator</li>
              <li className="listli">Shop Wolf Gear</li>
            </ul>
          </div>
        </div>
        <div className="footer_column">
          <div className="column1">
            <ul className="listul">
              <h3
                style={{
                  color: "white",
                  marginTop: "6px",
                  fontSize: "2rem",
                  marginLeft: "1rem",
                }}
              >
                About
              </h3>
              <li className="listli-c">Our Company</li>
              <li className="listli-c">Careers</li>
              <li className="listli-c">Investors Relations</li>
              <li className="listli-c">Suppliers</li>
            </ul>
          </div>
          <div className="column2">
            <ul className="listul">
              <h3
                style={{
                  color: "white",
                  marginTop: "6px",
                  fontSize: "2rem",
                  marginLeft: "1rem",
                }}
              >
                Business Solutions
              </h3>
              <li className="listli-c">Corporate Finance</li>
              <li className="listli-c">Dealer Services</li>
              <li className="listli-c">Wolf Ventures</li>
              <li className="listli-c">Wolf Lending</li>
            </ul>
          </div>
          <div className="column3">
            <ul className="listul">
              <h3
                style={{
                  color: "white",
                  marginTop: "6px",
                  fontSize: "2rem",
                  marginLeft: "1rem",
                }}
              >
                Learn
              </h3>
              <li className="listli-c">Financial Life</li>
              <li className="listli-c">Do it Right</li>
              <li className="listli-c">Financial Education</li>
              <li className="listli-c">How to save more</li>
            </ul>
          </div>
          <div className="column4">
            <ul className="listul">
              <h3
                style={{
                  color: "white",
                  marginTop: "6px",
                  fontSize: "2rem",
                  marginLeft: "1rem",
                }}
              >
                Resources
              </h3>
              <li className="listli-c">Contact</li>
              <li className="listli-c">Give Feedback</li>
              <li className="listli-c">ATM locator</li>
              <li className="listli-c">Shop Wolf Gear</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
