import React, { Component } from 'react';
import {searchUser} from '../../Action/user'
import {connect} from 'react-redux'
class Search extends Component {
    constructor(props) {
        super(props);
        this.state={
            keyword : ''
        }
    }
    onChange = (event)=>{
        this.setState({
            keyword : event.target.value
        })
        this.props.search(this.state.keyword)// tìm khi thực hiện nhập
    }
    onSearch = ()=>{
        this.props.search(this.state.keyword)
    }
    render() {
        return (
            <div className="search">
                <input type="text" name= "keyword" value={this.state.keyword} onChange={(event)=>this.onChange(event)}placeholder="search" />
                <i onClick={()=>this.onSearch()}className="fa fa-search"></i>
            </div>
        );
    }
}
const mapDispathToProps = (dispatch)=>{
    return {
        search : (keyword) => dispatch(searchUser(keyword))
    }
}
export default connect(null, mapDispathToProps)(Search);