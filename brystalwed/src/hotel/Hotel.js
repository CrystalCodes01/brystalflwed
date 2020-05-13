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
      <section className="container-fluid col-12 col-md-8 pl-md-3 col-lg-8 text-center">
        <img
          src="https://raw.githubusercontent.com/CrystalCodes01/brystalflwed/master/brystalwed/public/westpalmbeach-pool.jpg"
          alt="Hilton West Palm Beach"
          className="img-fluid rounded mb-4"
        />
        <h2 className="skinny text-uppercase sienna text-center">
          <a href="https://www3.hilton.com/en/hotels/florida/hilton-west-palm-beach-PBIWPHH/index.html?SEO_id=GMB-HI-PBIWPHH">
            Hilton West Palm Beach
          </a>
        </h2>
        <p className="bottom-out">
          We are having our wedding in West Palm Beach Florida and have spoken
          with the Hilton Hotel in regards to our wedding changes. We will be
          staying at the Hilton all weekend, and having the Ceremony and
          reception at The Backyard Bar which is only 1/2 mile away and one of
          our favorite spots in South Flordia.
          <br />
          <br />
        </p>
        <h5>Click the address below for directions to the venue:</h5>
        <a className="larger-1x" href="https://goo.gl/maps/eoCFhXnfr56xTUeh6">
          <p className="location pb-0 mb-0">Hilton West Palm Beach</p>
          <p>
            600 Okeechobee Blvd
            <br />
            West Palm Beach, FL 33401
            <br />
          </p>
        </a>
        <hr className="my-4" />
        <h2 className="pb-0 mb-0">Booking your room</h2>
        <p className="top-1x">
          We have spoken with the resort and they have great rates for this
          weekend, call or book your room online at your leisure. We are not
          doing a room block due to rates already meeting expectations.
        </p>
        <div className="bottom-1x top-2x">
          <a
            className="btn btn-info btn-lg"
            href="https://www3.hilton.com/en/hotels/florida/hilton-west-palm-beach-PBIWPHH/index.html?SEO_id=GMB-HI-PBIWPHH"
            role="button"
          >
            Book Here
          </a>
        </div>
      </section>
    </div>
  );
}

export default Hotel;
