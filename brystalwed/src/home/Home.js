import React from "react";
import TimerExtension from "../timer/Timer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="app wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="jumbotron jumbotron-fluid">
              <div className="container">
                <h1 className="display-4 text-center">Bryan and Crystal</h1>
                <p className="lead text-center subtext-with-animation">
                  <span>June</span> <span>19th, 2020</span>
                </p>
              </div>
            </div>
            <hr className="my-4" />
            <section className="container-fluid col-12 col-md-8 pl-md-3 col-lg-8">
              <p className="mb-4 larger-2x text-center">
                We are excited to share our wedding day with you on June 19th,
                2020 in Jupiter Florida.
                <br />
              </p>
              <p className="larger-1x">
                We've created this website as a convenient way to share all the
                information and details with you leading up to the wedding.
                <br />
                <br />
                We are so excited to spend the best day of our lives with the
                best people in the world. Have a look around and don't forget to
                <Link to="/rsvp">RSVP</Link>
                <br />
                <br />
                We hope you can join us for our lovely and laid back event on
                the beach.
              </p>
              <TimerExtension />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
