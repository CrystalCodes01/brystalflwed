import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";
import Banner from "./banner/Banner";
import Hotel from "./hotel/Hotel";
import Itinerary from "./itinerary/Itinerary";
import Menu from "./menu/Menu";
import Rsvp from "./rsvp/Rsvp";

function App() {
  return (
    <Router>
      <div>
        <nav class="navbar navbar-expand-md navbar-light bg-light">
          <a href="/" class="navbar-brand">
            B <i class="far fa-heart"></i> C - 6.19.20
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar5"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="navbar-collapse collapse justify-content-stretch"
            id="navbar5"
          >
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link class="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/rsvp">
                  RSVP
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/menu">
                  Menu
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/itinerary">
                  Itinerary
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/hotel">
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
    </Router>
  );
}

export default App;
