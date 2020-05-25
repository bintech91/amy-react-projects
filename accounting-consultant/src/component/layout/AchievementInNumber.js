import AnimatedNumber from "animated-number-react";
import React, { Component } from 'react'

export class AchievementInNumber extends Component {
    formatValue = value => value.toFixed(0)
    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
      }
      
      state = {
          value1: 512,
          value2: 733,
          value3: 10000
      }

      //running number everytime the scrolling to that position
      listenToScroll = () => {
       var component = window.document.getElementById("aboutus")
       if(component != null) {
            if(window.pageYOffset > component.offsetTop) {this.setState({
                value1: 512,
                value2: 733,
                value3: 10000
            })}
            if(window.pageYOffset < component.offsetTop) {
            this.setState({value1: 0,
                            value2: 0,
                            value3: 0})
            }
    
            if(window.pageYOffset > (component.offsetHeight + component.offsetTop)) {
            this.setState({
                value1: 0,
                value2: 0,
                value3: 0
            })
            }
       }
      }
    render() {
        return (
            <div>
                <div className="container row">
                    <div className="col s4">
                        <div className="card">
                            <div className="card-content project">
            <h3 style={{marginTop: "50px", fontWeight: "bold", color: "rgb(127, 81, 233)"}}><AnimatedNumber value = {this.state.value1} formatValue = {this.formatValue} /></h3>
                                <div>
                                <i className="small material-icons" style={{position: "relative", top: "8px", left: "-5px"}}>check_circle</i>Finished projects
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col s4">
                        <div className="card">
                            <div className="card-content project">
            <h3 style={{marginTop: "50px", fontWeight: "bold", color: "#456DFE"}}><AnimatedNumber value = {this.state.value2} formatValue = {this.formatValue} /></h3>
                                <div>
                                <i className="small material-icons" style={{position: "relative", top: "8px", left: "-5px"}}>poll</i>Finished projects
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col s4">
                        <div className="card">
                            <div className="card-content project">
            <h3 style={{marginTop: "50px", fontWeight: "bold", color: "#2962ff"}}><AnimatedNumber value = {this.state.value3} formatValue = {this.formatValue} />+</h3>
                                <div>
                                <i className="small material-icons" style={{position: "relative", top: "8px", left: "-5px"}}>track_changes</i>Finished projects
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        )
    }
}

export default AchievementInNumber

