import React from "react";
import TimerExtension from "../timer/Timer";

function Home() {
  return (
    <div className="app wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="jumbotron jumbotron-fluid">
              <div className="container">
                <h1 className="display-4 text-center">Bryan and Crystal</h1>
                <p className="lead text-center">06.19.2020</p>
              </div>
            </div>
            <hr className="my-4" />
            <section className="container-fluid col-12 col-md-8 pl-md-3 col-lg-8">
              <p className="mb-4 larger-2x text-center">
                Hello people that we love!
              </p>
              <p className="larger-1x">
                We are excited to share our wedding day with you on June 19th,
                2020 in Jupiter Florida.
                <br />
                <br />
                Please join us for our lovely and laid back event on the beach.
                Everything you need to know for the wedding weekend is here, on
                this lovely website someone very talented made.
                <br />
                <br />
                We are so excited to spend the best day of our lives with the
                best people in the world.
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
