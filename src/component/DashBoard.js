import React, { Component } from "react";
import { Link } from "react-router-dom";
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
