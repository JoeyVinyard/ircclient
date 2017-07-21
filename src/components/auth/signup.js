import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';

import {Form, FormGroup, Col, ControlLabel, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import TextField from '../util/textfield';

class Signup extends Component{
	constructor(){
		super();
		this.state = {

		}
	}
	handleFormSubmit({username,password,confpass}){
		console.log(username, password, confpass);
	}

	render(){
		const {handleSubmit, fields: {username,password,confpass}}=this.props;
		return(
			<Col className="formContainer" sm={4} smOffset = {4}>
				<Col sm={10} smOffset={1}>
					<h3>Sign Up</h3>
					<Form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
						<FormGroup className="formItem">
							<ControlLabel>Username:</ControlLabel>
							<Field name="username" component={TextField} />
						</FormGroup>
						<FormGroup className="formItem">
							<ControlLabel>Password:</ControlLabel>
							<Field name="password" type="password" component={TextField} />
						</FormGroup>
						<FormGroup className="formItem">
							<ControlLabel>Confirm:</ControlLabel>
							<Field name="confpass" type="password" component={TextField} />
						</FormGroup>
						<FormGroup>
							<Col xs={3} sm={3} className="formItem">
								<Button type="submit">
									Sign Up
								</Button>
							</Col>
								<LinkContainer className="pull-right formItem"  to="/signup">
									<Button bsStyle="link">Create an Account</Button>
								</LinkContainer>
					    </FormGroup>
					</Form>
				</Col>
			</Col>
		);
	}

}

function mapStateToProps(state){
	return {errorMessage: state.auth.error};
}
export default reduxForm({
	form: 'signin',
	fields: ['username','password','confpass']
}, mapStateToProps)(Signup);