import { Link, animateScroll as scroll } from "react-scroll";
import React, { Component } from 'react'
import M from "materialize-css/dist/js/materialize.min.js";

export class Navbar extends Component {
    scrollToTop = (ev) => {
        ev.preventDefault()
        scroll.scrollToTop()
    }
    componentDidMount() {
        var elems = document.querySelectorAll('.sidenav');
        const options = {
            inDuration: 250,
            outDuration: 200,
            draggable: true
        };

        M.Sidenav.init(elems, options);
    }

    render() {
        return (
            <div>
                <div className="navbar-fixed nav-extended" style={{height: '65px'}}>
                    <nav className="nav-wrapper white" style={{height: '65px'}}>
                        <div className="container">
                            <a href="/#" onClick={this.scrollToTop}>
                                <img alt="" src="/logo.png" onClick={this.scrollToTop} style={{ padding: '10px' }} /></a>
                            <a href="#" data-target="slide-out" className="sidenav-trigger">
                                <i style={{ color: 'black' }} className="material-icons">menu</i></a>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li>
                                    <Link
                                        className="navLink"
                                        activeClass="active"
                                        to="home"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}>Home</Link>
                                </li>
                                <li><Link
                                    className="navLink"
                                    activeClass="active"
                                    to="services"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500} >Services</Link></li>
                                <li><Link
                                    className="navLink"
                                    activeClass="active"
                                    to="aboutus"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500} >About us</Link></li>
                                <li><Link
                                    className="navLink"
                                    activeClass="active"
                                    to="testimonials"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500} >Testimonials</Link></li>
                                <li><Link
                                    className="navLink"
                                    activeClass="active"
                                    to="prices"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500} >Prices</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <ul id="slide-out" className="sidenav">
                    <li>
                        <Link
                            className="navLink"
                            activeClass="activeSide"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>Home</Link>
                    </li>
                    <li><Link
                        className="navLink"
                        activeClass="activeSide"
                        to="services"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500} >Services</Link></li>
                    <li><Link
                        className="navLink"
                        activeClass="activeSide"
                        to="aboutus"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500} >About us</Link></li>
                    <li><Link
                        className="navLink"
                        activeClass="activeSide"
                        to="testimonials"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500} >Testimonials</Link></li>
                    <li><Link
                        className="navLink"
                        activeClass="activeSide"
                        to="prices"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500} >Prices</Link></li>
                </ul>
            </div>

        )
    }
}

export default Navbar
