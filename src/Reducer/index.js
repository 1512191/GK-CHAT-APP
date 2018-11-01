import authReducer from './../Reducer/login';
import { combineReducers } from 'redux';
const appReducer = combineReducers({
    authReducer,
    
})
export default appReducer;