import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import DashBoard from "./component/DashBoard";
import NavBar from "./component/NavBar";
import Stock from "./component/Stock";



class App extends Component {
  state = {
    stocksdata: []
  };


   componentDidMount(){
    axios.get ('https://ga-stocks.herokuapp.com/stocks')
     .then((response) => {
      const stocksdata = response.data
      console.log(response.data)
      this.setState({stocksdata})
    }).catch(error => {
      console.error('Error: ', error)
    })
   }
  render() {
    
    const DashboardWrapper = () => {
      return <DashBoard stocksdata={this.state.stocksdata} />
    }
    const StockWrapper = (props) => {
      return <Stock stocksdata={this.state.stocksdata} {...props} />
    }
    return (
      <Router>
        <main>
          <NavBar />
          <Switch>
            <Route exact path="/stocks" render={DashboardWrapper} />
            <Route path="/stocks/:symbol" render={StockWrapper} />
            {/* <Route path="/about" component={About} /> */}
            <Route exact path="/" render={() => <Redirect to="/stocks" />} />
          </Switch>
        </main>
      </Router>
    );
  }
}
export default App;



