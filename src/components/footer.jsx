import React from "react";
import { useState } from "react";
import chevron from "../images/chevron.png";

export default function Footer(props) {
  const [about, setAbout] = useState(false);

  let handleClick = () => {
    about === false ? setAbout(true) : setAbout(false);
  };

  let footer1 = about === false ? "footer__list footer__off" : "footer__list";

  let footerIcon =
    about === false ? "footer__icon" : "footer__icon footer__icon2";

  return (
    <>
      <div className="container">
        <footer className="footer">
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
          <img onClick={handleClick} src={chevron} className={footerIcon}></img>
        </footer>
        <footer className={footer1}>
          <ul className="footer__ul">
            <li>Our Company</li>
            <li>Careers</li>
            <li>Investors Relations</li>
            <li>Supliers</li>
          </ul>
        </footer>
      </div>
    </>
  );
}
