import React from "react";
import "./App.scss";
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";
import Hotel from "./hotel/Hotel";
import Itinerary from "./itinerary/Itinerary";
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

        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/brystalflwed" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/rsvp" component={Rsvp} />
            <Route path="/hotel" component={Hotel} />
            <Route path="/itinerary" component={Itinerary} />
          </Switch>
        </main>

        <footer>
          <div className="container text-center">
            <hr />
            <h5 className="text-uppercase">B & C</h5>
            <p>
              <span className="fa-stack fa-fw">
                <i className="fas fa-heart fa-stack-1x" />
                <i className="far fa-heart fa-stack-2x" />
              </span>
              +
              <span className="fa-stack fa-fw">
                <i className="fas fa-heart fa-stack-1x" />
                <i className="far fa-heart fa-stack-2x" />
              </span>
            </p>
          </div>
          <div className="container text-center">
            <div className="nav justify-content-center text-dark">
              <p>
                Questions? Shoot us an{" "}
                <a href="brystalwedding@gmail.com">email</a> or reach out via{" "}
                <a href="facebook.com">social media</a>
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
