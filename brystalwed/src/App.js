import React from "react";
import "./App.scss";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";
import Hotel from "./hotel/Hotel";
import Itinerary from "./itinerary/Itinerary";
import Menu from "./menu/Menu";
import Rsvp from "./rsvp/Rsvp";

function App() {
  return (
    <HashRouter basename="/">
      <div>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <Link to="/" className="navbar-brand">
            B <i className="far fa-heart"></i> C - 6.19.20
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar5"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="navbar-collapse collapse justify-content-stretch"
            id="navbar5"
          >
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/rsvp">
                  RSVP
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/menu">
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/itinerary">
                  Itinerary
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/hotel">
                  Hotel
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/brystalflwed" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/rsvp" component={Rsvp} />
          <Route path="/hotel" component={Hotel} />
          <Route path="/itinerary" component={Itinerary} />
          <Route path="/menu" component={Menu} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
