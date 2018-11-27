import React, { Component } from 'react';
import './App.css';
import socketIOClient from "socket.io-client";
import Ticker from './components/Ticker'

class App extends Component {

	constructor() {
		super();
		this.state = {
		  response: false,
		  endpoint: "https://ws-api.iextrading.com/1.0/tops"
		};
	}

	componentDidMount() {
		const { endpoint } = this.state;
		const socket = socketIOClient(endpoint);

		socket.on(
			'message',
			data => {
				console.log(data);
				this.setState({ response: data });
				return;
			});

		// Connect to the channel
		socket.on('connect', () => {

			// Subscribe to topics (i.e. appl,fb,aig+)
			socket.emit('subscribe', 'snap,fb,goog')
  		})
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

		const { response } = this.state;
		const data = JSON.parse(response);

		return (
			<div className="App">
				<Ticker
					symbol={data.symbol}
					lastPrice={data.lastSalePrice}
					lastUpdated={data.lastUpdated}/>
			</div>
		);
	}
}

export default App;
