import * as types from './../Contants/ActionType'
const initialState = null;
const chooseReducer = (state = initialState, action)=>{
    switch (action.type){
        case types.CHOOSE_USER:
            return {uid : action.uid};
        case types.GET_USER:
        const {displayName, email, lastTimeLoggedIn, online, photoURL} = action;
            return {
                displayName,
                email,
                lastTimeLoggedIn,
                online,
                photoURL
            }
      default:
        return state;
    }
}
export default chooseReducer;