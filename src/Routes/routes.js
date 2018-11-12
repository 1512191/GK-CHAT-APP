import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import LoginContainer from './../Container/LoginContainer';
import DashboardContainer from '../Container/DashboardContainer';
class RouterURL extends Component {
    render() {
        return (
            <div>
            <Switch>
                <Route exact path='/' component={LoginContainer} />
                <Route path='/Messenger/:id' render={(props, match) => <DashboardContainer  {...props} match={match}/>   }/>
            </Switch>
        

            </div>
        );
    }
}
export default RouterURL;