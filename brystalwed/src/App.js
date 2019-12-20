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
        <nav class="navbar navbar-expand-lg navbar-dark bg-light">
          <div class="navbar-collapse collapse w-100 dual-collapse2 order-1 order-md-0">
            <ul class="navbar-nav ml-auto text-center">
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
            </ul>
          </div>
          <div class="mx-auto my-2 order-0 order-md-1 position-relative text-center">
            <span class="mx-auto">
              B <i class="far fa-heart"></i> C - 6.19.20
            </span>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target=".dual-collapse2"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
          <div class="navbar-collapse collapse w-100 dual-collapse2 order-2 order-md-2">
            <ul class="navbar-nav mr-auto text-center">
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
