import * as types from './../Contants/ActionType'
const initialState = {};
const listReducer = (state = initialState, action)=>{
    switch (action.type){
        case types.LIST_USERS:
            const { uid, user } = action;
    
            return {
            ...state,
            [uid]: {
                ...user
            }
            };
      default:
        return state;
    }
}
export default listReducer;