import React, { Component } from 'react';
import {firebaseGetUser} from '../../Action/user'
import {connect} from 'react-redux'
import moment from 'moment' 
class Message extends Component {
    constructor(props) {
        super(props);
        
    }
    
// componentDidMount()
// {
//     this.props.displayUser(this.props.mesg.idSender);

// }
    render() {
        const {mesg, index} = this.props;
        let displayMessage = '';
        if(mesg.typeMes == 'text')
        {
            let link = mesg.text.match(/((http|ftp|https):\/\/)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
            if(link){
                let imgLink = mesg.text.match(/\.(gif|jpg|jpeg|tiff|png)/g);
                if(imgLink){
                    displayMessage = <img src={mesg.text} width='80px' height='80px'/>
                }else{
                    displayMessage = <a href={mesg.text}>{mesg.text}</a>
                }
            }else{
                displayMessage = <div>{mesg.text}</div>
            }
        }else{
            displayMessage = <img src={mesg.text} width='80px' height='80px'/>
        }
    
    
    //    let displayText = mesg.typeMes == 'image'? <img src={mesg.text} width='80px' height='80px'/> : <div>{mesg.text}</div>
        return (
            <div>
                <li key={index} className="clearfix">
                                                <div className="message-data align-right">
                                              
                                                    <span className="message-data-time" >{moment(Date(mesg.timeMessage)).calendar()}</span> &nbsp; &nbsp;
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
// const mapDispathToProps = (dispatch)=>{
//     return {
//         displayUser: (id) => dispatch(firebaseGetUser(id))
//     }
// }
// const mapStateToProps = (state)=>{
//     return {
//         user: state.chooseReducer
//     }
// }
export default Message;