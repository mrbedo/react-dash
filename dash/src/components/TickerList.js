import React, { Component } from 'react';
import socketIOClient from "socket.io-client";
import Ticker from './Ticker'

class TickerList extends Component {
	constructor() {
		super();

		this.state = {
			tickerMap: new Map()
		};
	}
	
	componentDidMount() {
		this.socket = socketIOClient(this.props.endpoint);
		this.socket.on(
			'message',
			data => {
				//console.log(data);
				const parsedTickerData = JSON.parse(data);

				this.setState( (state, props) => { 
					state.tickerMap.set(parsedTickerData.symbol, parsedTickerData);
					return {tickerMap: state.tickerMap}
				});

				return;
			});

		// Connect to the channel
		this.socket.on('connect', () => {
			// Subscribe to topics (i.e. appl,fb,aig+)
			this.socket.emit('subscribe', this.props.tickers) //firehose
		})
	}

	componentWillUnmount() {
		this.socket.emit('unsubscribe', this.props.tickers)
	}

	render() {
		// askPrice:0
		// askSize:0
		// bidPrice:0
		// bidSize:0
		// lastSalePrice:6.495
		// lastSaleSize:5
		// lastSaleTime:1543265994184
		// lastUpdated:1543266000000
		// marketPercent:0.02332
		// sector:"mediaentertainment"
		// securityType:"commonstock"
		// seq:14591
		// symbol:"SNAP"
		// volume:232141

		const { tickerMap } = this.state;
		if(!tickerMap){
			return <li>...</li>;
		}
		
		const tickerItems = [];
		
		tickerMap
			.forEach(ticker => {
				tickerItems.push((
					<Ticker
						key={ticker.symbol}
						symbol={ticker.symbol}
						securityType={ticker.securityType}
						sector={ticker.sector}
						lastPrice={ticker.lastSalePrice}
						lastUpdated={ticker.lastUpdated}>
					</Ticker>
				));
			});

		return (
			<ul>{tickerItems}</ul>
		);
	}
}

export default TickerList;

