import React from "react";
import cell from "../images/cellphone.jpg";
import cell2 from "../images/cellphone2.jpg";
import people from "../images/people.jpg";

export default function Hero() {
  return (
    <>
      <div className="heroA">
        <div className="container">
          <div className="hero">
            <div className="title">
              <h1 id="hero__h1">Use WolfBank App to do all your trasactions</h1>
            </div>
            <div className="hero__content">
              <div className="hero__picture">
                <img className="hero__image" src={cell} alt="" />
              </div>
              <div className="hero__content2">
                <div className="hero__text">
                  <p>
                    Request a credit card, deposit checks, make transfers. Now
                    you can do all your banking from your home.
                  </p>
                </div>
                <div className="hero__button">
                  <a href="#" className="hero__btn">
                    Continue
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="hero">
            <div className="title">
              <h1>You can stay ahead of scammers</h1>
            </div>
            <div className="hero__content">
              <div className="hero__content2">
                <div className="hero__text">
                  <p>Explore our guide to help you navigate away from fraud</p>
                </div>
                <div className="hero__button">
                  <a href="#" className="hero__btn">
                    Continue
                  </a>
                </div>
              </div>
              <div className="hero__picture">
                <img className="hero__image" src={people} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="hero">
            <div className="title">
              <h1>Your free investment consultation is waiting</h1>
            </div>
            <div className="hero__content">
              <div className="hero__picture">
                <img className="hero__image" src={cell2} alt="" />
              </div>
              <div className="hero__content2">
                <div className="hero__text">
                  <p>
                    You're invited to set up a call with a Wolf Bank Advisor.
                    See how personalized advice can help your investment goals
                    on track.
                  </p>
                </div>
                <div className="hero__button">
                  <a href="#" className="hero__btn">
                    Continue
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="heroB">
        <div className="container">
          <div className="hero">
            <div className="hero__content">
              <div className="hero__picture">
                <img className="hero__image diff" src={cell} alt="" />
              </div>
              <div className="hero__content2">
                <div className="title">
                  <h1>Use WolfBank App to do all your trasactions</h1>
                </div>
                <div className="hero__text">
                  <p>
                    Request a credit card, deposit checks, make transfers. Now
                    you can do all your banking from your home.
                  </p>
                </div>
                <div className="hero__button">
                  <a href="#" className="hero__btn">
                    Continue
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="hero">
            <div className="hero__content">
              <div className="hero__content2">
                <div className="title">
                  <h1>You can stay ahead of scammers</h1>
                </div>
                <div className="hero__text">
                  <p>Explore our guide to help you navigate away from fraud</p>
                </div>
                <div className="hero__button">
                  <a href="#" className="hero__btn">
                    Continue
                  </a>
                </div>
              </div>
              <div className="hero__picture">
                <img className="hero__image" src={people} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="hero">
            <div className="hero__content">
              <div className="hero__picture">
                <img className="hero__image" src={cell2} alt="" />
              </div>
              <div className="hero__content2">
                <div className="title">
                  <h1>Your free investment consultation is waiting</h1>
                </div>
                <div className="hero__text">
                  <p>
                    You're invited to set up a call with a Wolf Bank Advisor.
                    See how personalized advice can help your investment goals
                    on track.
                  </p>
                </div>
                <div className="hero__button">
                  <a href="#" className="hero__btn">
                    Continue
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
