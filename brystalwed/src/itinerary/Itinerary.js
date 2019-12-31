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
          Thursday - June 18th
          <br />
          Bride & Groom Arrive at resort
          <br />
          Bride and Groom bachelor and bachelorette outings in the evening
          <br />
          Friday - June 19th
          <br />
          6:30pm Ceremony
          <br />
          7-8pm Cocktail & hors d'oeuvres hour
          <br />
          8-12pm Reception
          <br />
          Saturday - June 20th
          <br />
          Brunch - 12pm @ Resort (*more info to come)
          <br />
          Dinner - 7:30pm (*off site dinner possible more info to come)
          <br />
          Sunday - June 21th
          <br />
          Goodbyes & Departure for bride and groom
        </p>
        <p>
          Menu Options:
          <ul>
            <li>Miso Glazed Salmon, Ginger Orange Hollandaise</li>
            <li>Rosemary Pan Seared Chicken, White Wine Peppercorn Sauce</li>
            <li>New York Strip Sirloin of Beef, Red Wine Demi-Glace</li>
            <li>
              All Entrees are Served with Garlic Whipped Potato & Seasonal
              Vegetable
            </li>
          </ul>
        </p>
      </section>
    </div>
  );
}

export default Itinerary;
