import React from "react";

function VirtualWedding() {
  return (
    <div className="app wrapper">
      <h1 className="text-dark mb-0 text-center">Virtual Wedding</h1>
      <p className="icon-header text-center">
        -{" "}
        <span className="fa-fw">
          <i className="far fa fa-desktop" />
        </span>{" "}
        -
      </p>
      <hr className="my-4" />
      <section className="container-fluid col-12 col-md-8 pl-md-3 col-lg-8">
        <h3 className="text-center bottom-2x larger-2x">
          ~ More details Coming Soon ~
        </h3>
        <p className="larger-1x text-center">
          The virtual wedding will be hosted on Zoom, a free application you can
          download and/or use on your computer.
          <br />
          <br />
          Find out how to do that <a href="https://zoom.us/">here.</a>
          <br /> <br />
          This page will be updated with schedule, invite code, fun virtual
          wedding stuff and more soon :-)
        </p>
      </section>
    </div>
  );
}

export default VirtualWedding;
