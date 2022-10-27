import React from "react";
import creditImage from "../images/docs.png";
import check from "../images/check.png";
import dollar from "../images/dollarsign.png";

export default function Cards(props) {
  return (
    <>
      <div className="plan__grid container">
        <div className="plan">
          <header className="plan__header">
            <h3 className="plan__h3">Credit Card</h3>
            <img className="card__images" src={creditImage}></img>
          </header>
          <main className="plan__body">
            <h4 className="plan__h4">$750 bonus cash back</h4>
            <p>
              Plus unlimited 1.5% cash back on every purchase with the Ink
              Business Unlimited credit Card. Terms apply.
            </p>
            <a className="plan__button">Continue</a>
          </main>
        </div>
        <div className="plan">
          <header className="plan__header">
            <h3 className="plan__h3">Mortgage</h3>
            <img className="card__images" src={check}></img>
          </header>
          <main className="plan__body">
            <h4 className="plan__h4">Find the right mortgage</h4>
            <p>
              An experience Home Lending Advisor is ready to help you explore
              your options and get prequalified.
            </p>

            <a className="plan__button">Learn more</a>
          </main>
        </div>
        <div className="plan">
          <header className="plan__header">
            <h3 className="plan__h3">Wolf Freedom</h3>
            <img className="card__images" src={dollar}></img>
          </header>
          <main className="plan__body">
            <h4 className="plan__h4">
              Earn a $200 bonus + 5% grocery store offer
            </h4>
            <p>
              Also, earn unlimited 3% cash back on dining and drugstores, and
              1.5% on all other purchases{" "}
            </p>
            <a className="plan__button">Learn more</a>
          </main>
        </div>
      </div>
    </>
  );
}
