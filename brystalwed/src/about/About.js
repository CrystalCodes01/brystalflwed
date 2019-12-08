import React from "react";

function About() {
  return (
    <div className="app">
      <header className="header">
        <h1>Bryan and Crystals Wedding</h1>
      </header>

      <div class="container">
        <div class="row">
          <div class="col">
            <img
              src="./brystal.jpg"
              className="img-fluid"
              alt="Bryan and Crystal"
            />
          </div>

          <div class="col">
            <iframe
              title="View of Resort"
              src="https://www.google.com/maps/embed?pb=!4v1575765343507!6m8!1m7!1sBMG48F_7bnCSLWxAIYdBHw!2m2!1d26.93430390929882!2d-80.06897447890317!3f303.0576474058768!4f0.6153406436869773!5f0.7820865974627469"
              width="600"
              height="450"
              frameborder="0"
              allowfullscreen=""
            />
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
