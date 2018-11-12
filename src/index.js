import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import configureStore from './Utils/config'
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
const initialState = window.__INITIAL_STATE__ // set initial state here
const store = configureStore(initialState)
// const store = createStoreWithFirebase(appReducer,initialState )
ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>, document.getElementById('root'));
serviceWorker.unregister();
