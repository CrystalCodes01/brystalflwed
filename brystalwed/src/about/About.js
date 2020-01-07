import React from "react";

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
      <section className="container-fluid col-12 col-md-8 pl-md-3 col-lg-8">
        <h3 className="fancy-font text-center bottom-2x larger-3x">
          This particular love story began in South Florida, it was the year
          2018....
        </h3>
        <p className="larger-1x">
          Bryan, an exotic Canadian freshly landed in the USA was trying to make
          new friends and work on his tan.
          <br /> <br />
          Crystal was a software developer living in Fort Lauderdale, focusing
          mostly on her career and not working on her tan.
          <br />
          <br />
          Bryan and Crystal met one evening in Boca Raton over dinner. They hit
          it off immediately and never looked back. On date three they were
          already in the ocean diving to see coral, sharks and turtles. Over the
          next two years they grew as a couple and had many more experiences
          large and small.
          <br />
          <br />
          Crystal finally got a passport and they traveled to South America.
          Bryan finally got to try fried catfish, and so it went. A few months
          ago, Bryan took Crystal back to the spot they went diving on their
          third date. He asked her to marry him along the shoreline that they
          dove many times before. She said yes, after figuring out that no one
          was actually drowning in the ocean. He only told her that to get her
          to look away so he could get on one knee.
          <br />
          <br />
          It was all very romantic.
        </p>
        <hr />
        <h3 className="bottom-2x top-2x text-center">
          An Oscar nominated film about all of this.
        </h3>
        <div className="embed-responsive embed-responsive-16by9 bottom-2x">
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
