import React, { Component } from 'react';
import './styles/App.css';
import TickerList from './components/TickerList';
import Grid from '@material-ui/core/Grid';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedSymbol: null,
      tickers: 'aapl,fb,goog',
      endpoint: 'https://ws-api.iextrading.com/1.0/tops'
    };
  }

  onTickerSelected(ticker){
    console.log('selected ticker:', ticker)
    this.setState({selectedSymbol: ticker.symbol})
  }

  render() {
    return (
      <Grid container className='App'>
      
        <Grid className='Side-bar'>
          <TickerList
            onSelectionChanged={this.onTickerSelected.bind(this)}
            tickers={this.state.tickers}
            endpoint={this.state.endpoint}>
          </TickerList>
        </Grid>

        <Grid>{this.state.selectedSymbol}</Grid>
        
      </Grid>
    );
  }
}

export default App;
