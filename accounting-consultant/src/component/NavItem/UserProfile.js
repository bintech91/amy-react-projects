import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signOut, uploadPhoto } from '../../store/actions/authActions'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import PropTypes from 'prop-types'
import firebase from '../../config/fbConfig'
import { NotificationManager } from 'react-notifications';

export class UserProfile extends Component {
  state = {
    image: null,
    url: '',
    isUpload: false
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signOut()
    this.props.history.push('/')
  }

  handleImageAsFile = (e) => {
    if (e.target.files[0] != null) {
      if (e.target.files[0].type.startsWith('image')) {
        this.setState({ image: e.target.files[0] })
        this.setState({ isUpload: true })
      } else {
        NotificationManager.warning('Please upload image file', '', 3000);
        this.setState({ isUpload: false });
      }
    } else {
      this.setState({ isUpload: false })
    }
  }

  handleFireBaseUpload = (e) => {
    e.preventDefault()
    const { image } = this.state;
    const storage = firebase.storage()

    const uploadTask = storage.ref(`/images/${image.name}`).put(image)
    uploadTask.on('state_changed', (snapshot) => {
      console.log(snapshot);
    }, (error) => {
      console.log(error);
    }, () => {
      storage.ref('images').child(image.name).getDownloadURL().then(url => {
        NotificationManager.success('Photo has been uploaded!', '', 3000);
        this.props.uploadPhoto(url)
        this.setState({ url: url })
        this.setState({ isUpload: false })
      })
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s4" id="avatar">
            <img className="avatarImg" src={this.state.url ? this.state.url : this.props.photoURL ? this.props.photoURL : 'https://iupac.org/wp-content/uploads/2018/05/default-avatar.png'} alt="" />
          </div>
          <div className="col s7 card" id="profile">
            <h4>Profile Information</h4>
            <div className="card-content">
              <form onSubmit={this.handleFireBaseUpload}>
                <div className="uploadAvatar">
                  <label style={{ marginRight: '20px' }} htmlFor="avatar">Upload Avatar</label>
                  <input name="avatar" type="file" onChange={this.handleImageAsFile} />
                  <button className="uploadBtn" style={this.state.isUpload ? { visibility: 'visible' } : { visibility: 'hidden' }}>Upload Avatar</button></div>
              </form>
              <form onSubmit={this.handleSubmit} className="white">
                <label htmlFor="firstName">First Name</label>
                <input readOnly value={this.props.user ? this.props.user.firstName : ''} type="text" id="firstName" onChange={this.handleChange} />
                <label htmlFor="lastName">Last Name</label>
                <input readOnly value={this.props.user ? this.props.user.lastName : ''} type="text" id="lastName" onChange={this.handleChange} />
                <label htmlFor="email">Email</label>
                <input readOnly value={this.props.auth.email} type="email" id="email" onChange={this.handleChange} />
                <div className="input-field">
                  <button className="btn sendMessage">Log Out</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  const id = state.firebase.auth.uid
  const users = state.firestore.data.user
  const user = users ? users[id] : null
  
  return {
    user: user,
    auth: state.firebase.auth,
    photoURL: state.auth.currentUser ? state.auth.currentUser.photoURL : state.firebase.auth.photoURL
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
    uploadPhoto: (photoURL) => dispatch(uploadPhoto(photoURL))
  }
}

UserProfile.propTypes = {
  auth: PropTypes.object,
  signOut: PropTypes.func,
  user: PropTypes.object,
  history: PropTypes.object,
  uploadPhoto: PropTypes.func
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps), firestoreConnect([
    { collection: 'user' }
  ]))(UserProfile)
