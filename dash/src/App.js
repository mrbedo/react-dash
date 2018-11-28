import React, { Component } from 'react';
import './App.css';
import TickerList from './components/TickerList';

class App extends Component {

	constructor() {
		super();
		this.state = {
			tickers: "aapl,goog,fb",
			endpoint: "https://ws-api.iextrading.com/1.0/tops"
		};
	}

	render() {
		return (
			<div className="App">
				<TickerList
					tickers={this.state.tickers}
					endpoint={this.state.endpoint}/>
			</div>
		);
	}
}

export default App;
