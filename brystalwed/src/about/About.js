import React from "react";
import Banner from "../banner/Banner";

function About() {
  return (
    <div className="app">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h1>About Us</h1>
          </div>
          {
            // <div className="col-12">
            //   <Banner />
            // </div>
          }
          <div className="container-fluid col-12 col-md-8 pl-md-3 col-lg-8 text-left">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                title="One Summer In Florida"
                src="https://www.youtube.com/embed/GVmiV_LGGtY"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
