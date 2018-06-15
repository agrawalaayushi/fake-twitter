import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';

class HomePage extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
  }
  
  render() {
    return (
      <div className="App">
        This is home page
      </div>
    );
  }
}

export default HomePage; 
