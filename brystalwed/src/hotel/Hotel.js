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
        <h2 className="pb-0 mb-0">Booking your room</h2>
        <p className="top-1x">
          The resort has reserved reduced rate rooms for our party.
          <p className="top-1x">
            The <b>deadline</b> to book at the guaranteed reduced rate is March
            30th, 2020.
            <br />
            You have to provide a credit card number for your reservation but
            will not be charged until the date of your stay.
          </p>
        </p>
        <p className="pb-0 mb-0 larger-1x">Room Rates for wedding guests:</p>
        <table className="table table-bordered table-responsive-sm">
          <thead>
            <tr>
              <th scope="col">Martin/Schurko Wedding</th>
              <th scope="col">06/18/20</th>
              <th scope="col">06/19/20</th>
              <th scope="col">06/20/20</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Resort View King or Double</th>
              <td>$178.00</td>
              <td>$178.00</td>
              <td>$198.00</td>
            </tr>
            <tr>
              <th scope="row">Partial View Double</th>
              <td>$208.00</td>
              <td>$208.00</td>
              <td>$238.00</td>
            </tr>
            <tr>
              <th scope="row">Partial View Superior Suite King</th>
              <td>$318.00</td>
              <td>$318.00</td>
              <td>$318.00</td>
            </tr>
          </tbody>
        </table>
        <div className="bottom-1x top-1x">
          <a
            className="btn btn-info btn-lg"
            href="https://reserve.jupiterbeachresort.com/jupiterbeachresort/?requesttype=invBlockCode&code=JONSCH0619&startDate=06/18/2020&endDate=06/20/2020"
            role="button"
          >
            Book Here
          </a>
        </div>
        <p>
          <b>
            *Please note the prices displayed here and on the website include
            all taxes and resort fees - you may see a note about resort fees on
            the website - this does not apply to you as it is built into our
            room block rates.
          </b>
        </p>
        <p className="top-1x bottom-1x">
          <em className="teal">
            <b>~ Note from the thrifty bride: ~</b>
          </em>
          <br />
          If you are traveling with family or mutual friends the Partial View
          Superior Suite King is a good option to combine your stay and book
          together to save money. The Superior Suite King is a two room suite
          with a separate living room and pullout sofa. It has a connecting
          privacy door to the bedroom with one king size bed, each has its own
          private seating balcony and television with two full bathrooms.
          <br />
          *Max occupancy 5 guests.
          <br /> <br />
          The Partial View Double can also accommodate up to 4 guests.
        </p>
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
