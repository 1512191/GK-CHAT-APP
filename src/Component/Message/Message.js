import React, { Component } from 'react';
import {timeConverter} from '../../Utils/util'
class Message extends Component {
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
        // moment(Date(mesg.timeMessage)).calendar()
    
    //    let displayText = mesg.typeMes == 'image'? <img src={mesg.text} width='80px' height='80px'/> : <div>{mesg.text}</div>
        return (
            <div>
                <li key={index} className="clearfix">
                                                <div className="message-data align-right">
                                              
                                                    <span className="message-data-time" >{timeConverter(mesg.timeMessage)}</span> &nbsp; &nbsp;
                                                        <span className="message-data-name" >Me</span> <i className="fa fa-circle me"></i>
                    
                                                </div>
                                                <div className="message other-message float-right">
                                                   {displayMessage}
                                                    </div>
                                    </li>
            </div>
        );
    }
}
export default Message;