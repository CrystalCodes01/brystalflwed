import React from "react";
import brystal from "./brystal.jpg";

function About() {
  return (
    <div className="app">
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={brystal} className="img-fluid" alt="Bryan and Crystal" />
          </div>
        </div>
      </div>
    </div>
    // <a
    //   className="App-link"
    //   href="https://reactjs.org"
    //   target="_blank"
    //   rel="noopener noreferrer"
    // >
    //   Learn React
    // </a>
  );
}

export default About;
