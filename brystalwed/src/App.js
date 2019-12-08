import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./about/About";
import Home from "./home/Home";
import Hotel from "./hotel/Hotel";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/home">
            Brystal
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/home">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/hotel">Hotel</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/hotel">
            <Hotel />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
