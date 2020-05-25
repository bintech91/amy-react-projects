import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createConsultant} from '../../store/actions/consultantActions'
import {NotificationManager} from 'react-notifications';
import PropTypes from 'prop-types';


export class ConsultantForm extends Component {
    state = {
        companyName: '',
        phoneNumber: '',
        email: '',
        subject: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {auth} = this.props
        if(auth.uid) {
            if(this.state.companyName !== '' &&
            this.state.phoneNumber !== '' &&
            this.state.email !== '' &&
            this.state.subject !== '' ) {
                this.props.createConsultant(this.state)
                NotificationManager.success('Your inquiry has been sent!', '', 3000);
                this.setState({companyName: '',
                phoneNumber: '',
                email: '',
                subject: ''})
            } else {
                NotificationManager.warning('Please fill in required field', '', 3000);
            }
        } else {
            NotificationManager.warning('Please log in before sending an inquiry', '', 3000);
        }
        
    }
    render() {
        return (
            <div className="container" id = "consultant-form">
                    <form onSubmit={this.handleSubmit} className="white" style ={{padding: '50px'}}>
                        <h5 className="grey-text text-darken-3" style={{fontWeight:'bold'}}><span style={{color: '#456DFE'}}>|</span> Book a consultant!</h5>
                        <div className="input-field">
                            <label className="required" htmlFor="companyName">Company Name</label>
                            <input value = {this.state.companyName} type="text" id="companyName" onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <label className="required"  htmlFor="phoneNumber">Phone Number</label>
                            <input value = {this.state.phoneNumber} type="text" id="phoneNumber" onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <label className="required"  htmlFor="email">Email</label>
                            <input value = {this.state.email}  type="email" id="email" onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                        <label className="required"  htmlFor="subject">Subject for consultant</label>
                            <input value = {this.state.subject} type="text" id="subject" onChange={this.handleChange} />
                        </div>
                        <p>It didn&apos;t members sit well way room editing shorthand means racially service.</p>
                        <div className="input-field">
                            <button className="btn sendMessage">Send message</button>
                        </div>
                    </form>
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
    
    
}

const mapDispatchToProps = (dispatch) => {
    return {
        createConsultant: (consultant) => dispatch(createConsultant(consultant))
    }
}

ConsultantForm.propTypes = {
    auth: PropTypes.object,
    createConsultant: PropTypes.func
  }

export default connect(mapStateToProps, mapDispatchToProps)(ConsultantForm)
