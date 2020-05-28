import React from "react";

function Hotel() {
  return (
    <div className="app wrapper">
      <h1 className="text-dark mb-0 text-center">Hotel & Travel</h1>
      <p className="icon-header text-center">
        -{" "}
        <span className="fa-fw">
          <i className="far fa-paper-plane" />
        </span>{" "}
        -
      </p>
      <hr className="my-4" />
      <section className="container-fluid col-12 col-md-8 pl-md-3 col-lg-8 text-left">
        <img
          src="https://raw.githubusercontent.com/CrystalCodes01/brystalflwed/master/brystalwed/public/resort2.jpg"
          alt="Jupiter Resort and Spa"
          className="img-fluid rounded mb-4"
        />
        <h2 className="skinny text-uppercase sienna text-center">
          <a href="https://www.jupiterbeachresort.com/">
            Jupiter Resort and Spa
          </a>
        </h2>
        <p className="bottom-out">
          We are having our wedding at the Jupiter Resort and Spa in Jupiter
          Florida.
          <br />
          The resort has everything you need in one spot.
          <br />
          <br />
          <ul>
            <li>
              Free Parking for hotel guests
              <em> (*optional valet if desired)</em>
            </li>
            <li>2 Restaurants</li>
            <li>Pool & Poolside Bar with Live Music</li>
            <li>Private beach access for your entire stay</li>
            <li>Spa</li>
          </ul>
          <br />
        </p>
        <h5>Click the address below for directions to the venue:</h5>
        <a className="larger-1x" href="https://goo.gl/maps/Hvfbp1ERFG6NLtAeA">
          <p className="location pb-0 mb-0">Jupiter Resort and Spa</p>
          <p>
            5 N Hwy A1A
            <br />
            Jupiter, FL. 33477
            <br />
          </p>
        </a>
        <hr className="my-4" />
        <img
          src="https://raw.githubusercontent.com/CrystalCodes01/brystalflwed/master/brystalwed/public/room.jpg"
          alt="Jupiter Resort Rooms"
          className="img-fluid rounded mb-1"
        />
      </section>
    </div>
  );
}

export default Hotel;
