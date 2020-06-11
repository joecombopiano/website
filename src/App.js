import React from "react";
import {
  HashRouter,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import logowhite from "./logo-white.svg";
import ieLogo from "./ie-logo.png";
import "./App.css";
import About from "./About";
import Contact from "./Contact";
import ContactBar from "./ContactBar";
import Services from "./Services";

function App() {
  console.log('click');   
  return (
    <HashRouter>
      <div className="App">
        <div className="BodySplit">
          <div className="LogoArea">
            <div className="IE-logo">
              <img src={ieLogo} alt="logo" />
            </div>
            <object
              className="Logo-svg"
              type="image/svg+xml"
              data={logowhite}
              aria-label="combo consulting logo" ></object>

            <div className="bottom-container">
              <a href="mailto:joe@combo.consulting" className="email">
                Contact me
              </a>
            </div>
          </div>
          <div className="ContentArea">
            <nav className="App-header">
              <div className="NavBar">
              <NavLink to="" className={"NavLink"} activeClassName={"Selected"} exact >
                  about
                </NavLink>
                <NavLink to="services" className={"NavLink"} activeClassName={"Selected"}>
                  services
                </NavLink>
                <NavLink to="contact" className={"NavLink"} activeClassName={"Selected"}>
                  contact
                </NavLink> 
              </div>
            </nav>
            <Switch>
               <Route  path="/" exact >
                <About />
              </Route>
              <Route path="/services">
                <Services />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/home">
                <About />
              </Route>
              <Route>
                <div>
                <h1>Nope. Not a site.</h1>
                <iframe title="not found gif" src='https://gfycat.com/ifr/FlawlessFamiliarBalloonfish' frameborder='0' scrolling='no' allowfullscreen width='640' height='404'></iframe>
                </div>
              </Route>
            </Switch>
            <ContactBar />
          </div>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
