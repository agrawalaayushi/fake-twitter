import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.scss';

class HeaderView extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-title">Welcome to Fake Twitter</div>
        </header>
      </div>
    );
  }
}

export default HeaderView; 
