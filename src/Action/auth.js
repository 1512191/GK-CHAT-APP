import * as types from './../Contants/ActionType'
import {firebaseConnect, authRef,  provider} from './../Utils/config'
import firebase from 'firebase'
export const signIn = (infor)=>{
    
    return {
        type : types.SIGNIN,
        infor : infor
        
    }
}
export const signOut = ()=>{
    return {
        type : types.SIGNOUT
    }
}
export const firebaseSignIn = ()=>{
    return (dispatch)=>{
        return authRef.signInWithPopup(provider).then(result =>{
            const { user: { uid, displayName, photoURL, email } } = result;
            const online = true;
            const star = false;
            firebase.database().ref(`users/${ uid }`).set({
                displayName,
                photoURL,
                email,
                online,
                star,
                lastTimeLoggedIn: firebase.database.ServerValue.TIMESTAMP
              });
              localStorage.setItem("login", "login")
              const infor = {
                  uid : result.user.uid,
                  photoURL:result.user.photoURL,
                  email:result.user.email,
                  online,
              }
            dispatch(signIn(infor))
        });
    };
}
export const firebaseSignOut = ()=>{
    return (dispatch)=>{
        return authRef.signOut().then(value =>{
            localStorage.setItem("login", "logout")
            dispatch(signOut())
        })
    };
}
export const firebaseChange=()=>{
    return (dispatch)=>{
        return authRef.onAuthStateChanged(user =>{
            if(user)
            {
                dispatch(signIn(user))
            }
            else
            {
                dispatch(signOut())
            }
        })
    }
}