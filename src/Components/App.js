import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.scss';
import LoginView from './auth-sign-in/login-view';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-intro">
          <LoginView />
        </div>
      </div>
    );
  }
}

export default App; 
