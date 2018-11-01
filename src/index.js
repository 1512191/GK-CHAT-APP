import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import appReducer from './Reducer/index';
import thunk from 'redux-thunk'


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

const store = createStore(
    appReducer,
    applyMiddleware(thunk),
    
);
ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>, document.getElementById('root'));
serviceWorker.unregister();
