import * as types from './../Contants/ActionType'
import {firebaseConnect, authRef,  provider} from './../Utils/config'
import firebase from 'firebase'
export const getId = (uid)=>{
    return{
        type:types.CHOOSE_USER,
        uid,
    }
    
}
export const getUser = ({displayName, email, lastTimeLoggedIn, online, photoURL}) => {
    return{
        type:types.GET_USER,
        displayName,
        email,
        lastTimeLoggedIn,
        photoURL
    }
}
export const firebaseGetUser = (uid) =>{
    return (dispatch) =>{
        const users = firebase.database().ref('users');
        users.child(uid).on('value', snapshot=>{
            const {displayName, email, lastTimeLoggedIn, online, photoURL} = snapshot.val();
           
            dispatch(getUser({displayName, email, lastTimeLoggedIn, online, photoURL}))
        })
    }
}


