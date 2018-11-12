import * as types from './../Contants/ActionType'
const initialState = false;
const starReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.TOOGLE_STAR:

            return !state;
        // case types.GET_STAR:
        //     return action.star
        default:
            return state;
    }
}
export default starReducer;