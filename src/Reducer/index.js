import authReducer from './../Reducer/login';
import listReducer from './../Reducer/list_users'
import chooseReducer from './user'
import listChatReducer from './list_chat'
import { combineReducers } from 'redux';
import {firebaseReducer} from 'react-redux-firebase';
import searchReducer from './Search'
const appReducer = combineReducers({
    authReducer,
    listReducer,
    chooseReducer,
    listChatReducer,
    firebase : firebaseReducer,
    search : searchReducer,
})
export default appReducer;