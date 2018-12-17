import React from "react";
import "./Ticker.css";

class Ticker extends React.Component {
  toTime(time) {
    return time ? new Date(time).toLocaleTimeString() : "--";
  }

  render() {
    const lastUpdated = this.toTime(this.props.lastUpdated);
    return (
      <div className="symbol-container">
        <div className="symbol Font-term">{this.props.symbol}</div>
        <div className="right">{this.props.lastPrice}</div>
        <div className="right Font-time">{lastUpdated}</div>
      </div>
    );
  }
}

export default Ticker;
