import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";


import Footer from './components/Footer';
import Home from './components/Home'
import HookahMenu from './components/HookahMenu'


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Pic1 from './img/IMG_4727.jpg'

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>






          <div>

            <h1 className="site-heading text-center text-white d-none d-lg-block">
              <span className="site-heading-upper text-primary mb-3">SMOKE HOUSE</span><br />
              <span className="site-heading-lower text-primary mb-3">CLOUD VIBES</span>
            </h1>
            <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
              <div className="container">
                <Link className="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none" to='/'></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav mx-auto">
                    <li className="nav-item px-lg-4">
                      <Link className="nav-link text-uppercase text-expanded" to={"/"}>HOME</Link>
                      <span className="sr-only">(current)</span>

                    </li>
                    <li className="nav-item active px-lg-4">
                      <Link className="nav-link text-uppercase text-expanded" to="/menu">HOOKAH MENU</Link>

                    </li>
                    <li className="nav-item px-lg-4">

                      <Link className="nav-link text-uppercase text-expanded" to="/">MAKE A RESERVATION</Link>
                    </li>
                    <li className="nav-item px-lg-4">
                      <Link className="nav-link text-uppercase text-expanded" to="/">HOURS</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

            <section className="page-section about-heading">
              <div className="container">
                <img className="img-fluid rounded about-heading-img mb-3 mb-lg-0" src={Pic1} alt="" />
                <div className="about-heading-content">
                  <div className="row">
                    <div className="col-xl-9 col-lg-10 mx-auto">
                      <div className="bg-faded rounded p-5">
                        <h2 className="section-heading mb-4">
                          <span className="section-heading-upper">ABOUT US

                  </span>

                        </h2>
                        <p>Once considered the province of the wealthy, hookah is becoming increasingly more popular in the modern-day restaurants and lounges.

                  Located in the city of Eagle Rock, Cloud Vibes Hookah Lounge elevates the ancient tradition of smoking hookah to a whole new level. With its excellent service, indoor and outdoor seating areas, and a wide selection of high-quality hookah flavors, Cloud Vibes has become one of the neighborhood’s favorite gathering spaces. Inside, the comfortable couches and chairs, and the slick modern-industrial interior design are sure to make your hookah smoking experience enjoyable. The centerpiece of the outdoor patios is the table fire pits that add cozy and warm atmosphere to the place all year round. The international ambient music and large plasma TVs make this lounge not only an excellent hang-out spot for a relaxing experience with friends, but also a perfect place to stay on top of your favorite sports games. With over forty different flavors from all around the world, you are guaranteed to find your favorite hookah here.</p>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>








          </div>





          <Footer />
        </div>
      </Router>


    )
  }
}

export default App;
