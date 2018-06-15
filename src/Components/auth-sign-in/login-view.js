import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'semantic-ui-react';
import HeaderView from '../header/header-view';

class LoginView extends Component{
	constructor(props){
		super(props);
		this.state = {
			email: '', 
			password: ''
		}
	}

	getLoginFormView(){

	}

	render(){
		return(
			<div>
			<HeaderView />
			<div className='login-view'>
			coming
				{ this.getLoginFormView() }
			</div>
		</div>
		)
	}
}

export default LoginView;