import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Grid } from 'semantic-ui-react';
import HeaderView from '../header/header-view';
import FieldErrorView from '../common/error-view';
import HomePage from '../home/home-view';

class LoginPage extends Component{
	constructor(props){
		super(props);
		this.state = {
		  fields: {
        email: '',
        password: ''
      },
      errors: {},
		}
		this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e){
		e.preventDefault();    
		const formValidationFeedback = this.handleFormValidation(this.state.fields);
		debugger
    if(formValidationFeedback.isFormValid){
			// Show home page
			return(
				<div>
					<HomePage />
					<Link to="/home" />
				</div>
			)
			debugger
    }else{
      this.setState({errors:formValidationFeedback.errors});
    }
  }

  handleChange(field, e){
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({
      fields,
      errors: {}
    });
	}

	handleFormValidation(fields){
		let errors = {};
		let formIsValid = true;
		let result = {};
		if(fields['email'] === ''){
			formIsValid = false;
			errors['email'] = "Please provide your email";
		}
		else if(fields['email'] !== 'demo@xyz.com'){
			formIsValid = false;
			errors['email'] = "Email Id is not correct";
		}
		else if(fields['password'] === ''){
			formIsValid = false;
			errors['password'] = "Please provide your password";
		}
		else if(fields['password'] !== 'demo@123'){
			formIsValid = false;
			errors['password'] = "Password is not correct";
		}

		result['errors'] = errors;
		result['isFormValid'] = formIsValid;
		return result;
	}

	getFieldErrorView(error){
		return(
			<FieldErrorView  error = {error}/>
		)
	}

	getLoginFormView(){
		return(
			<div className= "login-form form-background">
			 <div className='form-header'>
          <div className='form-tittle'>
            <span>Log in to Fake Twitter</span>
          </div>
        </div>
				<div className = "form-body">
					<Form className = "login-form" onSubmit={this.handleSubmit}>
						<Form.Field className = "form-field">
							<label className='form-label'>Email</label>
							<div className="ui input icon">
                <input
                  name='email' type='email' placeholder="Enter your email Id"
                  onChange={this.handleChange.bind(this, 'email')} value={this.state.fields["email"]}
                  className={`${this.state.errors['email'] && 'highlight-input'}`}
                />
              </div>
							{this.state.errors['email'] && this.getFieldErrorView(this.state.errors["email"])}
						</Form.Field>
						<Form.Field className='form-field'>
              <label className='form-label'>Password</label>
              <div className="ui input icon">
                <input
                  name='password' type='password' placeholder="Password"
                  onChange={this.handleChange.bind(this, 'password')} value={this.state.fields["password"]}
                  className={`${this.state.errors['password'] && 'highlight-input'}`} />
              </div>
              {this.state.errors['password'] && this.getFieldErrorView(this.state.errors["password"])}
            </Form.Field>
						<div className='form-footer'>
							<Grid  columns='equal'>
								<Grid.Column width={16} className="right">
									<Button className='app-btn blue-filled-btn' type='submit'>Sign In</Button>
								</Grid.Column>
							</Grid>
						</div>
					</Form>
				</div>
			</div>
		)
	}

	render(){
		return(
			<div>
			<HeaderView />
			<div className='login-view'>
				{ this.getLoginFormView() }
			</div>
		</div>
		)
	}
}

export default LoginPage;