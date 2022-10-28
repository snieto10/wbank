import React from "react";
import testi from "../images/testimonial.jpg";

export default function Testimonial(props) {
  return (
    <>
      <div className="decoration">
        <div className="container">
          <h1 style={{ textAlign: "center", marginTop: "4rem" }}>
            What are our customers saying
          </h1>
          <div className="center">
            <div className="testimonial__grid">
              <div>
                <img
                  src={testi}
                  className="testimonial__guy"
                  alt="Happy Customer"
                />
              </div>
              <div className="testimonial__text">
                "One word, convenient. I love using Wolf bank because they make
                banking easy. I'm able to deposit checks from the comfort of my
                home and I love how competitive they're interest rate are
                compared to other banks. they're the easiest and highest saving
                account we have."
                <p
                  style={{
                    fontWeight: "bold",
                    color: "blue",
                    marginTop: "1rem",
                  }}
                >
                  Jose Lebrun, California
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
