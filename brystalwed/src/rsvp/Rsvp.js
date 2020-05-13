import React, { Component } from "react";
import ReactIframeResizer from "react-iframe-resizer-super";
import { Link } from "react-router-dom";

class Rsvp extends Component {
  render() {
    const iframeResizerOptions = {
      autoResize: true,
      checkOrigin: false,
      heightCalculationMethod: "max",
      enablePublicMethods: true
    };

    return (
      <div className="app wrapper">
        <h1 className="text-dark mb-0 text-center">RSVP</h1>
        <p className="icon-header text-center">
          -{" "}
          <span className="fa-fw">
            <i className="far fa fa-envelope-open-o" />
          </span>{" "}
          -
        </p>
        <hr className="my-4" />
        <section className="container-fluid col-12 col-md-12 pl-md-3 col-lg-10 text-left negate">
          <h4 className="text-center bottom-0x">
            <b>
              We have cleared all previous RSVP's so if you can still make it
              please &nbsp;
              <Link to="/rsvp">RSVP</Link> again!
            </b>
          </h4>
          <ReactIframeResizer
            iframeResizerOptions={iframeResizerOptions}
            src="https://brystalweddingrsvp.app.rsvpify.com/?embed=1&js=1"
          />
          <p className="text-center top-1x">
            {
              "We need to recieve your RSVP by May 10th, 2020. to ensure everything goes smoothly."
            }
            <br />
            <br />
            {"Having trouble with the form above? "}
            <br />
            {"Try refreshing this site, or"}
            <a href="http://brystalweddingrsvp.rsvpify.com">
              {" click this link to RSVP"}
            </a>
            {"."}
            <br />
            <br />
            {"If you have any issues with the RSVP process, please "}
            <a
              href="mailto:brystalwedding@gmail.com?Subject=Wedding Help"
              target="_top"
            >
              email us
            </a>
            {"!"}
          </p>
        </section>
      </div>
    );
  }
}

export default Rsvp;
