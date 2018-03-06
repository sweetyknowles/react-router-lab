import React, { Component } from 'react';

class Stock extends Component {
    render() {

        const id = this.props.match.params.symbol
        console.log(id)

        const stock = this.props.stocksdata
        console.log(stock)

        const singleid = stock.filter((stock => stock.symbol === id))
            console.log(singleid)
        return (
            <div>
              <h2>Name:{singleid[0].name}  </h2>
              <li>Symbol:{singleid[0].symbol}</li>
              <li>Last Price:{singleid[0].lastPrice}</li>
              <li>Change:{singleid[0].change}</li>
              <li>High{singleid[0].high}</li>
              <li>Low:{singleid[0].low}</li>



            </div>
        );
    }
}

export default Stock;