import React, { Component } from 'react';
import '../../App.css';

class HeaderView extends Component {

  render() {
    let title = this.props.headerTitle;

    return (
      <div className="App">
        <header className="App-header">
          <div className="App-title">{title}</div>
        </header>
      </div>
    );
  }
}

export default HeaderView; 
