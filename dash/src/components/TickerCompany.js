import React from "react";

class TickerCompany extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      companyName: null,
      exchange: null,
      industry: null,
      website: null,
      description: null,
      CEO: null,
      sector: null
    };
  }

  // {
  //   "symbol": "AAPL",
  //   "companyName": "Apple Inc.",
  //   "exchange": "Nasdaq Global Select",
  //   "industry": "Computer Hardware",
  //   "website": "http://www.apple.com",
  //   "description": "Apple Inc is an American multinational technology company. It designs, manufactures, and markets mobile communication and media devices, personal computers, and portable digital music players.",
  //   "CEO": "Timothy D. Cook",
  //   "issueType": "cs",
  //   "sector": "Technology",
  //   "tags": [
  //       "Technology",
  //       "Consumer Electronics",
  //       "Computer Hardware"
  //   ]
  // }
  setCompanyInfo(data) {
    this.setState({
      companyName: data.companyName,
      exchange: data.exchange,
      industry: data.industry,
      website: data.website,
      description: data.description,
      CEO: data.CEO,
      sector: data.sector
    });
  }

  componentDidUpdate(){
    if (!this.props.symbol) {
      return;
    }

    //TODO: Use Flux/Redux or whatever that thing is called.
    //This is business logic in the view!! Boom.
    let endpoint = this.props.urlProxy + this.props.endpoint;
    fetch(`${endpoint}/stock/${this.props.symbol}/company`)
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setCompanyInfo(data);
      });
  }

  render() {
    if(this.state.isLoading){
      return(
        <div>
        <div>{this.props.symbol}</div>
        <div>Loading Company Info...</div>
      </div>);
    }

    return (
      <div>
        <div>{this.props.symbol}</div>
        <div>{this.props.description}</div>
        <div>{this.state.companyName}</div>
        <div>{this.state.exchange}</div>
        <div>{this.state.industry}</div>
        <div>{this.state.sector}</div>
      </div>
    );
  }
}

export default TickerCompany;
