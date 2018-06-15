import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import LoginView from './auth-sign-in/login-view';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <LoginView />
        </p>
      </div>
    );
  }
}

export default App; 
