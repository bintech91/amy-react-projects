import React, { Component } from 'react'
import {NotificationManager} from 'react-notifications';
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { signUp } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';

export class SignIn extends Component {
    state = {
        isSignUp: false,
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }
    onClick = (evt) => {
        if(evt.target.className === 'signinBtn') {
            this.setState({isSignUp: false})
            
        } else if (evt.target.className === 'signoutBtn') {
            this.setState({isSignUp: true})
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.firstName);
        
        if(this.state.isSignUp) {
            if(this.state.firstName !== '' &&
            this.state.lastName !== '' &&
            this.state.email !== '' &&
            this.state.password !== '' ) {
                this.props.signUp({firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    email: this.state.email, 
                    password: this.state.password})
            } else {
                NotificationManager.warning('Please fill in required field', '', 3000);
            }
        } else {
            if( this.state.email !== '' &&
            this.state.password !== '' ) {
                this.props.signIn({email: this.state.email, password: this.state.password})

            } else {
                NotificationManager.warning('Please fill in required field', '', 3000);
            }
        }
    }

    render() {
        const {auth} = this.props
        if(auth.uid) return <Redirect to='/' />
        return (
            <div className="container" id = 'signin-form'>
                <div className="signinHeader">
                <button style={this.state.isSignUp ? {color: 'grey'} : {color: 'black'}} onClick={this.onClick} className = "signinBtn">Login</button> 
                        <span style={{fontSize: '50px'}}>        /       </span>
                        <button style={this.state.isSignUp ? {color: 'black'} : {color: 'grey'}} onClick={this.onClick} className="signoutBtn">Register</button> </div>
                    <form onSubmit={this.handleSubmit} className="white">
                        {this.state.isSignUp ? <div><div className="input-field">
                            <label className= "required"  htmlFor="firstName">First Name</label>
                            <input type="text" id="firstName" onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <label className= "required"  htmlFor="lastName">Last Name</label>
                            <input type="text" id="lastName" onChange={this.handleChange} />
                        </div></div> : <div></div>}
                        
                        <div className="input-field">
                            <label className= "required" htmlFor="email">Email</label>
                            <input type="email" id="email" onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <label className= "required" htmlFor="password">Password</label>
                            <input type="password" id="password" onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <button className="btn sendMessage">{this.state.isSignUp ? 'Sign Up' : 'Sign In'}</button>
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
            signUp: (newUser) => dispatch(signUp(newUser)),
            signIn: (creds) => dispatch(signIn(creds))
        }
}
SignIn.propTypes = {
    auth: PropTypes.object,
    signIn: PropTypes.func,
    signUp: PropTypes.func
  }
export default connect(mapStateToProps, mapDispatchToProps) (SignIn)
