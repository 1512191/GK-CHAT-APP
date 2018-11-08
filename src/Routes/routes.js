import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import LoginContainer from './../Container/LoginContainer';
import DashboardContainer from '../Container/DashboardContainer';
import Header from '../Component/Header/Header'

class RouterURL extends Component {
    render() {
        return (
            <div>
               
       
            <Switch>
                {/* <PublicRoute path="/" component={LoginContainer} exact={true} />
                <PrivateRoute path="/Dashboard" component={DashboardContainer} />
                <PrivateRoute path='/Messenger/:id' component={DashboardContainer} /> */}
                <Route exact path='/' component={LoginContainer} />
                <Route path='/Messenger/:id' render={(props, match) => <DashboardContainer  {...props} match={match}/>   }/>
            </Switch>
        

            </div>
        );
    }
}
export default RouterURL;