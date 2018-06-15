import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.scss';

class FieldErrorView extends Component {
  render() {
    return (
      <div className="error-label">
        {this.props.error}
      </div>
    );
  }
}

export default FieldErrorView; 
