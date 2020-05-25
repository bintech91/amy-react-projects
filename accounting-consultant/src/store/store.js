import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/rootReducers'
import thunk from 'redux-thunk'

const initialState = {}

const middleware = [thunk]

export default () => {
  return createStore(
    rootReducer,
    initialState,
      applyMiddleware(...middleware) // to add other middleware
  )
}