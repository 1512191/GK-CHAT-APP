import React, { Component } from 'react';
import {firebaseGetUser} from '../../Action/user'
class Message extends Component {

    render() {
        const {mesg, index} = this.props;
        return (
            <div>
                <li key={index} className="clearfix">
                                                <div className="message-data align-right">
                                                    <span className="message-data-time" >{mesg.timeMessage}</span> &nbsp; &nbsp;
                                                        <span className="message-data-name" >{mesg.idSender}</span> <i className="fa fa-circle me"></i>
                    
                                                </div>
                                                <div className="message other-message float-right">
                                                   {mesg.text}
                                                    </div>
                                    </li>
            </div>
        );
    }
}
const mapDispathToProps = (dispatch)=>{
    return {
        displayUser: (id) => dispatch(firebaseGetUser(id))
    }
}
const mapStateToProps = (state)=>{
    return {
        user: state.chooseReducer
    }
}
export default Message;