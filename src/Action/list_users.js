import * as types from './../Contants/ActionType'
import {firebaseConnect, authRef,  provider} from './../Utils/config'
import firebase from 'firebase'
export const getListUsers = ({user, uid})=>{
    return{
        type:types.LIST_USERS,
        user,
        uid
    }
    
}
export const firebaseGetList = ()=>{
    return (dispatch) =>{
        const users = firebase.database().ref('users');
        users.on('child_added', (snapshot)=>{
            dispatch(getListUsers({
                user:snapshot.val(), 
                uid : snapshot.key}))
        })
    }
}

