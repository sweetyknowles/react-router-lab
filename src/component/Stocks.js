import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Stocks extends Component {

    render() {

        return( 
            <div>
            {this.props.stocksdata.map((stock, i) => {
          return (
            <div key={i}>
              {/* linking to another page witha bit of javascript  */}
              <Link to={`/stocks/${stock.symbol}`}> {stock.name} </Link>
              {stock.symbol}
            </div>
          );
        })}

            </div>
        ) 
        
        
       
    }}
export default Stocks;