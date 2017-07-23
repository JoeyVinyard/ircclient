import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';

import {Form, FormGroup, Col, ControlLabel, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import formTextComponent from '../util/formTextComponent';

import * as actions from '../../actions';

class Signin extends Component{
	handleFormSubmit(formProps){
		this.props.signup(formProps);
	}

	render(){
		const {handleSubmit, fields: {username,password}}=this.props;
		return(
			<Col className="formContainer" sm={4} smOffset = {4}>
				<Col sm={10} smOffset={1}>
					<h3>Sign in</h3>
					<Form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
						<Field name="username" text="Username" component={formTextComponent} />
						<Field name="password" text="Password" type="password" component={formTextComponent} />
						<FormGroup>
							<Col xs={3} sm={3} className="formItem">
								<Button type="submit">
									Sign in
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

Signin = connect(mapStateToProps, actions)(Signin);

export default reduxForm({
	form: 'signin',
	fields: ['username','password']
})(Signin);