import React, { Component } from 'react';
import Login from './../Component/Login/login'
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom'
import {firebaseSignIn, firebaseChange} from './../Action/auth'
class LoginContainer extends Component {
    render() {
        const {onLogin, loginChange, isAuthenticated, auth}=this.props;
        return (
            <Login
            onLogin ={onLogin}
                loginChange = {loginChange}
                isAuthenticated={isAuthenticated}
                auth = {auth}
            />
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: () => dispatch(firebaseSignIn()),
        loginChange:()=>dispatch(firebaseChange())
    }
}
   
    
const mapStateToProps = (state) => {
    return {
        isAuthenticated : state.authReducer.authenticated,
        auth:state.firebase.auth
    }
};
 
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));