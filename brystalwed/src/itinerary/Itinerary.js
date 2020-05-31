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
      <section className="container-fluid col-12 col-md-10 pl-md-3 col-lg-8 text-left bottom-2x">
        <table className="table table-bordered table-responsive-sm table-itinerary">
          <thead>
            <tr>
              <th scope="col" className="medium-expand">
                Date
              </th>
              <th scope="col">Event</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Friday June 19th</th>
              <td>Bride and Groom arrive at resort</td>
            </tr>
            <tr>
              <th scope="row">Saturday June 20th</th>
              <td>
                <b>Wedding Day! (all events at Jupiter Resort and Spa)</b>
                <br />
                <br />
                <b>6:30pm - 7:30pm</b> - Cocktail hour and Ceremony. Located on
                the veranda. Please come 30 minutes early to get seated.
                <br />
                <br />
                <b>7:30pm - 8:30pm</b> - Dinner on the veranda.
                <br />
                <br />
                <b>8:30pm - 11:30pm</b> - Wedding Reception. Located in the
                Marlin room and outside Terrace. Includes speeches, drinks and
                dancing.
              </td>
            </tr>
            <tr>
              <th scope="row">Sunday June 21st</th>
              <td>Goodbyes & Departure of Bride and Groom</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="container-fluid col-12 col-md-8 pl-md-3 col-lg-8 text-left bottom-2x">
        <h4>FAQ's</h4>
        <hr />
        <h5>Wedding Dinner:</h5>
        <p>
          When you RSVP you will pick your dinner option.
          <br />
          Menu Options:
          <ul>
            <li>Miso Glazed Salmon, Ginger Orange Hollandaise</li>
            <li>Rosemary Pan Seared Chicken, White Wine Peppercorn Sauce</li>
            <li>New York Strip Sirloin of Beef, Red Wine Demi-Glace</li>
            <li>Vegetarian Dish</li>
            <li>
              All Entrees are Served with Garlic Whipped Potato & Seasonal
              Vegetable
            </li>
          </ul>
        </p>
        <h5 className="top-2x">Wedding Drinks:</h5>
        <p>Cocktail hour and reception will be open bar.</p>
        <h5 className="top-2x">Veranda and Marlin room:</h5>
        <p>
          Don't worry, we will make sure we send everyone details on these areas
          of the resort. The hotel concierge and front desk are always available
          to point you in the right direction as well.
        </p>
      </section>
    </div>
  );
}

export default Itinerary;
