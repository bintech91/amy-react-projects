import React, { Component } from 'react'
import Client from '../layout/Client'
import PropTypes from 'prop-types';

export class Testimonials extends Component {
    render() {
        return (
            <div id={this.props.id}> 
                <div className="row" style={{marginTop: "100px"}}>
                <div className="testimonialsHeader">
                    <section className="header-text" style={{textAlign: "center", marginTop: "100px"}}>
                        <h6 className="textFooter">Testimonials</h6>
                        <h3 className="header3">Client testimonials</h3>
                    </section>
                </div>
                <div className="row">
                        <Client />
                </div>
                </div>
            </div>
        )
    }
}
Testimonials.propTypes = {
    id: PropTypes.string
  }
export default Testimonials
