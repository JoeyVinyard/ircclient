import React, {Component} from 'react';
import {FormGroup, InputGroup, FormControl, Button} from 'react-bootstrap';

class MessageFieldInput extends Component{
	render(){

		const {text, type, input, meta: {dirty, error}, input: {name}} = this.props;

		return(
			<FormGroup className = "messageField">
				<InputGroup>
					<FormControl name={name} value={input.value} onChange={input.onChange} type="text" />
					<InputGroup.Button>
						<Button type="submit">Send</Button>
					</InputGroup.Button>
				</InputGroup>
			</FormGroup>
		);
	}
}

export default MessageFieldInput;