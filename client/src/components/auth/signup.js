import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import * as actions from '../../actions';

import {Form, FormGroup, Col, ControlLabel, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import formTextComponent from '../util/formTextComponent';

class Signup extends Component{
	handleFormSubmit(formData){
		this.props.signup(formData);
	}

	render(){
		const {handleSubmit, fields: {username,password,confpass}}=this.props;
		return(
			<Col className="formContainer" sm={4} smOffset = {4}>
				<Col sm={10} smOffset={1}>
					<h3>Sign Up</h3>
					<Form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
							<Field name="username" text="Username" component={formTextComponent} />
							<Field name="password" text="Password" type="password" component={formTextComponent} />
							<Field name="confpass" text="Confirm Password" type="password" component={formTextComponent} />
						<FormGroup>
							<Col xs={3} sm={3} className="formItem">
								<Button type="submit">
									Sign Up
								</Button>
							</Col>
								<LinkContainer className="pull-right formItem"  to="/signin">
									<Button bsStyle="link">Sign in</Button>
								</LinkContainer>
					    </FormGroup>
					</Form>
				</Col>
			</Col>
		);
	}

}

function validate(formProps){
	var errors = {}
	if(!formProps.username)
		errors.username = "Please provide a username";
	if(!formProps.password)
		errors.password = "Please provide a password";
	if(!formProps.confpass)
		errors.confpass = "Please confirm your password";
	if(formProps.password!=formProps.confpass)
		errors.confpass = "Passwords must match";
	return errors;
}

function mapStateToProps(state){
	return {errorMessage: state.auth.error};
}

Signup = connect(mapStateToProps, actions)(Signup)

export default reduxForm({
	form: 'signup',
	fields: ['username','password','confpass'],
	validate: validate
})(Signup);