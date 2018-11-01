import React, { Component } from 'react';
import Login from './../Component/Login/login'
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom'
import {firebaseSignIn, firebaseChange} from './../Action/auth'
class LoginContainer extends Component {
    render() {
        const {onLogin, loginChange, isAuthenticated}=this.props;
        return (
            <Login
            onLogin ={onLogin}
                loginChange = {loginChange}
                isAuthenticated={isAuthenticated}
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
        isAuthenticated : state.authReducer.authenticated
    }
};
 
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));