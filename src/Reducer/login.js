import * as types from './../Contants/ActionType'
import {firebaseConnect, authRef,  provider} from './../Utils/config'
let initialState = {
    authenticated : false,
    error : null
};
const authReducer = (state = initialState, action)=>{
    switch (action.type){
        case types.SIGNIN:
            return {
                infor:action.infor,
                authenticated : true,
                error: null
            }
            case types.SIGNOUT:
            return {
                authenticated : false,
                error: "FAIL"
            }
            default: return state;
    }
}
export default authReducer;