const initState ={}

function consultantReducer(state = initState, action)  {
    switch (action.type) {
        case 'CREATE_CONSULTANT':
            console.log('created consultant', action.project)
            return state
        case 'CREATE_CONSULTANT_ERROR':
            console.log('create consultant error', action.err);
            return state
        default:
            return state
            
    }
}

export default consultantReducer