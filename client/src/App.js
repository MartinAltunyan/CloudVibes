import React, { Component } from 'react';
import Home from './components/Home'
import Navigator from './components/Navigator'
import Header from './components/Header';
import LandingBody from './components/LeangingBody';
import Footer from './components/Footer';
import Menu from './components/Menu';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";




class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">


          <Header />
          <Navigator />



          <Route exact path='/' component={LandingBody} />
          <Route exact path='/menu' component={Menu} />

          <Footer />
        </div>


      </Router>

    );
  }
}

export default App;
