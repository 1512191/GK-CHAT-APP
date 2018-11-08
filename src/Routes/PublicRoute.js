import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import createHistory from 'history/createBrowserHistory';
// const history = createHistory()
const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...otherProps
}) => (
        <Route {...otherProps} component={(props) => {
          
            if (isAuthenticated) {
                return (
                    <Redirect to='/Dashboard' />
                );
            } else {
                return (
                    <Component {...props} />
                );
            }
        }} />
    );
 
const mapStateToProps = (state) => ({
    isAuthenticated: state.authReducer.authenticated
});
 
export default connect(mapStateToProps)(PublicRoute);