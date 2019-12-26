import React from "react";
import TimerExtension from "../timer/Timer";

function Home() {
  return (
    <div className="app">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h1 className="text-center">Bryan and Crystal</h1>
            <h3 className="text-center">06.19.2020</h3>
            <TimerExtension />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
