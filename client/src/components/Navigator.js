import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default class Navigator extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
                    <div class="container">
                        <Link class="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none" to="#"></Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav mx-auto">
                                <li class="nav-item px-lg-4">
                                    <Link class="nav-link text-uppercase text-expanded" to='/'>HOME</Link>
                                    <span class="sr-only">(current)</span>

                                </li>
                                <li class="nav-item active px-lg-4">
                                    <Link class="nav-link text-uppercase text-expanded" to="/menu">HOOKAH MENU</Link>

                                </li>
                                <li class="nav-item px-lg-4">

                                    <Link class="nav-link text-uppercase text-expanded" to="/reservation">MAKE A RESERVATION</Link>
                                </li>
                                <li class="nav-item px-lg-4">
                                    <Link class="nav-link text-uppercase text-expanded" to="/hours">HOURS</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
