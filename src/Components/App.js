import React, { Component } from 'react';
import '../App.css';
import {
	HashRouter,
	Route
} from 'react-router-dom';

import LoginPage from './auth-sign-in/login-view';
import HomePage from './home/home-view';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-intro">
          <HashRouter>
            <div> 
              <Route exact path="/" render={(props)=><LoginPage {...props}/>}/>
              <Route exact path="/login" render={(props)=><LoginPage {...props}/>} />
              <Route exact path="/home" render={(props)=><HomePage {...props} />} />
            </div>
        	</HashRouter >,
        </div>
      </div>
    );
  }
}

export default App; 
