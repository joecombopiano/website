import React from "react";
import joe from "./joe.jpg";
import "./App.css";

const About = () => {
  return (
    <div>
      <div className="Caption">
        <h1>Hi. I'm Joe Combopiano.</h1>{" "}
        <img className="Joe" src={joe} alt="Family" />
      </div>
      <p>
        With over 10 years of industry experience as a software engineer,
        product manager, solutions engineer, and consultant. Plus, having worked
        at top companies such as Facebook, Stripe, and Microsoft -{" "}
        <u>I'm here to fill a void and help your business succeed.</u> <br />{" "}
      </p>
      <p></p>
      <h2>Some companies I've worked with</h2>
      <div className="Companies">
        <div>
          <h3>Facebook Integrations</h3>
          <div className="Company">Albertsons</div>
          <div className="Company">Nordstrom</div>
          <div className="Company">Macy's</div>
          <div className="Company">LiveRamp</div>
          <div className="Company">IRI</div>
          <div className="Company">Square</div>
          <div className="Company">Quotient</div>
        </div>
        <div>
          <h3>App Dev & Analytics</h3>
          <div className="Company">Home Depot</div>
          <div className="Company">Oportun</div>
          <div className="Company">XL Group</div>
        </div>
        <div>
          <h3>CRM Integrations</h3>

          <div className="Company">Harley-Davidson</div>
          <div className="Company">JP Morgan Chase</div>
          <div className="Company">Microsoft</div>
        </div>
      </div>
      <p></p>
    </div>
  );
};

export default About;
