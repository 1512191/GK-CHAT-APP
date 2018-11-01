import React, { Component } from 'react';
import './Dashboard.css'
class Dashboard extends Component {
    constructor(props) {
        super(props);

    }
    async signOut(){
        await this.props.onLogout()
        if(await this.props.isAuthenticated === false)
        {
            this.props.history.push('/');
        }
    }
    render() {
        return (
            <div className="header">
                <div className="header-right">
                    <a className="active" href="#home">Home</a>
                    <a href="#about">About</a>
                    <a onClick={()=>this.signOut()} >Sign out</a>
                </div>
            </div>
        );
    }
}

export default Dashboard;