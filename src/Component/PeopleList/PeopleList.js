import React, { Component } from 'react';
import {firebaseGetList} from './../../Action/list_users'
import {getId} from '../../Action/user'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import moment from 'moment' 
class PeopleList extends Component {
    componentDidMount(){
        this.props.getList();
        
    }
    chatMess =(uid)=>{
        this.props.chooseUser(uid);
        this.props.history.push(`/Messenger/${uid}`)
    }
    showUsersList(users) {
        if(!users) {
          return [];
        }
    
        return Object.keys(users).reduce(
          (list, uid) => {
          return [
            ...list,
            {
              uid,
              ...users[uid]
            }
          ];
        }, []);
      }
    render() {
        const {users} = this.props;

        return (
           
            
         <ul>
            { this.showUsersList(users).map((user, key) => 
           
            <li key={key} className="clearfix" onClick={() =>this.chatMess(user.uid)}>
                <img src={user. photoURL} alt="avatar" width="20px" height="20px"/>
                <div className="about">
                    <div className="name">{user.displayName}</div>
                    <div className="status">
                        <i className={user.online?"fa fa-circle online":"fa fa-circle busy"}></i> {user.online ? 'online':moment(Date(user.lastTimeLoggedIn)).calendar()}
                    </div>
                </div>
            </li>
                ) }
        </ul>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
      getList: () => {
        dispatch(firebaseGetList())
      },
      chooseUser: (uid)=>{
          dispatch(getId(uid))
      }
    }
  };
  const mapStateToProps = (state)=>{
      return{
          users:state.listReducer
      }
  }
export default withRouter(connect(mapStateToProps,mapDispatchToProps) (PeopleList));