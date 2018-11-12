import React, { Component } from 'react';
import { firebaseAddMessage, firebaseGetMessage, clearMessage } from '../../Action/chatMessage'
import { firebaseGetUser } from '../../Action/user'
import { firebaseSignOut } from '../../Action/auth'
import firebase, { storage } from 'firebase'
import { connect } from 'react-redux'
import Message from '../Message/Message'
import MessageRe from '../MessageRe/MessageRe';
import { withRouter } from 'react-router-dom';
import {firebaseAddStar, toggleStar, firebaseGetStar} from '../../Action/toogle_star'
class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            uid: '',
            idReceiver: '',
            image: '',
            url: '',
            typeMes: '', 
            star: {}
        }

    }

    componentDidMount() {
        //console.log('didmount')
        let idSender = this.state.uid;
        let idReceiver = this.props.match.params.id;
        let key = idSender > idReceiver ? idReceiver + idSender : idSender + idReceiver;
        this.props.clearMessage();
        //console.log(this.state.uid);
        //console.log(idReceiver)
        this.props.displayUser(idReceiver)
        this.props.displayMessage(key);
    }
    handleKeyUp = (e) => {
        //e.preventDefault();
        if (e.keyCode === 13) {
            this.sendMessage(e);

        }
    }
    onChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
            typeMes: 'text'
        })

    }

    componentWillUnmount() {
        //console.log('unmout')
        let idSender = this.state.uid;
        let { idReceiver } = this.props.id;
        let key = idSender > idReceiver ? idReceiver + idSender : idSender + idReceiver;
        firebase.database().ref('messages').child(key).off()
    }
    componentWillReceiveProps(nextProps) {
        //console.log('wilre')
        //console.log(nextProps.match.params.id)
        let id = nextProps.match.params.id
        this.setState({
            idReceiver: nextProps.match.params.id
        })
        if (id !== this.props.match.params.id) {
            this.props.clearMessage();
            let idSender = this.state.uid;
            //console.log(firebase.auth().currentUser)
            //console.log(idSender)
            let idReceiver = nextProps.match.params.id;
            //console.log(this.props.id)
            let key = idSender > idReceiver ? idReceiver + idSender : idSender + idReceiver;
            this.props.getStar(idReceiver, idSender)
            //console.log(key)
            this.props.displayUser(idReceiver)
            //console.log(this.props.auth.uid)
            this.props.displayMessage(key);
        }
    }
    handleAuth = (result) => {
        this.setState({
            uid: result.uid
        })
    }
    componentWillMount() {
        console.log('willmount')
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                let idSender = user.uid;
                //console.log(firebase.auth().currentUser)

                let idReceiver = this.props.match.params.id;
                this.setState({
                    uid: idSender,
                    idReceiver: this.props.match.params.id,
                    //star : this.props.getStar(idReceiver, idSender)
                })
                //console.log(this.props.id)
                let key = idSender > idReceiver ? idReceiver + idSender : idSender + idReceiver;
                //console.log(key)
                // this.props.displayUser(idReceiver)
                //console.log(this.props.auth.uid)
                //console.log(this.props.getStar(idReceiver, idSender))
                
                this.props.clearMessage();
                this.props.displayMessage(key);
            }
            else {
                console.log('Không có ai đăng nhập')
                this.props.signOut()

            }
        })
    }

    sendMessage = (e) => {
        e.preventDefault();
        let timeMessage = firebase.database.ServerValue.TIMESTAMP
        let message = {
            idSender: this.props.auth.uid,
            idReceiver: this.props.id,
            timeMessage,
            text: this.state.message,
            typeMes: this.state.typeMes,
        }
        let idSender = this.props.auth.uid;
        let idReceiver = this.props.id;
        let key = idSender > idReceiver ? idReceiver + idSender : idSender + idReceiver;

        this.props.sendFirebase(message, key)
        document.getElementById('reset').reset()
    }
    onChangeImage = async (e) => {
        e.preventDefault()
        if (e.target.files[0]) {
            let filename = e.target.files[0];
            await this.setState(() => ({ image: filename, typeMes: 'image' }))
        }
        let uploadFile = firebase.storage().ref(`images/${this.state.image.name}`)
        uploadFile.put(this.state.image).then(result => {
            uploadFile.getDownloadURL().then(url => {
                let timeMessage = firebase.database.ServerValue.TIMESTAMP
                let message = {
                    idSender: this.props.auth.uid,
                    idReceiver: this.props.id,
                    timeMessage,
                    text: url,
                    typeMes: this.state.typeMes,
                }
                let idSender = this.props.auth.uid;
                let idReceiver = this.props.id;
                let key = idSender > idReceiver ? idReceiver + idSender : idSender + idReceiver;

                this.props.sendFirebase(message, key)
            }

            )
        })

    }
    toggleStar = async ()=>{
        await this.props.toggleStar();
        if(await this.props.star !== null){
            let star = {
                star : this.props.star
            }
            let idReceiver = this.props.id;
            let idSender = this.props.auth.uid
            this.props.addStar(star, idReceiver, idSender)
            this.props.getStar(this.props.id, this.props.auth.uid)
        }
    }
    render() {

        //console.log('render')
        let { user, messages } = this.props;
        let star = this.props.getStar(this.props.id, this.props.auth.uid)
        let displayStar = 'unchecked'
       // console.log(this.state.star)
        if(star){
            if(star.star === true){
                displayStar = 'checked'
            }
        }
        
        let header = user ? (<div className="chat-header clearfix">
            <img src={user.photoURL} width="50px" height="50px" alt="avatar" />

            <div className="chat-about">
                <div className="chat-with">Chat with {user.displayName}</div>
                <div className="chat-num-messages">already {messages.length} messages</div>
            </div>
            <div className="rating-star" onClick={()=>this.toggleStar()}>
                <i className="fa fa-star" id={displayStar}></i>
            </div>
        </div>) : ''
        //console.log(user)
        //       if(this.state.uid && messages){
        let Mesg = [];
        Mesg = messages.map((mesg, index) => (mesg.idSender === this.state.uid ? <Message key={index} user={user.displayName} mesg={mesg} index={index} /> : <MessageRe key={index} user={user.displayName} index={index} mesg={mesg} />))

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
                    <form id="reset" onSubmit={(e) => this.sendMessage(e)}>
                        <textarea name="message" id="message-to-send" onKeyUp={(e) => this.handleKeyUp(e)} onChange={(e) => this.onChange(e)} placeholder="Type your message" rows="3"></textarea>

                        <i className="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
                    <label htmlFor="image" ><i className="fa fa-file-image-o"></i></label>
                        <input id="image" type="file" onChange={(e) => this.onChangeImage(e)} name="image" />

                        <button type="submit" >Send</button>
                    </form>
                </div>
            </div>
        );
    }
}
const mapDispathToProps = (dispatch) => {
    return {
        sendFirebase: (inforMess, key) => dispatch(firebaseAddMessage(inforMess, key)),
        displayMessage: (key) => dispatch(firebaseGetMessage(key)),
        displayUser: (uid) => dispatch(firebaseGetUser(uid)),
        clearMessage: () => dispatch(clearMessage()),
        signOut: () => dispatch(firebaseSignOut()),
        toggleStar: ()=>dispatch(toggleStar()),
        addStar:(star, key, uid)=>dispatch(firebaseAddStar(star, key, uid)),
        getStar:(key, uid)=>dispatch(firebaseGetStar(key, uid))
    }
}
const mapStateToProps = (state) => {
    // console.log(state.firebase.auth)
    return {
        //uid : state.authReducer.infor.uid,
        //idReceiver:state.chooseReducer.uid,
        user: state.chooseReducer,
        messages: state.listChatReducer,
        auth: state.firebase.auth,
        star : state.starReducer
    }
}
export default withRouter(connect(mapStateToProps, mapDispathToProps)(Chat));