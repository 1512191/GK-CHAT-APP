import React, { Component } from 'react';
import Dashboard from './../Component/Dashboard/Dashboard'
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom'
import {firebaseSignOut} from './../Action/auth'
import {firebaseGetUser} from './../Action/user'
class DashboardContainer extends Component {
    render() {
        const {onLogout, isAuthenticated, auth, display}=this.props;
        return (
            <Dashboard
            onLogout ={onLogout}
            isAuthenticated={isAuthenticated}
            auth = {auth}
            display = {display}
            
            />
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => dispatch(firebaseSignOut()),
       displayUser: (uid)=>dispatch(firebaseGetUser(uid)),
      
    }
}
   
    
const mapStateToProps = (state) => {
 
    return {
        isAuthenticated : state.authReducer.authenticated,
        auth : state.firebase.auth,
    }
};
 
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));