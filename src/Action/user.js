import * as types from './../Contants/ActionType'
import firebase from 'firebase'
export const getId = (uid)=>{
    return{
        type:types.CHOOSE_USER,
        uid,
    }
    
}
export const getUser = ({displayName, email, lastTimeLoggedIn, online, photoURL, star}) => {
    return{
        type:types.GET_USER,
        displayName,
        email,
        lastTimeLoggedIn,
        photoURL,
        star
    }
}
// export const clearUser = ()=>{
//     return{
//         type: 
//     }
// }
export const firebaseGetUser = (uid) =>{
    return (dispatch) =>{
        const users = firebase.database().ref('users');
        users.child(uid).on('value', snapshot=>{
            const {displayName, email, lastTimeLoggedIn, online, photoURL, star} = snapshot.val();
           
            dispatch(getUser({displayName, email, lastTimeLoggedIn, online, photoURL, star}))
        })
    }
} 
export const searchUser= (keyword)=>{
    return {
        type : types.SEARCH_USER,
        keyword
    }
}


