import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterURL from './Routes/routes';
class App extends Component {
  
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
export default App;
