import React from "react";
import "./App.scss";
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";
import Hotel from "./hotel/Hotel";
import Itinerary from "./itinerary/Itinerary";
import Rsvp from "./rsvp/Rsvp";
import VirtualWedding from "./virtual/VirtualWedding";

function App() {
  return (
    <HashRouter basename="/">
      <div>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <Link to="/" className="navbar-brand">
            B & C - 6.19.20
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
                <Link className="nav-link" to="/itinerary">
                  Itinerary
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/hotel">
                  Hotel
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/virtualwedding">
                  Virtual Wedding
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/brystalflwed" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/rsvp" component={Rsvp} />
            <Route path="/hotel" component={Hotel} />
            <Route path="/itinerary" component={Itinerary} />
            <Route path="/virtualwedding" component={VirtualWedding} />
          </Switch>
        </main>

        <footer>
          <div className="container text-center">
            <hr />
            <h5 className="text-uppercase">B & C</h5>
            <p>
              <span class="fa-stack fa-lg">
                <i class="fa fa-heart fa-stack-1x"></i>
                <i class="fa fa-heart fa-stack-1x fa-inverse"></i>
              </span>
              +
              <span class="fa-stack fa-lg">
                <i class="fa fa-heart fa-stack-1x"></i>
                <i class="fa fa-heart fa-stack-1x fa-inverse"></i>
              </span>
            </p>
          </div>
          <div className="container text-center">
            <div className="nav justify-content-center text-dark">
              <p>
                Questions? Shoot us an{" "}
                <a
                  href="mailto:brystalwedding@gmail.com?Subject=Wedding Help"
                  target="_top"
                >
                  email&nbsp;
                </a>
                or reach out via <a href="facebook.com"> social media</a>
              </p>
            </div>
            <section id="copyright" class="container text-center mb-3">
              &copy; 2020 C.Maria
            </section>
          </div>
        </footer>
      </div>
    </HashRouter>
  );
}

export default App;
