import * as types from './../Contants/ActionType'
import firebase from 'firebase'
export const getListMessages = ({idReceiver, idSender, text, timeMessage, typeMes})=>{
    return{
        type:types.LIST_MESSAGES,
        idReceiver,
        idSender,
        text,
        typeMes,
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
            let {idReceiver, idSender, text, timeMessage, typeMes} = snapshot.val();
            dispatch(getListMessages({idReceiver, idSender, text, timeMessage, typeMes}))
        })
       
    }
}
export const firebaseAddMessage = (infMessage, key)=>{
    return (dispatch) =>{
        
        const message = firebase.database().ref('messages');
        
        message.child(key).push(infMessage)
    }
}

