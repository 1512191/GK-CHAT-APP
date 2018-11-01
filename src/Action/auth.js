import * as types from './../Contants/ActionType'
import {firebaseConnect, authRef,  provider} from './../Utils/config'
export const signIn = (infor)=>{
    
    return {
        type : types.SIGNIN,
        infor : infor.user
        
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
            dispatch(signIn(result))
        });
    };
}
export const firebaseSignOut = ()=>{
    return (dispatch)=>{
        return authRef.signOut().then(value =>{
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