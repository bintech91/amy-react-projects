import React, { Component } from 'react'
import Home from '../NavItem/Home'
import Services from '../NavItem/Services'
import AboutUs from '../NavItem/AboutUs'
import Testimonials from '../NavItem/Testimonials'
import Prices from '../NavItem/Prices'
import Footer from './Footer'
import Navbar from './Navbar'

export class MainPage extends Component {
    render() {
        return (
            <div>
            <Navbar />
                <Home id="home" />
                <Services id="services" />
                <AboutUs id="aboutus" />
                <Testimonials id="testimonials" />
                <Prices id="prices" />
                <Footer />
            </div>
        )
    }
}

export default MainPage
