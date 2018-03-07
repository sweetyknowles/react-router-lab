import React, { Component } from "react";

import Stocks from "./Stocks"


class DashBoard extends Component {
  render() {
    return (
      <div>
        <Stocks stocksdata={this.props.stocksdata} />
      </div>
    );
  }
}

export default DashBoard;
