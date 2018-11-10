import * as types from './../Contants/ActionType'
const initialState = '';
const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SEARCH_USER:
            return action.keyword;
        default:
            return state;
    }
}
export default searchReducer;