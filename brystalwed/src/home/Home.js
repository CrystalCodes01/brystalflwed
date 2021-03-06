import React from "react";
import TimerExtension from "../timer/Timer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="app wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div class="alert alert-info" role="alert">
              <h3>Updates:</h3>
              Due to COVID-19 all information is being updated. Please note the
              change in date - the wedding will be held on <b>Saturday</b> June
              20th, 2020.
            </div>
            <div className="jumbotron jumbotron-fluid">
              <div className="container">
                <h1 className="display-4 text-center">Bryan and Crystal</h1>
                <p className="lead text-center subtext-with-animation">
                  <span>June 20th,</span> <span> 2020</span>
                </p>
              </div>
            </div>
            <hr className="my-4" />
            <section className="container-fluid col-12 col-md-8 pl-md-3 col-lg-8">
              <p className="mb-4 larger-2x text-center">
                We are excited to share our wedding day with you on{" "}
                <b>June 20th, 2020</b>
                <br />
                in Jupiter Florida.
              </p>
              <div>
                <p className="text-center top-1x bottom-1x">
                  <a
                    className="larger-2x text-center coral noUnderline"
                    href="http://pub15.bravenet.com/guestbook/1237863242/"
                  >
                    Please sign our Guestbook by clicking here!
                  </a>
                </p>
              </div>
              <br />
              <p className="larger-1x">
                We've created this website as a convenient way to share all the
                information and details with you leading up to the wedding. We
                are so excited to spend the best day of our lives with the best
                people in the world.
                <br />
                <br />
                We hope you can join us for our lovely and laid back event, but
                please know that during this time we understand completely if
                you cannot.
                <br />
                <br />
                We will be setting up a virtual attendance and surprise for the
                guests that plan to attend virtually.
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
