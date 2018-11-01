import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterURL from './Routes/routes';
import {authRef} from './Utils/config';
class App extends Component {
  constructor(props) {
    super(props);
    
  };
  
  render() {
    return (
      <Router>
        <RouterURL />
    </Router>
    );
  }
}

export default App;
