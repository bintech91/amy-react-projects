import authReducer from './authReducer'
import consultantReducer from './consultantReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'


const rootReducer = combineReducers({
    auth: authReducer,
    consultant: consultantReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer