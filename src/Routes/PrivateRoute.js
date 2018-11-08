import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from '../Component/Header/Header'
import { connect } from 'react-redux';
 
const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...otherProps
}) => (
        <Route {...otherProps} component={(props) => {
            
            if (localStorage.getItem('login') === 'login') {
                return (
                    <div>
                        <Header />
                        <Component {...props} />
                    </div>
                );
            } else {
                return (
                    <Redirect to='/' />
                );
            }
        }} />
    );
 
const mapStateToProps = (state) => ({
    isAuthenticated: state.authReducer.authenticated
});
 
export default connect(mapStateToProps)(PrivateRoute);