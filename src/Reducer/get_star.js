import * as types from './../Contants/ActionType'
const initialState = {};
const getStarReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_STAR:
                    state = action.star
            return state;
        // case types.GET_STAR:
        //     return action.star
        default:
            return state;
    }
}
export default getStarReducer;