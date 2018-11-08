import React, { Component } from 'react';

class MessageRe extends Component {
    render() {
        const {mesg, index} = this.props
        return (
            
                <li key={index}>
                                                <div className="message-data">
                                                    <span className="message-data-name"><i className="fa fa-circle online"></i> {mesg.idReceiver}</span>
                                                    <span className="message-data-time">{mesg.timeMessage}</span>
                                                </div>
                                                <div className="message my-message">
                                                   {mesg.text}
                                                    </div>
                                            </li>
            
        );
    }
}

export default MessageRe;