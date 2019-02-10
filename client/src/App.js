import React, { Component } from 'react';
import Home from './components/Home'
import Navigator from './components/Navigator'
import Header from './components/Header';
import LandingBody from './components/LeangingBody';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Reservation from './components/Reservation';
import Hours from './components/Hours';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';






class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">


          <Header />
          <Navigator />



          <Route exact path='/' component={LandingBody} />
          <Route exact path='/menu' component={Menu} />
          <Route exact path='/reservation' component={Reservation} />
          <Route exact path='/hours' component={Hours} />

          <Footer />
        </div>


      </Router>

    );
  }
}

export default App;
