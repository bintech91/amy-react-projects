import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

export class TopNav extends Component {
    render() {
      const {auth} = this.props
        return (
            <div className="navbar-fixed topNav">
                <nav className="nav-wrapper white">
                    <div className="container">
                      <div className="right">
                        <ul>
                          <li><NavLink className="social-icon" to="/"><img alt="" src="https://img.icons8.com/small/30/000000/facebook-new.png"/></NavLink></li>
                          <li><NavLink className="social-icon" to="/"><img alt="" src="https://img.icons8.com/small/30/000000/twitter.png"/></NavLink></li>
                          <li><NavLink className="social-icon" to="/"><img alt="" src="https://img.icons8.com/small/30/000000/instagram-new.png"/></NavLink></li>
                           <li><NavLink to={auth.uid ? '/userprofile' : '/signin'} className="account">
                             {!this.props.photoURL ? <i className="material-icons" id="avatarIcon">account_circle</i> : 
                             <img className= 'topNavAva' src={this.props.photoURL} alt=""/>}</NavLink></li>
                        </ul>
                      </div>
                      </div>
                    </nav>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
      authError: state.auth.authError,
      auth: state.firebase.auth,
      photoURL: state.auth.currentUser ? state.auth.currentUser.photoURL : state.firebase.auth.photoURL
  }
}

TopNav.propTypes = {
  auth: PropTypes.object,
  photoURL: PropTypes.string
}

export default connect(mapStateToProps)(TopNav)
