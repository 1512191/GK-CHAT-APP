import * as types from './../Contants/ActionType'
import {firebaseConnect, authRef,  provider} from './../Utils/config'
import firebase from 'firebase'
export const getListMessages = ({idReceiver, idSender, text, timeMessage})=>{
    return{
        type:types.LIST_MESSAGES,
        idReceiver,
        idSender,
        text,
        timeMessage
    }
    
}
export const addMessage = (message)=>{
    return {
        type : types.ADD_MESSAGE,
        message
    }
}
export const clearMessage = ()=>{
    return {
        type : types.CLEAR_MESSAGE
    }
}
export const firebaseGetMessage = (key)=>{
    
    return (dispatch) =>{
        const message = firebase.database().ref('messages');
        message.child(key).on('child_added', snapshot=>{
            let {idReceiver, idSender, text, timeMessage} = snapshot.val();
            dispatch(getListMessages({idReceiver, idSender, text, timeMessage}))
        })
       
    }
}
export const firebaseAddMessage = (infMessage, key)=>{
    return (dispatch) =>{
        
        const message = firebase.database().ref('messages');
        
        message.child(key).push(infMessage)
    }
}

