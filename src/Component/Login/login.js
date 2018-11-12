import React, { Component } from 'react';
class Login extends Component {
      constructor(props, context) {
        super(props);
     }
    
    async login(){
        await this.props.onLogin();
       
        if(localStorage.getItem('login') === 'login')
        {
            const id = this.props.auth.uid
            this.props.history.push(`/Messenger/${id}`)
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
