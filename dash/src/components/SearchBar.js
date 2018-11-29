import React from "react";

class SearchBar extends React.Component {

  render() {
    const lastUpdated = this.toTime(this.props.lastUpdated);
    return (
      <div className="Ticker">
        <span class="symbol">{this.props.symbol}</span>
        <span>{this.props.lastPrice}</span>
        <span>{lastUpdated}</span>
      </div>
    );
  }
}

export default SearchBar;
