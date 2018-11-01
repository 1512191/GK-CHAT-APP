import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
class Login extends Component {
      constructor(props, context) {
        super(props);
     }
    // componentWillUpdate(nextProps) {
    //     //this.props.loginChange();
    //     console.log(nextProps.isAuthenticated)
    //     if (nextProps.isAuthenticated) {
    //       this.props.history.push("/Dashboard");
    //     }
    //   }
    // //   componentWillMount(){

    // //   }
    //   componentDidMount(){
    //     //  if(this.props.isAuthenticated){
    //     //     this.props.history.push("/Dashboard");
    //     //  }
    //     console.log(this.props.isAuthenticated)
    //   }
    // login = ()=>{
    // //    console.log(this.props.login())
    // //    }
    //     this.props.login();
    //     if(this.props.isAuthenticated)
    //     {
    //         this.props.history.push('/Dashboard')
    //     }
    // }
    async login(){
        await this.props.onLogin();
       
        if( await this.props.isAuthenticated)
        {
            this.props.history.push('/Dashboard')
        }
    }
    render() {
        return (
            <div className="container">
            <div className="row social-signin-container" style={{textAlign:"center"}}>
                <div className="col s10 offset-s1 center-align">
                    <img alt="Sign in" id="sign-in" src="/image/user.jpg" width="100px" heigh="100px"/>
                    <h4 id="sign-in-header">Sign In to start</h4>
                    <button className="social-signin" onClick={()=>this.login()}>
                        <i className="fa fa-google social-signin-icon" />
                        Sign In With Google
                    </button>
                </div>
            </div>
            </div>
        );
    }
   
}
export default Login;
