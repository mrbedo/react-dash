import React from 'react';
import './Ticker.css'

class Ticker extends React.Component {

	toTime(time) { 
		return time ? new Date(time).toLocaleTimeString() : "--";
	}

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

export default Ticker;