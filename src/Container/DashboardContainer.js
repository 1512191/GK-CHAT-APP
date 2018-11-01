import React, { Component } from 'react';
import Dashboard from './../Component/Dashboard/Dashboard'
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom'
import {firebaseSignOut} from './../Action/auth'
class DashboardContainer extends Component {
    render() {
        const {onLogout, isAuthenticated}=this.props;
        return (
            <Dashboard
            onLogout ={onLogout}
            isAuthenticated={isAuthenticated}    
            />
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => dispatch(firebaseSignOut),
    }
}
   
    
const mapStateToProps = (state) => {
    return {
        isAuthenticated : state.authReducer.authenticated
    }
};
 
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));