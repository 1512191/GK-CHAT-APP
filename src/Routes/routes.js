import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import LoginContainer from './../Container/LoginContainer';
import DashboardContainer from '../Container/DashboardContainer';
class RouterURL extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" render={(props) => <LoginContainer {...props} ></LoginContainer>} ></Route>
                    <Route exact path="/Dashboard" render={(props) => (<DashboardContainer {...props}></DashboardContainer>)} ></Route>
                    {/* <Route exact path="/tag/:tag" render={(props) => (<TagContainer {...props} menu={this.props.menu}></TagContainer>)}></Route> */} */}
                </Switch>
            </div>
        );
    }
}
export default RouterURL;