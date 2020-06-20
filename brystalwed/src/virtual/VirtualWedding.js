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
        <div id="countDown" className="timer-wrapper">
          <p className="text-center top-1x bottom-1x">
            <a
              className="larger-3x text-center coral noUnderline"
              href="http://pub15.bravenet.com/guestbook/1237863242/"
            >
              Please sign our Guestbook by clicking here!
            </a>
          </p>
        </div>
        <br />
        <p className="larger-1x text-center">
          The virtual wedding will be hosted on Zoom, a free application you can
          download and/or use on your computer.
          <br />
          Find out how to do that <a href="https://zoom.us/">here.</a>
        </p>
        <h3 className="text-center top-2x">Virtual Wedding Itinerary</h3>
        <table className="table table-bordered table-responsive-sm table-itinerary">
          <thead>
            <tr>
              <th scope="col" className="medium-expand">
                Date
              </th>
              <th scope="col">Virtual Wedding Schedule</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Saturday June 20th</th>
              <td>
                <b>Wedding Day!</b>
                <br />
                <br />
                <b>6:00pm - 6:40pm</b> - Begin Zoom session. Open and casual for
                chatting, signing virtual wedding book, and other online wedding
                related activities.
                <br />
                <br />
                <b>6:45pm - 7:15pm</b> - Wedding Ceremony. Coordinator will mute
                all noise except the ceremony to allow for everyone to hear.
                <br />
                <br />
                <b>7:15pm - 7:30pm</b> - Bride and Groom greet and talk to
                guests on Zoom.
                <br />
                <br />
                <b>7:30pm - 8pm</b> - Zoom intermission.  Participants can stay
                online and chat or log off.  Camera will be turned off during
                this time
                <br />
                <br />
                <b>8pm - 8:30pm</b> - Speeches will take place on zoom - come if
                you like!
                <br />
                <br />
                <b>8:30pm</b> - End zoom session - Say goodbye to remaining
                guests.
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default VirtualWedding;
