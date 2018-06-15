import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import 'semantic-ui-css/semantic.min.css';

import './index.scss';
import App from './Components/App';

import registerServiceWorker from './registerServiceWorker';
import LoginPage from './Components/auth-sign-in/login-view';
import HomePage from './Components/home/home-view';

 ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App}/>
		<Route path="/login" component={LoginPage} />
		<Route path="/home" component={HomePage} />
	</Router>,
	document.getElementById('root'));
registerServiceWorker();
