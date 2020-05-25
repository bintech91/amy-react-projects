import React from 'react';
import { Provider, useSelector } from 'react-redux'
import { ReactReduxFirebaseProvider, isLoaded } from 'react-redux-firebase'
import createStore from './store/store'
import firebase from './config/fbConfig'
import { createFirestoreInstance } from 'redux-firestore'
import MainPage from './component/layout/MainPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SignIn from './component/NavItem/SignIn'
import UserProfile from './component/NavItem/UserProfile'
import TopNav from './component/layout/TopNav';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer} from 'react-notifications';



function AuthIsLoaded({children}) {
  const auth = useSelector(state => state.firebase.auth);
  if (!isLoaded(auth)) return <div></div>;
  return children
}

function App() {
  const store = createStore()
  const rrfConfig = { userProfile: 'user',
                      useFirestoreForProfile: true } 
  const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance // <- needed if using firestore
  }
  return ( 
    <Provider store={store}>
       <ReactReduxFirebaseProvider {...rrfProps}>
       <BrowserRouter>
       <AuthIsLoaded >
            <TopNav />
            <Switch>
              <Route exact path='/' component={MainPage} />
              <Route path='/signin' component={SignIn} />
              <Route path='/userprofile' component={UserProfile} />
         </Switch></AuthIsLoaded>
         <NotificationContainer/>
        </BrowserRouter>
        </ReactReduxFirebaseProvider>
      </Provider>
  );
}

export default App;
