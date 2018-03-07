import React, { Component } from 'react';
import axios from 'axios'

class Stock extends Component {

    state = {
        stockdata: []
    }


    componentDidMount() {
        const id = this.props.match.params.symbol
        console.log(id)

        // const stock = this.props.stocksdata
        // console.log(stock)

        // const singleid = stock.filter((stock => stock.symbol === id))
        //     console.log(singleid)



        axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${id}&apikey=52IULC1FK60NUEXN.`)
        .then(response => {
            const stock = response.data["Time Series (Daily)"]["2018-03-06"]
            console.log('STOCKKKKK', stock)
            this.setState({stockdata: stock})
        }).catch((err) => {
            console.log(err)
        })
    }
    //["Time Series (Daily)"]["2018-03-06"]
    
    render() {

        
        
        return (
            <div>
hello
                <h2>{this.state.stockdata['1. open']}</h2>
              {/* <h2>{this.stock['1.open'].name}  </h2>  */}
              {/* <li>Symbol:{singleid[0].symbol}</li> */}
              {/* <li>Last Price:{singleid[0].lastPrice}</li>
              {/* <li>Change:{singleid[0].change}</li> */}
              {/* <li>High{singleid[0].high}</li> */}
              {/* <li>Low:{singleid[0].low}</li> */}



            </div>
        );
    }
}

export default Stock;