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
        <p>
          This particular love story began in South Florida in early 2018.
          <br />
          Bryan was a freshly landed Canadian in the USA trying to make friends
          and work on his tan.
          <br />
          Crystal was a software developer living in Fort Lauderdale, focusing
          mostly on her career and not working on her tan.
          <br />
          Bryan and Crystal met one evening in Boca Raton over dinner. They hit
          it off immediately and never looked back. On date three they were
          already in the ocean diving to see coral, sharks and turtles. Over the
          next two years they grew as a couple and had many more experiences
          large and small. Crystal finally got a passport and they traveled to
          South America. Bryan finally got to try fried catfish, and so it went.
          A few months ago, Bryan took Crystal back to the spot they went diving
          on their thrid date. He asked her to marry him along the shoreline
          that they dove many times before. She said yes, after figuring out
          that no one was actually drowning in the ocean, he only told her that
          to get her to look away to get on one knee.
          <br />
          It was all very romantic.
        </p>
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
