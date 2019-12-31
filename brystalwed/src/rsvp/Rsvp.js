import React, { Component } from "react";
import ReactIframeResizer from "react-iframe-resizer-super";

class Rsvp extends Component {
  render() {
    const iframeResizerOptions = {
      autoResize: true,
      checkOrigin: false,
      heightCalculationMethod: "max",
      enablePublicMethods: true
    };

    return (
      <div>
        <h2>RSVP</h2>
        <ReactIframeResizer
          iframeResizerOptions={iframeResizerOptions}
          src="https://brystalwedding.app.rsvpify.com/?embed=1&js=1"
        />
        <p>
          <em>
            {"Having trouble with the form above? "}
            <br />
            {"Try refreshing this site, or "}
            <a href="#">{"going to RSVPify directly"}</a>
            {"."}
            <br />
            <br />
            {"If you have any issues with the RSVP form, please: "}
            <a href="brystalwedding@gmail.com">let us know</a>
            {"!"}
          </em>
        </p>
      </div>
    );
  }
}

export default Rsvp;
