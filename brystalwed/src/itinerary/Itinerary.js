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
              <td>
                Hang with us at the pool, have dinner and cocktails at the
                hotel. Have fun!
              </td>
            </tr>
            <tr>
              <th scope="row">Saturday June 20th</th>
              <td>
                <b>Wedding Day!</b>
                <br />
                <br />
                <b>5pm</b> - Ceremony starts at The Backyard Bar it is an
                outdoor cermeony in their lovely garden. Please come 30 minutes
                early to get seated.
                <br />
                <br />
                <b>7pm</b> - Cocktails & Dinner. Each dinner will be individual,
                not buffet style. The bride will reach out to you about choices.
                <br />
                <br />
                <b>8pm-12am</b> - Wedding Reception! Dancing, drinks, & cake
                served individually.{" "}
                <em>*Champagne and wine courtesy of bride and groom.</em>
              </td>
            </tr>
            <tr>
              <th scope="row">Sunday June 21st</th>
              <td>Goodbyes & Departure of Bride and Groom</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Itinerary;
