import { Link, animateScroll as scroll } from "react-scroll";
import React, { Component } from 'react'

export class Navbar extends Component {
    scrollToTop = (ev) => {
        ev.preventDefault()
        scroll.scrollToTop()
    }
    
    render() {
        return (
            <div className="navbar-fixed">
                <nav className="nav-wrapper white">
                    <div className="container">
                        <a href="/#" onClick={this.scrollToTop}>
                            <img alt="" src="/logo.png" onClick={this.scrollToTop} style={{padding: '10px'}}/></a>
                        <ul className="right">
                            <li>
                            <Link
                                className = "navLink"
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {500}>Home</Link>
                            </li>
                            <li><Link
                                className = "navLink"
                                activeClass="active"
                                to="services"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {500} >Services</Link></li>
                            <li><Link
                                className = "navLink"
                                activeClass="active"
                                to="aboutus"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {500} >About us</Link></li>
                            <li><Link
                                className = "navLink"
                                activeClass="active"
                                to="testimonials"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {500} >Testimonials</Link></li>
                            <li><Link
                                className = "navLink"
                                activeClass="active"
                                to="prices"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {500} >Prices</Link></li>
                        </ul>
                    </div>
            </nav> 
        </div>
        )
    }
}

export default Navbar
