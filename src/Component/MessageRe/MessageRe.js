import React, { Component } from 'react';
import {connect} from 'react-redux'
import {firebaseGetUser} from '../../Action/user'
import moment from 'moment' 
class MessageRe extends Component {
    constructor(props) {
        super(props);
        
    }
    
// componentDidMount()
// {
//     console.log(this.props.mesg.idReceiver)
//     this.props.displayUser(this.props.mesg.idReceiver);

// }
    render() {
        const {mesg, index} = this.props
        let displayText = mesg.typeMes == 'image'? <img src={mesg.text} width='80px' height='80px'/> : <div>{mesg.text}</div>
        return (
            
                <li key={index}>
                                                <div className="message-data">
                                                    <span className="message-data-name"><i className="fa fa-circle online"></i> You</span>
                                                    <span className="message-data-time">{moment(Date(mesg.timeMessage)).calendar()}</span>
                                                </div>
                                                <div className="message my-message">
                                                   {displayText}
                                                    </div>
                                            </li>
            
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
export default MessageRe;