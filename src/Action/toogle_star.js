import * as types from './../Contants/ActionType'
import firebase from 'firebase'
export const toggleStar = (star)=>{
    return{
        type : types.TOOGLE_STAR,
    }
}
export const firebaseAddStar = (star,key, uid)=>{
    return (dispatch)=>{
        const starRef = firebase.database().ref(`stars/${uid}`);
        starRef.child(key).set(star)
    }
}
export const getStar = (star)=>{
    return {
        type : types.GET_STAR,
        star
    }
}
export const firebaseGetStar = (key, uid)=>{
    let star = {}
    return (dispatch)=>{
        const starRef = firebase.database().ref(`stars/${uid}`);
        starRef.child(key).on('value', snapshot=>{
          dispatch(getStar(snapshot.val()))
        })
    }
}


