import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import LoginView from './auth-sign-in/login-view';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Fake Twitter</h1>
        </header>
        <p className="App-intro">
          <LoginView />
        </p>
      </div>
    );
  }
}

export default App; 
