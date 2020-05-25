const initState ={}

function authReducer(state = initState, action)  {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            console.log('login success')
            return {
                ...state,
                authError: null
            }
        case 'LOGIN_ERROR':
            console.log('login error')
            return {
                ...state,
                authError: 'Login failed'
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signout success')
            return {
                ...state,
                currentUser: null
            }
        case 'SIGNUP_SUCCESS':
            console.log('signup success')
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('signup error')
            return {
                ...state,
                authError: action.err.message
            }
        case 'UPLOAD_SUCCESS':
            return {
                ...state,
                currentUser: action.currentUser
            }
        default:
            return state
            
    }

}

export default authReducer