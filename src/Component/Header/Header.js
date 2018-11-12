import React, { Component } from 'react';
import {firebaseSignOut} from '../../Action/auth'
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom'
import './Header.css'
class Header extends Component {
    constructor(props) {
        super(props);

    }
    signOut = ()=>{
        this.props.onLogout()
        this.props.history.push('/');
        // console.log(this.props.auth)
        // if(await this.props.auth === false)
        // {
        //     
        // }
    }
    render() {
        const { auth } = this.props;
      
       
      
        return (
       
            <div className="header">
                <div style={{color : 'rgb(117, 185, 89)', textAlign:"center", fontSize:'30px'}}>CHAT APP </div>
                <div className="header-right">
                    <a className="active" href="#home">Home</a>
                    <a onClick={() => this.signOut()} >Sign out</a>
                </div>
            </div>
            
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => dispatch(firebaseSignOut())
    }
}
   
    
const mapStateToProps = (state) => {
    return {
        auth : state.authReducer.authenticated
    }
};
 const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);
export default withRouter(HeaderContainer);
