import React, { Component } from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  componentDidMount() {
    this.getTimeDifference(this.props.eventDate);
    setInterval(() => this.getTimeDifference(this.props.eventDate), 1000);
  }

  leadingZero(num) {
    return num < 10 && num > 0 ? "0" + num : num;
  }

  getTimeDifference(eventDate) {
    const time = Date.parse(eventDate) - Date.parse(new Date());
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    this.setState({ days, hours, minutes, seconds });
  }

  render() {
    return (
      <div id="countDown" className="timer-wrapper">
        <div className="timer-title">
          <b>{this.props.eventName}</b>
        </div>
        <div className="clock">
          {this.leadingZero(this.state.days)}{" "}
          {this.state.days === 1 ? "day" : "days"}
        </div>
        <div className="clock">
          {this.leadingZero(this.state.hours)}{" "}
          {this.state.hours === 1 ? "hour" : "hours"}
        </div>
        <div className="clock">
          {this.leadingZero(this.state.minutes)}{" "}
          {this.state.minutes === 1 ? "minute" : "minutes"}
        </div>
        <div className="clock">
          {this.leadingZero(this.state.seconds)}{" "}
          {this.state.seconds === 1 ? "second" : "seconds"}
        </div>
      </div>
    );
  }
}

class TimerExtension extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [{ name: "See you in", date: "June 19, 2020" }]
    };
  }

  render() {
    let events = this.state.events.map(evt => (
      <Timer key={evt.date} eventName={evt.name} eventDate={evt.date} />
    ));
    return <div className="App">{events}</div>;
  }
}

export default TimerExtension;
