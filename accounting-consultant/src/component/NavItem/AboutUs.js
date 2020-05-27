import React, { Component } from 'react'
import AchievementInNumber from '../layout/AchievementInNumber'
import PropTypes from 'prop-types';

export class AboutUs extends Component {
    render() {
        return (
            <div id={this.props.id}> 
                <div className="row" style={{paddingLeft: '60px'}}>
                <div className="col s12 m12 l5">
                    <div>
                            <img src="/about-us.jpg" alt="" style={{width: '80%'}}/>
                        </div>
                    </div>
                    <div className="col s12 m12 l7">
                            <h6 className="textFooter">About us</h6>
                            <h3 className="header3">We are innovation & efficiency</h3>
                            <p className="paragraph-general">Now is the winter of our discontent Made glorious summer by this sun of York; 
                            And all the clouds that lour’d upon our house In the deep bosom of the ocean buried. 
                            Now are our brows bound with victorious wreaths</p>
                            <div className="input-field">
                            <button className="input-field btn general">Learn more</button>
                        </div>
                    </div>
                </div>
                <div className="row" style={{marginTop: "100px"}}>
                <div className="col s12 achievementHeader">
                    <section className="header-text" style={{textAlign: "center", color: "white", marginTop: "100px"}}>
                        <h6 className="textFooter">Some facts</h6>
                        <h3 className="header3">Achievements in number</h3>
                    </section>
                </div>
                <AchievementInNumber />
                </div>
            </div>
        )
    }
}

AboutUs.propTypes = {
    id: PropTypes.string
}

export default AboutUs
