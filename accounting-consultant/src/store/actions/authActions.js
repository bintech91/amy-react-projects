import firebase from '../../config/fbConfig'
import { NotificationManager } from 'react-notifications';

export function signIn(credentials) {
    return (dispatch, getState) => {
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' })
        }).catch((err) => {
            NotificationManager.error("Failed to sign in", '', 3000)
            dispatch({ type: 'LOGIN_ERROR', err })
        })
    }
}

export function signOut() {
    return (dispatch, getState) => {
        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS' })
        })
    }
}

export function uploadPhoto(photoURL) {
    return (dispatch, getState) => {
        firebase.auth().currentUser.updateProfile({ photoURL: photoURL }).then(() => {
            dispatch({ type: 'UPLOAD_SUCCESS', currentUser:  firebase.auth().currentUser})
        })
    }
}

export function signUp(newUser) {
    return (dispatch, getState) => {
        const firestore = firebase.firestore()
        firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password).then((resp) => {
            return firestore.collection('user').doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName
            })
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS' })
        }).catch((err) => {
            NotificationManager.error("Failed to sign up", '', 3000)
            dispatch({ type: 'SIGNUP_ERROR', err })
        })
    }
}
