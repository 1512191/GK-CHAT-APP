import React, { Component } from 'react';
import {firebaseAddMessage, firebaseGetMessage, clearMessage} from '../../Action/chatMessage'
import {firebaseGetUser} from '../../Action/user'
import firebase from 'firebase'
import {connect} from 'react-redux'
import Message from '../Message/Message'
import MessageRe from '../MessageRe/MessageRe';
import {withRouter} from 'react-router-dom'
class Chat extends Component {
    constructor(props) {
        super(props);
        this.state={
            message: '',
            uid :'',
            idReceiver:''
        }
    }
    
    componentDidMount(){
        let idSender = this.state.uid;
        //console.log(firebase.auth().currentUser)
        //console.log(idSender)
        let idReceiver = this.props.match.params.id;
        //console.log(this.props.id)
        let key = idSender > idReceiver ? idReceiver + idSender : idSender + idReceiver;
        this.props.clearMessage();
        //console.log(key)
        this.props.displayUser(idReceiver)
        //console.log(this.props.auth.uid)
        this.props.displayMessage(key);
    }
    handleKeyUp = (e)=>{
        //e.preventDefault();
        if (e.keyCode === 13)
        {
            this.sendMessage(e);
            
        }
    }
    onChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        })

    }
    
    componentWillUnmount(){
        console.log('unmout')
        let idSender = this.state.uid;
        let {idReceiver} = this.props.id;
        let key = idSender > idReceiver ? idReceiver + idSender : idSender + idReceiver;
        firebase.database().ref('messages').child(key).off()
    }
    componentWillReceiveProps(nextProps){
        //console.log(nextProps.match.params.id)
        let id = nextProps.match.params.id
        this.setState({
            idReceiver:nextProps.match.params.id
        })
        if(id !== this.props.match.params.id){
            this.props.clearMessage();
            let idSender = this.state.uid;
        //console.log(firebase.auth().currentUser)
        //console.log(idSender)
        let idReceiver = nextProps.match.params.id;
        //console.log(this.props.id)
        let key = idSender > idReceiver ? idReceiver + idSender : idSender + idReceiver;
        //console.log(key)
        this.props.displayUser(idReceiver)
        //console.log(this.props.auth.uid)
        this.props.displayMessage(key);
        }
    }
    handleAuth=(result)=>{
        this.setState({
            uid : result.uid
        })
    }
    componentWillMount(){
        firebase.auth().onAuthStateChanged(user=>{
            if(user)
            {
                let idSender = user.uid;
                //console.log(firebase.auth().currentUser)
                
                let idReceiver = this.props.match.params.id;
                this.setState({
                    uid : idSender,
                    idReceiver : this.props.match.params.id,
                })
                //console.log(this.props.id)
                let key = idSender > idReceiver ? idReceiver + idSender : idSender + idReceiver;
                //console.log(key)
               // this.props.displayUser(idReceiver)
                //console.log(this.props.auth.uid)
                this.props.clearMessage();
                this.props.displayMessage(key);
            }
            else
            {
                console.log('Không có ai đăng nhập')
            }
        })
    }
    // componentDidUpdate(){
    //     console.log('did update')
    //     let idSender = this.state.uid;
    //     //console.log(firebase.auth().currentUser)
    //     console.log(idSender)
    //     let idReceiver = this.state.idReceiver;
    //     //console.log(this.props.id)
    //     let key = idSender > idReceiver ? idReceiver + idSender : idSender + idReceiver;
    //     //console.log(key)
    //     this.props.displayUser(idReceiver)
    //     //console.log(this.props.auth.uid)
    //     this.props.displayMessage(key);
    // }
    sendMessage=(e)=>{
        e.preventDefault();
        let timeMessage = firebase.database.ServerValue.TIMESTAMP
        let message = {
            idSender : this.props.auth.uid,
            idReceiver : this.props.id,
            timeMessage,
            text : this.state.message
        }
        let idSender = this.props.auth.uid;
        let idReceiver = this.props.id;
        let key = idSender > idReceiver ? idReceiver + idSender : idSender + idReceiver;
        
        this.props.sendFirebase(message, key)
       document.getElementById('reset').reset()
    }
    render() {
        
        //console.log(key)
        //console.log(this.props.auth.uid)
        // this.props.displayMessage(key);
        let {user, messages} = this.props;
        //console.log(this.state.uid)
       //console.log(messages)
        let header = user ? (<div className="chat-header clearfix">
        <img src={user.photoURL} width="50px" height="50px"alt="avatar" />

        <div className="chat-about">
            <div className="chat-with">Chat with {user.displayName}</div>
            <div className="chat-num-messages">already {messages.length} messages</div>
        </div>
        <i className="fa fa-star"></i>
    </div>) : ''
       //console.log(user)
    //       if(this.state.uid && messages){
        let Mesg = [] ;
          Mesg = messages.map((mesg, index)=>(mesg.idSender === this.state.uid?<Message key={index} mesg={mesg} index={index}/> : <MessageRe key={index} index={index}mesg={mesg}/>))
   
        return (
            
            <div className="chat">
           
                {header}
                <div className="chat-history">
                    <ul>
                        {
                             Mesg
                        }
                   
                    </ul>

                </div>
                <div className="chat-message clearfix">
                <form id="reset" onSubmit={(e)=>this.sendMessage(e)}>
                    <textarea  name="message" id="message-to-send" onKeyUp={(e) => this.handleKeyUp(e)} onChange={(e)=>this.onChange(e)}placeholder="Type your message" rows="3"></textarea>

                    <i className="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
                        <i className="fa fa-file-image-o"></i>

                    <button type="submit" >Send</button>
                    </form>
                </div>
            </div>
        );
    }
}
const mapDispathToProps = (dispatch)=>{
    return {
        sendFirebase: (inforMess, key)=> dispatch(firebaseAddMessage(inforMess, key)),
        displayMessage: (key) => dispatch(firebaseGetMessage(key)),
        displayUser:(uid) => dispatch(firebaseGetUser(uid)),
        clearMessage: ()=>dispatch(clearMessage()),
    }
}
const mapStateToProps = (state)=>{
    // console.log(state.firebase.auth)
    return {
        //uid : state.authReducer.infor.uid,
        //idReceiver:state.chooseReducer.uid,
        user : state.chooseReducer,
        messages : state.listChatReducer,
        auth : state.firebase.auth,
    }
}
export default withRouter(connect(mapStateToProps,mapDispathToProps) (Chat));