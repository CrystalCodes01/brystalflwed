import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./about/About";
import Home from "./home/Home";
import Hotel from "./hotel/Hotel";
import Itinerary from "./itinerary/Itinerary";
import Rsvp from "./rsvp/Rsvp";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/home">
            B&C - 6.19.20
          </Link>
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
              <li className="nav-item">
                <Link to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/rsvp">RSVP</Link>
              </li>
              <li className="nav-item">
                <Link to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/hotel">Hotel</Link>
              </li>
              <li className="nav-item">
                <Link to="/itinerary">Itinerary</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route exact path="/brystalflwed" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/rsvp" component={Rsvp} />
          <Route path="/hotel" component={Hotel} />
          <Route path="/itinerary" component={Itinerary} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
