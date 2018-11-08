import * as firebase from 'firebase'
import {compose,applyMiddleware,createStore } from 'redux'
import { reactReduxFirebase,getFirebase } from 'react-redux-firebase'
import thunk from 'redux-thunk'
import appReducer from './../Reducer/index'
var config = {
    apiKey: "AIzaSyCHBZxTTkgMkfhxuwNz_2A7k4PzkVaB_pM",
    authDomain: "dagk-cdc42.firebaseapp.com",
    databaseURL: "https://dagk-cdc42.firebaseio.com",
    projectId: "dagk-cdc42",
    storageBucket: "dagk-cdc42.appspot.com",
    messagingSenderId: "835313726198"
  };
  const firebaseconfig = {
    userProfile: 'users', 
    attachAuthIsReady: true, 
    firebaseStateName: 'firebase'   
  }
  function configureStore (initialState = {}){
  
  
    const createStoreWithFirebase =
        compose(reactReduxFirebase(firebase, firebaseconfig),
            applyMiddleware(thunk.withExtraArgument(getFirebase))
        )(createStore)
  
    const store = createStoreWithFirebase(appReducer);
    store.firebaseAuthIsReady.then(() => {
        console.log('chat') 
      })
    return store;
  }   
  export default configureStore;
  export const firebaseConnect = firebase.initializeApp(config);
  export const databaseRef = firebase.database().ref();
export const authRef = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();

 