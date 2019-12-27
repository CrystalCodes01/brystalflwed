import React from "react";

function Itinerary() {
  return (
    <div className="app wrapper">
      <h1 className="text-dark mb-0 text-center">Itinerary</h1>
      <p className="icon-header text-center">
        -{" "}
        <span className="fa-fw">
          <i className="far fa fa-hourglass-half" />
        </span>{" "}
        -
      </p>
      <hr className="my-4" />
      <section className="container-fluid col-12 col-md-8 pl-md-3 col-lg-8 text-left">
        <p>
          Schedule:
          <br />
          Thursday - June 18th Bride & Groom Arrive at resort Casual dinner at
          8pm for anyone in town (*dinner @ resort)
          <br />
          Friday- June 19th 6:30pm Ceremony 7-8pm Cocktail & hors d'oeuvres Hour
          8-12pm Reception
          <br />
          Saturday - June 20th Brunch - 12pm @ Resort (*more info to come)
          Dinner - 7:30pm (*off site dinner possible more info to come)
          <br />
          Sunday - June 21th Goodbyes & Departure for bride and groom
        </p>
      </section>
    </div>
  );
}

export default Itinerary;
