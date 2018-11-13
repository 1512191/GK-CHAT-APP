import authReducer from './../Reducer/login';
import listReducer from './../Reducer/list_users'
import chooseReducer from './user'
import listChatReducer from './list_chat'
import { combineReducers } from 'redux';
import {firebaseReducer} from 'react-redux-firebase';
import searchReducer from './Search'
import starReducer from './star';
import getStarReducer from './get_star';
const appReducer = combineReducers({
    authReducer,
    listReducer,
    chooseReducer,
    listChatReducer,
    firebase : firebaseReducer,
    search : searchReducer,
    starReducer,
    getStarReducer,

})
export default appReducer;