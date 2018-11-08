import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Redirect, BrowserRouter as Router } from 'react-router-dom';
import RouterURL from './Routes/routes';
import { authRef } from './Utils/config';
import Header from './Component/Header/Header'
class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   isLogin : false,
    // }
  };
 
  render() {
    return (
      <div>
        
        <Router >
          
         
          <RouterURL />
         
        </Router>
      </div>
    );
  }
}
{/* <div>
       
       <Router>
         <div>
         <Header></Header>
         <RouterURL />
         </div>
       </Router>
     </div> */}
export default App;
