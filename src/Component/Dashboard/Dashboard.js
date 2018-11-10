import React, { Component } from 'react';
import './Dashboard.css'
import Header from '../Header/Header'
import Search from '../Search/Search';
import PeopleList from '../PeopleList/PeopleList';
import Chat from '../Chat/Chat';
import Send from '../Send/Send';
import firebase from 'firebase'
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state={
            uid :'',
        }
    }
    componentDidMount() {
        if (localStorage.getItem('login') === 'logout') {
            this.props.history.push('/');
        }
    }
    
    render() {
      
        return (
            <div>
                <Header />
                <div className="container clearfix">
                <div className="people-list" id="people-list">
                    <Search />
                    <PeopleList />
                </div>
                <Chat id={this.props.match.params.id} auth={this.props.auth}  />
            </div>
            </div>
        );
    }
}

export default Dashboard;