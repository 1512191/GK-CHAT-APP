import React, { Component } from 'react';
import moment from 'moment' ;
import {timeConverter} from '../../Utils/util'
class MessageRe extends Component {
    render() {
        const {mesg, index} = this.props;
        let displayMessage = '';
        if(mesg.typeMes === 'text')
        {
            let link = mesg.text.match(/((http|ftp|https):\/\/)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/g);
            if(link){
                let imgLink = mesg.text.match(/\.(gif|jpg|jpeg|tiff|png)/g);
                if(imgLink){
                    displayMessage = <img src={mesg.text} width='80px' height='80px'alt="Hình không có"/>
                }else{
                    displayMessage = <a href={mesg.text}>{mesg.text}</a>
                }
            }else{
                displayMessage = <div>{mesg.text}</div>
            }
        }else{
            displayMessage = <img src={mesg.text} width='80px' height='80px'alt="Hình không có"/>
        }
        //let displayText = mesg.typeMes == 'image'? <img src={mesg.text} width='80px' height='80px'/> : <div>{mesg.text}</div>
        // moment(Date(mesg.timeMessage)).calendar()
        return (
            
                <li key={index}>
                                                <div className="message-data">
                                                    <span className="message-data-name"><i className="fa fa-circle online"></i> You</span>
                                                    <span className="message-data-time">{timeConverter(mesg.timeMessage)}</span>
                                                </div>
                                                <div className="message my-message">
                                                   {displayMessage}
                                                    </div>
                                            </li>
            
        );
    }
}
export default MessageRe;