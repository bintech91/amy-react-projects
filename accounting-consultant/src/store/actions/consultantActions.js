import firebase from '../../config/fbConfig'
export function createConsultant(consultant) {
    return (dispatch, getState) => {
        //make async call db
        const firestore = firebase.firestore()
        const profile =  getState().firebase.profile
        const authorId = getState().firebase.auth.uid
        firestore.collection('consultant').add({
            ...consultant, 
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_CONSULTANT',
            consultant: consultant})
        }).catch((err) => {
            dispatch({ type: 'CREATE_CONSULTANT_ERROR', err})
        })
    }
}