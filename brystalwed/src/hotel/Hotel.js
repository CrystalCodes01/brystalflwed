import React from "react";

function Hotel() {
  return (
    <div className="app">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h1 class="text-dark mb-0 text-center">Hotel & Travel</h1>
            <p class="icon-plane text-center">
              -
              <span class="fa-layers fa-fw">
                <i class="far fa-paper-plane" />
              </span>
              -
            </p>
            <hr class="my-4" />
            <section class="container col-12 col-md-8 pl-md-3 col-lg-6 text-left">
              <img
                src="https://raw.githubusercontent.com/isadoracreative/williams-colmenares-wedding/master/images/halibut-point-rockport.jpg"
                alt="Halibut Point State Park"
                class="img-fluid rounded mb-4"
              />
              <h2 class="skinny text-uppercase sienna">
                Jupiter Resort and Spa
              </h2>
              <p>
                Talk about venue here.
                <br />
                Click the address below for directions to the venue:
              </p>
              <a href="https://goo.gl/maps/mAhjncP5QY62" target="_blank">
                <p class="location pb-0 mb-0 teal">Jupiter Resort and Spa</p>
                <p class="text-dark">
                  address 1
                  <br />
                  address 2
                  <br />
                </p>
              </a>
              <div id="map" class="rounded mb-4"></div>
              <p class="location pb-0 mb-0 teal">Booking your room</p>
              <p>
                Talk about how to book room - link to room.
                <em class="font-italic">make a note about deadline to book</em>
              </p>
              <p class="dotted-divider light-navy mb-5">....................</p>
              <p class="location pb-0 mb-0 teal">Optional Section and Image</p>
              <p>Lorem</p>
              <div>
                <img
                  src="https://raw.githubusercontent.com/isadoracreative/williams-colmenares-wedding/master/images/schooner-festival-mark-krasnow.jpg"
                  alt="Gloucester Schooner Festival, Photo Credit: Mark Krasnow"
                  class="img-fluid rounded mb-4"
                  data-toggle="tooltip"
                  title="Photo Credit: Mark Krasnow"
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hotel;
