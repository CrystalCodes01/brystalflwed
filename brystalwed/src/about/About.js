import React from "react";
import Banner from "../banner/Banner";

function About() {
  return (
    <div className="app wrapper">
      <h1 className="text-dark mb-0 text-center">About Us</h1>
      <p className="icon-header text-center">
        -{" "}
        <span className="fa-fw">
          <i className="far fa fa-female" /> <i className="far fa fa-male" />
        </span>{" "}
        -
      </p>
      <hr className="my-4" />
      <section className="container-fluid col-12 col-md-8 pl-md-3 col-lg-6 text-left">
        {
          // <div className="col-12">
          //   <Banner />
          // </div>
        }
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
      </section>
    </div>
  );
}

export default About;
