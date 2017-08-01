import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {Form} from 'react-bootstrap';

import MessageFieldInput from './messagefieldinput';

class MessageField extends Component{

	handleFormSubmit(formProps){
		console.log(formProps);
	}

	render(){
		const {handleSubmit, fields: {message}}=this.props;

		return(
			<Form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				<Field component = {MessageFieldInput} name = "message"/>
			</Form>
		);
	}
}

//MessageField = connect(mapStateToProps, actions)(MessageField);

export default reduxForm({
	form: 'messagefield',
	fields: ['message']
})(MessageField);