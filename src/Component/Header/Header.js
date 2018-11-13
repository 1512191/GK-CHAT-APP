import React, { Component } from 'react';
import {firebaseSignOut} from '../../Action/auth'
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom'
import './Header.css'
class Header extends Component {
    signOut = ()=>{
        this.props.onLogout()
        this.props.history.push('/');
    }
    render() {
        
      
       
      
        return (
       
            <div className="header">
                <div style={{color : 'rgb(117, 185, 89)', textAlign:"center", fontSize:'30px'}}>CHAT APP </div>
                <div className="header-right">
                    <button className="btn btn-primary"onClick={() => this.signOut()} >Sign out</button>
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
